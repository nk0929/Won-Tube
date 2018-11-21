import React, { Component } from 'react';
import './App.css';
import YSearch from 'youtube-api-search';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import List from './components/Video/List/List';
import Video from './components/Video/Video';

const YOUTUBE_API_KEY = 'AIzaSyAmIP0hse-xnfPHK6PNT8SRw518vcs8cYY'

// YSearch({ key: YOUTUBE_API_KEY, term: '芝犬　子犬'}, (data) => {
//   console.log(data);
// });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos :[],
      selectedVideo: null
      }
    this.onVideoClickedHandler = this.onVideoClickedHandler.bind(this);
    this.onKeywordChangedHandler = this.onKeywordChangedHandler.bind(this);
    }
    componentDidMount(){
      YSearch({ key: YOUTUBE_API_KEY, term: '柴犬　豆柴'}, (data) => {
   　    this.setState({videos: data, selectedVideo: data[3]});
  　  });
    }
    onVideoClickedHandler = (video) => {
      this.setState({ selectedVideo: video })
    }
    onKeywordChangedHandler = (keyword) => {
      let newTerm = '柴犬' + keyword;
      if(keyword === ''){
        newTerm = '柴犬　豆柴';
      }
      
      YSearch({ key: YOUTUBE_API_KEY, term: newTerm}, (data) => {
   　    this.setState({ videos: data, selectedVideo: data[0]})
  　  });
    }
    render() {
      return (
        <div className="App">
          <Header onKeywordChanged={this.onKeywordChangedHandler}/>
          <Body>
            <Video video={this.state.selectedVideo} />

            <List videos={this.state.videos} onVideoClicked={this.onVideoClickedHandler} selectedVideo={this.state.selectedVideo}/>
          </Body>
        </div>
      );
    }
  }

export default App;
