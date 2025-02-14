import React, { Component } from 'react'
import blankimg from './../blank.jpg';

export default class Newsitem extends Component {


    render() {

        const{ title,description,img,url}=this.props;

        return (
            <>
                <div className="col-4 my-2">
                    <div className="card" >
                        <img src={img ? img :blankimg} className="card-img-top" alt="..." style={{height:"250px"}} />
                        <div className="card-body">
                            <h5 className="card-title">{title ? title.slice(0,25) :"No Title"}...</h5>
                            <p className="card-text"
                            style={{minHeight:"100px"}}>{description?description.slice(0,50) :"No Description"}...</p>
                            <a href={url} target="_blank" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
