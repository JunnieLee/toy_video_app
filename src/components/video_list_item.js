import React from 'react';

					// 얘도 ES6 syntatic sugar_ props에 video라는 property가 있으니까 
					// 가서 그 video 라는 property를 grab해오고, 그 값을 video라는 새로운 변수에 할당해라
const VideoListItem = ({video}) => { // const video = props.video;

	const imageUrl = video.snippet.thumbnails.default.url;

	return (
		<li className="list-group-item">
			<div className="video-list media">

				<div className="media-left">
					<img className="media-object" src={imageUrl} />
				</div>

				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;