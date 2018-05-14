import React, { Component } from 'react';
// React.Component를 갖다 쓰기 위해 { Component } 와 같은 식으로 import 구문 작성해줬음!
// 이건 마치 const Component = React.Component; 라고 해준것과도 같음!!


// Component state가 change될때마다, 해당 component는 매번 re-render된다!
// 그리고 자신의 자식 요소들에게도 렌더링하도록 강제함!

// 다른 컴포넌트와 소통하기에 용이한건 functional component보단 class-based component가 제격!!
// React.Component를 상속받은 class라서 기존에 설정되어있는 관련 기능들 언제든 갖다 쓸 수 있다!!
class SearchBar extends Component {

	// state 프로퍼티는 class의 contructor 메소드 안에 넣는다!
	// (유의) - 함수형 component는 state를 가지지 않는다!
	// 모든 javascript class는 특별한 함수인 constructor가 있음. 
	// 이 함수는 첫번째로 시작되고, class의 새로운 instance가 생성될때마다 자동적으로 실행됨!
	// 그렇기 때문에 이 constructor함수는 늘 실행되겠지!
	constructor(props) {
		super(props); // super를 통해 부모 클래스(class Component)의 메소드를 호출할 수 있음!
					  // 이렇게 super를 써주지 않으면 에러가 뜨니까, 일단 이렇게 써주는게 디폴트값이라고 생각해 놓으면 됨!

		this.state = { term: '' }; // state 초기화를 위한 코드
								   // state는 plain javascript object임
		// 여기서 term은 우리 컴포넌트가 지닌 state의 첫번째 property!
	// 유저가 검색 input을 update할때마다 이 term이라는 property가 업데이트되거나, 그 변경사항을 받아옴!
	}

	// class-based component를 만들면, 우린 항상 render 메소드를 정의하고, 거기서 JSX를 return해야 함!
	render() {
			     // whenever the input changes, the onChange function will be called
		         // 이 onChange는 리액트로 사전에 정의된 특수한 프로퍼티임.
		return (	
			<div>				{/* JSX나 javascript variable을 참조할때마다 항상 이렇게 {}로 감싸줘야 함! */}
				<input onChange={event => this.setState({ term: event.target.value })} />
										{/* constructor 메소드 밖에선 오로지 이렇게 
										this.setState를 통해서만 state manipulating이 가능!*/}
								{/* this.setState를 통해 state값이 update되면 component 전체가 re-render됨*/}
								{/* -> 그리고 이 rendering method의 모든 업데이트 된 정보를 DOM에 push함*/}

								{/* -> 그래서 아래 {this.state.term}도 매번 새로이 event가 발생할때마다 update된 
									   정보를 토대로 render되는것 ! 그 업데이트 된 정보대로 DOM에 push하는것!*/}
				* value of the input : {this.state.term}	
									{/* 얘도 javascript variable 참조하는거니까 이렇게 {}로 감싸줘야 함! */}					
			</div>
			);				         			 
		                
	} 

	// *event handler -> event가 발생할때마다 이를 감지함
	// event handler에 pass되는 argument는 event가 발생하는 것에 대한 정보나 context를 의미.
	// 그리고 그 argument로 event 발생여부 및 관련정보를 받고, 그걸 활용해 무언가 기능하게 할 수 있음!
}

// export default는 이 파일에서 요 특정한 애만큼은 항상 export 가능하게 설정해놓을때 씀!
export default SearchBar;