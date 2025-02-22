import React, { useState, useEffect } from 'react'
import Header from './Header'
import Newsitem from './Newsitem'
import Loding from './Loding';
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props) => {

    const [totalResults, setTotalResults] = useState(0);
    const [allArtical, setAllArtical] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [loding, setLoding] = useState(false);

    const firstNews = async () => {


        setLoding({ loding: true });

        props.chengeProgress(30);

        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}&category=${props.category}&pagesize=${pageSize}&page=1`;
        let data = await fetch(url);

        props.chengeProgress(50);

        let pareseData = await data.json();

        props.chengeProgress(70);
        // console.log(pareseData);


        setTotalResults(pareseData.totalResults);
        setAllArtical(pareseData.articles);
        setLoding(false);


        props.chengeProgress(100);
    }


    useEffect(() => {
        firstNews();
    }, []);

    const fetchMoreData = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}&category=${props.category}&pagesize=${pageSize}&page=${pageNo + 1}`;
        let data = await fetch(url);
        let pareseData = await data.json();
        // console.log(pareseData);

        setTotalResults(pareseData.totalResults);
        setAllArtical(allArtical.concat(pareseData.articles));
        setPageNo(pageNo + 1);
        setLoding(false);
    }


    
        return (
            <>
                <Header title={props.category} desc="Thies is desc" />



                {/* {this.state.loding && <Loding />} */}
                <InfiniteScroll
                    dataLength={allArtical.length}
                    next={fetchMoreData}
                    hasMore={allArtical.length <= totalResults}
                    loader={loding && <Loding />}
                >
                    <div className="container my-5">
                        <div className="row">
                            {allArtical.map((single) => {
                                return <Newsitem key={single.url}
                                    title={single.title}
                                    description={single.description}
                                    img={single.urlToImage}
                                    url={single.url}
                                    author={single.author}
                                    publishedAt={single.publishedAt} />
                            })}
                        </div >
                    </div>
                </InfiniteScroll>
            </>
        )
    }

export default News;