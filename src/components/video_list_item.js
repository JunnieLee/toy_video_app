import React from 'react';

					// 얘도 ES6 syntatic sugar_ props에 video라는 property가 있으니까 
					// 가서 그 video 라는 property를 grab해오고, 그 값을 video라는 새로운 변수에 할당해라
const VideoListItem = ({video, onVideoSelect}) => { // const video = props.video;
													// const onVideoSelect = props.onVideoSelect;

	const imageUrl = video.snippet.thumbnails.default.url;

	return (

		// 이 li를 클릭할때마다 onVideoSelect함수를 실행시키고, 그 함수에다가 클릭된 해당 list_item의 비디오를 전달하라!
		// 그니까 그렇게 전달된 비디오가 onVideoSelect함수의 인자 SelectedVideo로 들어가서 
			// 부모 컴포넌트의 SelectedVideo 부문 state를 조정하는거지!   
		<li onClick={() => onVideoSelect(video)} className="list-group-item">						 
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