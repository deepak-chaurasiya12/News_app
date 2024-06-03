// @ts-nocheck
import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalresults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    console.log(`Fetching data from: ${url}`);
    setLoading(true);
    try {
      let data = await fetch(url);
      props.setProgress(40);
      let parseData = await data.json();
      props.setProgress(90);
      setArticles(parseData.articles);
      setTotalresults(parseData.totalResults);
      setLoading(false);
      props.setProgress(100);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    console.log(`Fetching more data from: ${url}`);

    try {
      let data = await fetch(url);
      let parseData = await data.json();
      setArticles(articles.concat(parseData.articles));
      setTotalresults(parseData.totalResults);
    } catch (error) {
      console.error("Error fetching more data: ", error);
    }
  };

  return (
    <div>
      <h2 className='text-center ' style={{ margin: "30px 0px", marginTop: "70px" }}>
        News Hunt: Top {capitalizeFirstLetter(props.category)} Headlines
      </h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container my-3">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    discription={element.description ? element.description.slice(0, 88) : " "}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  country: 'in',
  pageSize: 5,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
