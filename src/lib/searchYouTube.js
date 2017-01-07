var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: window.YOUTUBE_SERVER,
    type: 'GET',
    // headers: {'key': options.key},
    data: options,
    // data: {
    //   part: 'snippet',
    //   maxResults: 5,
    //   q: 'rick astley'
    // },
    // success: callback,
    success: function(data) {
      console.log(data);
      callback(data);
      // console.log(data);
    },
    error: function(data) {
      console.log(data);
    }
  });
};

window.searchYouTube = searchYouTube;
