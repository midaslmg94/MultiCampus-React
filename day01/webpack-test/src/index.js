// page 17 ESM 문법
// 모듈을 가져옴. 중괄호가 없기 때문에 default를 가져온 것임
import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button.js'; // 

// 함수형 컴포넌트 : 상태를 관리할 필요 없이, 화면 출력만 관리. 생성자가 없고, state 변수가 없음
function Container() {
    return React.createElement( //
        'div',
        null, // 속성은 없음
        React.createElement('p', null, '버튼을 클릭하세요'),
        React.createElement(Button, {
            label: '좋아요'
        }),
        React.createElement(Button, {
            label: '싫어요'
        }),
    );

}

ReactDOM.render(
    React.createElement(Container),
    document.querySelector('#react-root')
);