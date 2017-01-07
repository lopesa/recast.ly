class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: window.exampleVideoData[0],
      videoList: window.exampleVideoData,
      // currentVideo: {},
      // videoList: []
    };
  }

  gotVideoResults(videos) {
    this.setState({
      currentVideo: videos.items[0],
      videoList: videos.items
    });
  }

  componentDidMount() {
    this.props.searchYouTube({
      key: window.YOUTUBE_API_KEY, q: 'rick astley', maxResults: 5, part: 'snippet'
    }, this.gotVideoResults.bind(this));
  }

  changeVideo(video) {
    this.setState({
      currentVideo: video
    });
  }

  changeHandler(e) {
    this.props.searchYouTube({
      key: window.YOUTUBE_API_KEY, q: e.target.value, maxResults: 5, part: 'snippet'
    }, this.gotVideoResults.bind(this));    
  }

  render() {
    return (
      <div>
        <Nav changeHandler={this.changeHandler.bind(this)} />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} clickHandler={this.changeVideo.bind(this)} />
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
