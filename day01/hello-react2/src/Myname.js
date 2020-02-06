import React, { Component } from 'react';
class MyName extends React.Component{
    // 부모 컴포넌트늩에서 props 값이 전달되지 않았을 때 사용할 기본값을 정의
    static defaultProps ={
        whoami: '000'
    };
    render(){
        return(
            <div>
                Myname.js에서 가져왔음. 컴포넌트형, props 사용
                <br></br>
                나는 {this.props.whoami}입니다 {/*props 사용*/}
            </div>
        );
    }
}
export default MyName;