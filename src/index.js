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


const API_KEY = 'AIzaSyAjoXigmpTsicn5xGrpTT-xtUKZ1eg0GbY';
// "down-wards data flow" 
// -> only the most parent component has the responsibility for fetching data


// Create a new component. This component should produce some HTML.
class App extends Component {

	// state 관리를 위한 constructor 메소드!
	constructor(props) {
		super(props);

		this.state = { videos: [] };
		// (1) 일단 state에 video를 빈 array로 세팅함.

		// 기본적으로 이와같이 configuration option과 call-back function을 넘김
		YTSearch({key: API_KEY, term: 'Ariana Grande'}, (videos) => {
			this.setState({ videos }); // = this.setState({ videos: videos });
		});  // ES6 syntatic sugar -> only works when 키와 value변수의 이름이 같을 때!

		// (2) 컴포넌트가 렌더링되면서 검색을 실행하고, 검색이 완료되면, 
		//     비디오값들을 해당 search term에 따라 업데이트 할 것임! 
		//-------> 처음 딱 페이지 들어왔을때 디폴트 값 설정해주기 위해 이렇게 해놓은거!
	}

	// class-based component에서 필수적으로 있어야 하는 render 메소드~!
	render(){
		return (
			<div>
				<SearchBar /> {/* functional component는 이렇게 class-based component를 contain할 수 있음!*/}
			</div>
		);
	}
}


// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
