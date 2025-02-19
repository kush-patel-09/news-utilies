import React, { Component } from 'react'

export default class Loding extends Component {
    render() {
        return (
            <>
                <div className="text-center my-5">
                    <div class="spinner-border my-5"  role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </>
        )
    }
}
