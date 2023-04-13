import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotalResults] = useState(0);
  const [query, setQuery] = useState("");

  const capitalize = (s) => {
    return s[0].toUpperCase() + s.slice(1);
  };

  
  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.pageSize}&page=${page}&q=${query}`;
    await setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    await setArticles(parsedData.articles);
    await setLoading(false);
    await setTotalResults(parsedData.totalResults);
    props.setProgress(100);
  };
  useEffect(() => {
    document.title = `News -${capitalize(props.category)}`;
    updateNews();
    //eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apikey}&pageSize=${
      props.pageSize
    }&page=${page + 1}&q=${query}`;
    await setPage(page + 1);
    let data = await fetch(url);

    let parsedData = await data.json();
    await setArticles(articles.concat(parsedData.articles));
    await setTotalResults(parsedData.totalResults);
  };

  const handleSearchClick = async () => {
    const query = await document.getElementById("search").value;
    await setQuery(query);
    updateNews();
  };

  return (
    <div className="container my-3 ">
      <h2 className="text-center ">
        Top Headlines - {capitalize(props.category)}
      </h2>

      <span className="d-flex flex-row justify-content-center">
        <input
          id="search"
          className="form-control mx-2 "
          style={{ width: "200px" }}
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="btn btn-outline-success "
          id="searchbtn"
          onClick={handleSearchClick}
          type="submit"
        >
          Search
        </button>
      </span>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < total ? true : false}
        loader={<Spinner />}
        style={{ overflow: "hidden" }}
      >
        {articles.length !== 0 ? (
          <div className=" d-flex flex-wrap  justify-content-evenly ">
            {articles.map((element, i) => {
              return (
                <div
                  key={
                    element.url
                    // page === 1
                    //   ? page + i + 1
                    //   : page + 10 + i + 1
                  }
                >
                  <NewsItem
                    title={
                      element.title
                        ? element.title.slice(0, 40)
                        : "this is empty"
                    }
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : "Click below to read the news"
                    }
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
        ) : (
          <div className="text-center m-5">
            {loading === false && articles.length === total ? (
              <>
                <h4>
                  No more news to be found in {capitalize(props.category)} news
                </h4>{" "}
                <p>Click on a different news category for more news</p>
              </>
            ) : (
              <></>
            )}
          </div>
        )}
      </InfiniteScroll>
    </div>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  apikey: PropTypes.string,
  category: PropTypes.string,
};
export default News;
// export  {handleOnClick};
