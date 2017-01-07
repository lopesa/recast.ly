// TODO: Render the `App` component to the DOM
// searchYouTube({key: window.YOUTUBE_API_KEY, q: 'rick astley', maxResults: 10, part: 'snippet'});
ReactDOM.render(<App getVideos={searchYouTube}/>, document.getElementById('app'));

