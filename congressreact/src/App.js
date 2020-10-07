import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Home from './components/Home.js'
import VideoList from './components/VideoList.js'
import ShowVideo from './components/ShowVideo.js'


function App() {


  const [videos, setVideos] = useState([])

  useEffect(() => {

    let Vimeo = require('vimeo').Vimeo;

    const client = new Vimeo("6a8755f63ed9fbccb479a1e77c8a010cf22e7685", "nczEmbIQFEx/kbJxVQTUilrhz+PVadR4hdcifkeaKeYxZ8mvGBDTsHu4VaMeMatLp+l6Dq1mRmbyAOs5547quakXSWYzCjg9yW7f0RaaurUrQO1uLSOqqt4mSI8R6ABk", "1d7d97b404dd014ed70d7eae1369018f");

    client.request({
      method: 'GET',
      path: '/users/92457918/videos'
    },
      function (error, body, status_code, headers) {
        if (error) {
          console.log(error);
        }
        console.log(body);

        setVideos(body)
      })
  }, [])

 

  console.log(videos)

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/List">
          {videos.length <= 0 ? null : <VideoList videos={videos.data}/>}
          {/* <VideoList videos={videos} /> */}
          {/* <VideoList videos={videos.data} />} */}
        </Route>
        <Route exact path="/Show">
          <ShowVideo videos={videos} />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;


// let Vimeo = require('vimeo').Vimeo;
// let client = new Vimeo("6a8755f63ed9fbccb479a1e77c8a010cf22e7685", "nczEmbIQFEx/kbJxVQTUilrhz+PVadR4hdcifkeaKeYxZ8mvGBDTsHu4VaMeMatLp+l6Dq1mRmbyAOs5547quakXSWYzCjg9yW7f0RaaurUrQO1uLSOqqt4mSI8R6ABk", "1d7d97b404dd014ed70d7eae1369018f");

// client.request({
//   method: 'GET',
//   path: '/users/92457918/videos'
// },
//   function (error, body, status_code, headers) {
//     if (error) {
//       console.log(error);
//     }

//     console.log(body);
//   })

 //the empty [] stops the infinite loop of it setting videos... i don't know what that even means