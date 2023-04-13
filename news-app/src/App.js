import "./App.css";
import { Component, useState } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import ErrorPage from "./Components/ErrorPage";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";

const App =()=> {
  const [progress, setProgress]=useState(0);
  const pageSize = 10;
  const country = "in";
  const apikey = process.env.REACT_APP_NEWS_API;

    return (
      <Router>
        <Navbar />
        <LoadingBar
          height={3}
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="general"
                country={country}
                pageSize={pageSize}
                apikey={apikey}
                category={"general"}
              />
            }
          />
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="business"
                country={country}
                pageSize={pageSize}
                category={"business"}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="entertainment"
                country={country}
                pageSize={pageSize}
                category={"entertainment"}
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="general"
                country={country}
                pageSize={pageSize}
                category={"general"}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="health"
                country={country}
                pageSize={pageSize}
                category={"health"}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="science"
                country={country}
                pageSize={pageSize}
                category={"science"}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="sports"
                country={country}
                pageSize={pageSize}
                category={"sports"}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="technology"
                country={country}
                pageSize={pageSize}
                category={"technology"}
              />
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    );
}

export default App;
