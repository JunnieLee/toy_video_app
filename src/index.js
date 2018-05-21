import React, { Component } from 'react';
// React.Component를 갖다 쓰기 위해 { Component } 와 같은 식으로 import 구문 작성해줬음!
// 이건 마치 const Component = React.Component; 라고 해준것과도 같음!!
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';
// access for the search package we downloaded를 위해 아래처럼 import구문을 써줌!

// 여기서의 SearchBar은 우리가 임의로 정해준 변수 이름인데,
// search_bar.js파일에서 export default된 녀석이 이 변수의 값으로 들어오게 되는것임!
// (ex) 만약 search_bar.js파일에서 export default foo; 라고 넘겼다면 저 Searchbar엔 변수 foo에 할당되었던 값이 들어가겠지!
// -> export default 개념과 import 개념 확실히 이해하고 넘어가기!! ㅎㅎㅎ :) 
import SearchBar from './components/search_bar';
// 우리가 직접 만든 파일이면 이렇게 파일의 상대주소를 적어줘야 함.
// 반면, npm을 통해서 install한 package라면, 그냥 'react', 'react-dom' 같이 곧바로 불러올 수 있음!
import VideoList from './components/video_list';

import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAjoXigmpTsicn5xGrpTT-xtUKZ1eg0GbY';
// "down-wards data flow" 
// -> only the most parent component has the responsibility for fetching data


// Create a new component. This component should produce some HTML.
class App extends Component {

	// state 관리를 위한 constructor 메소드!
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null 
		};
		// (1) 일단 state에 video를 빈 array로 세팅함.

		this.videoSearch('Ariana Grande'); 
	}

	// search를 가능하게 하는 함수를 따로 만들어서 빼줬음!
	videoSearch(term) {		
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0] // selectedVideo 초기값은 첫번째 비디오로! 
			}); 
		});  
	}


	// class-based component에서 필수적으로 있어야 하는 render 메소드~!
	render(){
		return (
			<div>
				{/* functional component는 이렇게 class-based component를 contain할 수 있음!*/}
				<SearchBar onSearchTermChange={term => this.videoSearch(term)} />
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) } //call-back function
					// 상위 컴포넌트의 state를 조정할 수 있는 하나의 콜백함수를 자식요소에 전달했음
					// 이렇게 콜백 함수를 이용하는건, 자식요소와 부모요소가 원활히 소통할 수 있는 훌륭한 수단임!
					videos={this.state.videos} /> 
						  {/* 부모 컴포넌트인 App에서 자식 컴포넌트인 VideoList로 데이터를 전달해야 함.
				              그러기 위해선 저렇게 VideoList의 JSX태그 위에 property를 정의하면 됨! */}
				    	{/* 지금 App에서 VideoList로 전달되는 데이터는 videos 프로퍼티를 통해 참조가 됨 */}      
			</div>
		);
	}
}


// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
