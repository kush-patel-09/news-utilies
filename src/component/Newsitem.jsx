import React, { Component } from 'react'
import blankimg from './../blank.jpg';

export default class Newsitem extends Component {


    render() {

        const { title, description, img, url, author, publishedAt } = this.props;

        return (
            <>
                <div className="col-4 my-2">
                    <div className="card position-relative" >
                        <span className="position-absolute  badge rounded-pill bg-danger" style={{left:'10%'}}>
                            99+
                            </span>
                            <span class="visually-hidden">unread messages</span>
                            <img src={img ? img : blankimg} className="card-img-top" alt="..." style={{ height: "250px" }} />
                            <div className="card-body">
                                <h5 className="card-title">{title ? title.slice(0, 25) : "No Title"}...</h5>
                                <p className="card-text" style={{ minHeight: "100px" }}>{description ? description.slice(0, 50) : "No Description"}...</p>
                                <p style={{ minHeight: "50px" }}>by {author ? author : "no author"} on {new Date(publishedAt).toLocaleString ? publishedAt : "No publish"}</p>
                                <a href={url} target="_blank" className="btn btn-primary">Read More</a>
                            </div>
                    </div>
                </div>

            </>
        )
    }
}
