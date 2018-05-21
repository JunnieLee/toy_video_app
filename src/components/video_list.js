import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

// functional component의 요소로서의 <props>
// ---> class-based component의 props는 어느 메소드의 어디에서든 this.props를 정의해서 사용할 수 있음.
// fucntional component에서는 그냥 props로 쓸 수 있는데,
// 만약에 얘를 class-based component로 refactor해야 할 일이 있으면 this.props로 다 바꿔줘야 함! 
	
	// index.js의 App component (parent component)로부터 가져온 state data를 
	// videos라는 property에 담아왔었지! props 오브젝트에 있는 해당 property를 이렇게 끄집어내 사용!

	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem
				onVideoSelect={props.onVideoSelect} 
				key={video.etag} 
				video={video} /> // app으로부터 가져온 props 각 프로퍼티 정보를 VideoListItem으로 전달	
		); 
		// this would return an array of components
	}); 
	// "map"
	// (ex) var array = [1, 2, 3];
		// array.map(function(number) {return number * 2}); 
		//--> output: [2, 4, 6]

	

	return (
		<ul className="col-md-4 list-group">
			{videoItems} {/* JSX나 javascript variable 참조할땐 항상 이렇게 {}로 감싸줘야했지! */}
		</ul>
	);

};

export default VideoList;