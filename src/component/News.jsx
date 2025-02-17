import React, { Component } from 'react'
import Header from './Header'
import Newsitem from './Newsitem'


export default class News extends Component {
    constructor(){
        super();
        this.state={ 
            allArtical:[],
            pageNo:1
        }
    }
    async componentDidMount(){
        let url= `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1c89ee141c4e4c17a238a7218c972b9e&page=${ this.state.pageNo}`;
        let data= await fetch (url);
        let pareseData= await data.json();
        // console.log(pareseData);

        this.setState({
            allArtical:pareseData.articles
        });
        
        
    }

    handleNextClick = async () => {
        let url= `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1c89ee141c4e4c17a238a7218c972b9e&page=${ this.state.pageNo+1}`;
        let data= await fetch (url);
        let pareseData= await data.json();
        // console.log(pareseData);

        this.setState({
            allArtical:pareseData.articles,
            pageNo: this.state.pageNo+1
        })
    }
    handleprevClick = async () => {
        let url= `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1c89ee141c4e4c17a238a7218c972b9e&page=${ this.state.pageNo-1}`;
        let data= await fetch (url);
        let pareseData= await data.json();
        // console.log(pareseData);

        this.setState({
            allArtical:pareseData.articles,
            pageNo: this.state.pageNo-1
        })
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
                                <button className="btn btn-primary float-start" onClick={this.handleprevClick}>Previous</button>
                                <button className="btn btn-primary float-end"onClick={this.handleNextClick}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
