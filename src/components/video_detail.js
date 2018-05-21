import React from 'react';

const VideoDetail = ({video}) => {
				// const video = props.video;

	// 컴포넌트를 렌더링하기 전에 일단 video property가 있는지 check!
	// -> 에러 방지용 // ajax 스피너
	if (!video) {
		return <div>Loading...</div>;
		// return statement니까 이 조건에서 걸리면 하단 코드는 run되지 않겠지!
	}			

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/ + ${videoId}`;
				// 얘도 ES6 문법임. 반드시 그냥 따옴표가 아닌, 백틱(``)으로 감싸줘야함!

	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;