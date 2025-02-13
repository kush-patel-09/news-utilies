import React, { Component } from 'react'
import Header from './Header'
import Newsitem from './Newsitem'

export default class News extends Component {
    constructor(){
        super();

        // create state
        this.state={
            counter:1
        }
    }
    demo=()=>{
        // change state value
        this.setState({
            counter:this.state.counter+1
        });
    }
    render() {
        return (
            <>
                <Header  title="Thies is title" desc="Thies is desc"/>

                <div className="container my-5">
                    <div className="row">
                        {/* access state vlaue */}
                        <h1>counter:{this.state.counter}</h1>
                    <button type="button" class="btn btn-primary"onClick={this.demo} >click</button> 
                       <Newsitem/>
                       <Newsitem/>
                       <Newsitem/>
                       <Newsitem/>
                       <Newsitem/>
                    </div>
                </div>
            </>
        )
    }
}
