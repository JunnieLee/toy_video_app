import React, { Component } from 'react';
// React.Component를 갖다 쓰기 위해 { Component } 와 같은 식으로 import 구문 작성해줬음!
// 이건 마치 const Component = React.Component; 라고 해준것과도 같음!!


// 다른 컴포넌트와 소통하기에 용이한건 functional component보단 class-based component가 제격!!
// React.Component를 상속받은 class라서 기존에 설정되어있는 관련 기능들 언제든 갖다 쓸 수 있다!!
class SearchBar extends Component {
	render() {
		return <input />;
	}
	// class-based component를 만들면, 우린 항상 render 메소드를 정의하고, 거기서 JSX를 return해야 함!
}


// export default는 이 파일에서 요 특정한 애만큼은 항상 export 가능하게 설정해놓을때 씀!
export default SearchBar;