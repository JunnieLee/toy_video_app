import React from 'react';
import ReactDOM from 'react-dom';

// 여기서의 SearchBar은 우리가 임의로 정해준 변수 이름인데,
// search_bar.js파일에서 export default된 녀석이 이 변수의 값으로 들어오게 되는것임!
// (ex) 만약 search_bar.js파일에서 export default foo; 라고 넘겼다면 저 Searchbar엔 변수 foo에 할당되었던 값이 들어가겠지!
// -> export default 개념과 import 개념 확실히 이해하고 넘어가기!! ㅎㅎㅎ :) 
import SearchBar from './components/search_bar';
// 우리가 직접 만든 파일이면 이렇게 파일의 상대주소를 적어줘야 함.
// 반면, npm을 통해서 install한 package라면, 그냥 'react', 'react-dom' 같이 곧바로 불러올 수 있음!

const API_KEY = 'AIzaSyAjoXigmpTsicn5xGrpTT-xtUKZ1eg0GbY';


// Create a new component. This component should produce some HTML.
const App = () => {
	return (
	<div>
		<SearchBar />
	</div>
	);
};


// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
