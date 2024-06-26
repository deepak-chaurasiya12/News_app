// @ts-nocheck

import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar'
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Aboutus from './components/Aboutus';


export default class App extends Component {
  apikey=process.env.REACT_APP_NEWS_API

  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }



  render() {

    return (
      <div>
        <>
          <Router>

            <Navbar/>
            <LoadingBar
              height={2}
              color='#f11946'
              progress={this.state.progress}
            />
            <Routes>
              <Route exact path="/" element={<News setProgress={this.setProgress} apikey={this.apikey}  key="general" pageSize={10} country="in" category="general" />} />
              <Route exact path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey} key="sports" pageSize={10} country="in" category="sports" />} />
              <Route exact path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey} key="business" pageSize={10} country="in" category="business" />} />
              <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pageSize={10} country="in" category="entertainment" />} />
              <Route exact path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey} key="health" pageSize={10} country="in" category="health" />} />
              <Route exact path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey} key="science" pageSize={10} country="in" category="science" />} />
              <Route exact path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey} key="technology" pageSize={10} country="in" category="technology" />} />
              <Route exact path='/about' element={<Aboutus category="about" />} />
            </Routes>



          </Router>
        </>
      </div>
    )
  }
}











