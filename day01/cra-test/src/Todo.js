// page 27 Code Splitting
import React from 'react';
// 상속을 받지 않고, 값의 상태변수가 필요없고, 단순 출력만 하려면 클래스형이 아니라 함수형으로 선언한다.
// 다른 곳에서 Todo를 import 해서 쓸 수 있다
// title : 프로퍼티

// 위와 동일함
export function Todo({title}){
    return <div>{title}</div>;
}


