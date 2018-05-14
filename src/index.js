import React from 'react';
import ReactDOM from 'react-dom';
// access for the search package we downloaded를 위해 아래처럼 import구문을 써줌!
import YTSearch from 'youtube-api-search';

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

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
	console.log(data);
});
// 기본적으로 configuration option과 call-back function을 넘김

// Create a new component. This component should produce some HTML.
// 이 App 컴포넌트는 현재 a functional component! (지금은 딱히 state를 만들고 관리해줄 필요가 읎음)
//--> 근데 이건 추후에 유투브 API로부터 비디오를 불러올때 바뀔것임!! ㅎㅎㅎ
const App = () => {
	return (
	<div>
		<SearchBar /> {/* functional component는 이렇게 class-based component를 contain할 수 있음!*/}
	</div>
	);
};


// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
