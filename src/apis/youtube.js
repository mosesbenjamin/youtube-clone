import axios from 'axios';

const KEY = "AIzaSyDVBH67-RWDUQgEsTRe0P2sD1Xft2QsCA8"


export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: "snippet",

	}
});