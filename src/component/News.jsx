import React, { Component } from 'react'
import Header from './Header'
import Newsitem from './Newsitem'


export default class News extends Component {
    constructor(){
        super();
        this.state={ 
            totalResults:0,
            allArtical:[],
            pageNo:1,
            pageSize:5
        }
    }

    fetchMoreNews= async (no) => {
        let url= `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1c89ee141c4e4c17a238a7218c972b9e&pagesize=${this.state.pageSize}&page=${ this.state.pageNo}`;
        let data= await fetch (url);
        let pareseData= await data.json();
        // console.log(pareseData);
        
        this.setState({
            totalResults:pareseData.totalResults,
            allArtical:pareseData.articles
        });
    }

    async componentDidMount(){
        this.fetchMoreNews(1);
    }

    handleNextClick = async () => {
        this.fetchMoreNews(this.state.pageNo+1);

        this.setState({
            pageNo: this.state.pageNo+1
        });
    }

    handleprevClick = async () => {
        this.fetchMoreNews(this.state.pageNo-1);

        this.setState({
            pageNo:this.state.pageNo-1
        });
    }
    
    render() {
        return (
            <>
                <Header  title="Thies is title" desc="Thies is desc"/>

                <div className="container my-5">
                    <div className="row">
                        {this.state.allArtical.map((single)=>{
                            return<Newsitem key={single.url}
                            title={single. title}
                            description={single.description}
                            img={single.urlToImage  }
                            url={single.url}/>  
                        })}

                        <div className="row">
                            <div className="col">
                                <button disabled={this.state.pageNo===1} className="btn btn-primary float-start" onClick={this.handleprevClick}>Previous</button>
                                <button disabled={this.state.pageNo > (this.state.totalResults / this.state.pageSize)} className="btn btn-primary float-end"onClick={this.handleNextClick}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
