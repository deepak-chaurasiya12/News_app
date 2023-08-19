// @ts-nocheck
import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalresults] = useState(0)
  // document.title = `${capitalizeFirstLetter(props.category)}-"NewsHunt"`






  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  //  using constructor in class based function
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     articles: [],
  //     loading: true,
  //     page: 1,
  //     totalResults: 0

  //   }
  //   document.title = `${this.capitalizeFirstLetter(props.category)}-"NewsHunt"`
  // }

  const updateNews = async () => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page} &pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(40);
    let parseData = await data.json();
    props.setProgress(90);
    setArticles(parseData.articles);
    setTotalresults(parseData.totalResults);
    setLoading(false)
    // this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading: false });

    props.setProgress(100);


  }
  useEffect(() => {
    updateNews();

  }, [])






  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1} &pageSize=${props.pageSize}`;
    setPage(page + 1);

    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    setArticles(articles.concat(parseData.articles))
    setTotalresults(parseData.totalResults)

  };
  return (
    <div>

      <h2 className='text-center ' style={{ margin: "30px 0px", marginTop: "70px" }}>News Hunt: Top {capitalizeFirstLetter(props.category)} Headlines</h2>
       {loading && < Spinner />} 
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container my-3">
          <div className="row">
            {/*!this.state.loading &&*/ articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <Newsitem title={element.title ? element.title.slice(0, 45) :""} discription={element.description ? element.description.slice(0, 88) :" "} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />

              </div>

            })}




          </div>
        </div>
      </InfiniteScroll>

      {/* <div className="container d-flex justify-content-between" >
            <button disabled={this.state.page <= 1} type='button' className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} type='button' className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
          </div> */}

    </div>




  )

}

News.defualtProps = {
  country: 'in',
  pageSize: 5,
  category: "general",
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News
