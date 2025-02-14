import React, { Component } from 'react'
import Header from './Header'
import Newsitem from './Newsitem'
import allnews from'./../Simplenews.json';

export default class News extends Component {
    constructor(){
        super();
        this.state={ 
            allArtical: allnews.articles 
        }
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
                    </div>
                </div>
            </>
        )
    }
}
