import React from 'react';
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail';

import axios from 'axios';
const KEY = "AIzaSyDVBH67-RWDUQgEsTRe0P2sD1Xft2QsCA8"


class App extends React.Component {
	state = {
	 videos: [],
	 selectedVideo: null
	};

	componentDidMount(){
		this.onTermSubmit('buildings');
	}

	onTermSubmit = async term =>{
		const response = await axios.get('https://www.googleapis.com/youtube/v3/search',{
					params: {
						q:term,
						part: "snippet",
						key: KEY
					}
				})
		this.setState({videos: response.data.items, selectedVideo: response.data.items[0]})
	}

	onVideoSelect = (video)=>{
		this.setState({selectedVideo: video})
	}

	render(){
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className="five wide column" >
							<VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
						</div>
					</div>
				</div>
			</div>
			);
	}
}

export default App;