# React : 리액트 개발 환경 직접 구축 
##### 외부 패키지를 사용하지 않고 리액트 웹 페이지 제작

- 목표 : "좋아요" 버튼을 클릭하면, "좋아요 취소"로 변경



- 리액트 처리

  ```react
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Document</title>
  </head>
  <body>
      <h2>프로젝트가 마음에 들면 좋아요 버튼을 클릭해주세요</h2>
      <div id="react-root"></div>
      <script src="react.development.js"></script>
      <script src="react-dom.development.js"></script>
      <script src="code1-1.js"></script>
  </body>
  </html>
  ```

- 

- 리액트를 사용하지 않고 처리



- 값(상태값) : 값에 따라 사용자 화면이 달라보임(렌더링 된다). 기존방식은 사용자에게 보여지는 화면과 상태와의 불일치가 발생한다. 이를 막기 위해  리액트를 사용한다.

  - 기존방식

  ```javascript
     <script>
         /* 
          liked 변수의 값이 false이면 좋아요 취소ㅡ rue이면 좋아요
  
         */
         $(function(){
          let liked = false;
          $('button').click(function(){
              liked = ~liked;
              if(liked) $(this).text("좋아요");            
              else $(this).text("좋아요 취소");
         });
         //$('button').trigger('click');
      });
      </script>
  ```

- jQuery vs React

  ```javascript
  #jQuery
  <body>
      
      <h2>jQuery로 button 3개 구현- <br>프로젝트가 마음에 들면 좋아요 버튼을 클릭해주세요</h2>
      <div id="react-root">
          <button id="btn1">좋아요</button>
          <button id="btn2">좋아요</button>
          <button id="btn3">좋아요</button>
  
      </div>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script>// jQuery 구현 각 버튼의 상태에 대한 변수를 각각 설정해야 함
          $(function () {
              let liked1 = false;
              let liked2 = false;
              let liked3 = false;
              $('button#btn1').click(function () { // 상태의 불일치가 발생할 가능성이 있음
                  liked1 = ~liked1;
                  if (liked1) $(this).text("좋아요");
  
                  else $(this).text("좋아요 취소");
              });
              $('button#btn2').click(function () { // 상태의 불일치가 발생할 가능성이 있음
                  liked2 = ~liked2;
                  if (liked2) $(this).text("좋아요");
  
                  else $(this).text("좋아요 취소");
              });
              $('button#btn3').click(function () { // 상태의 불일치가 발생할 가능성이 있음
                  liked3 = ~liked3;
                  if (liked3) $(this).text("좋아요");
  
                  else $(this).text("좋아요 취소");
              });
              $('button#btn1').trigger('click');
              $('button#btn2').trigger('click');
              $('button#btn3').trigger('click');
          });
      </script>
  </body>
  ```

  ```react
  # react
  <body>
      <body>
          <h2>React로 button 3개 구현- <br>이 프로젝트가 마음에 드시면 좋아요 버튼을 눌러주세요</h2>
          <div id="react-root1"></div>
          <div id="react-root2"></div>
          <div id="react-root3"></div>
          <script src="react.development.js"></script>
          <script src="react-dom.development.js"></script>
          <script src="code1-1.js"></script>
          <script>
              // Page 6 code 1-2
              class LikeButton extends React.Component {
                  constructor(props) { // 생성자
                      super(props); // 상위 컴포넌트(부모 컴포넌트) 초기화
                      this.state = { // 객체
                          liked: false // 객체이름:객체속성
                      };
                  }
                  render() {
                      let text = this.state.liked ? '좋아요 취소' : '좋아요'
                      return React.createElement(
                          'button', // 내가 만드려고 하는 element
                          {
                              onClick: () => this.setState({ 
                                  liked: !this.state.liked // toggle 가능
                              })
                          },
                          text,
                      );
                  }
              }
              ReactDOM.render(React.createElement(LikeButton), document.querySelector('#react-root1')); 
              ReactDOM.render(React.createElement(LikeButton), document.querySelector('#react-root2')); 
              ReactDOM.render(React.createElement(LikeButton), document.querySelector('#react-root3')); 
          </script>
  </body>
  ```

  

- 바벨(babel) : 자바스크립트 코드를 변환해주는 함수. 최신 자바스크립트 문법을 지원하지 않는 환경에서도 최신 문법을 사용할 수 있음. 실행환경에 맞도록 코드의 버전을 맞추는 역할
  - ES6로 작성한 코드를 ES5 환경에서 실행할 수 있도록 함(높은 버전)
  - React에서 사용하는 JSX문법을 표준 자바스크립트 문법으로 바꾼다
    - 이러한 플러그인을 `프리셋` 이라고 한다.
  - 불필요한 요소(ex 주석, 공백 등) 제거



- 복잡한 형태의 React 코드 --> 어떤 화면이 만들어질것인지 코드만 보고 판단하기 어렵다

  - 계층구조, 포함관계를 한눈에 알아보기 어려움 

  ```react
  <body>
      <h2>React로 button 3개 구현</h2>
      <div id="react-root"></div>
      <script src="react.development.js"></script>
      <script src="react-dom.development.js"></script>
      <script>
          class LikeButton extends React.Component {
              constructor(props) {
                  super(props);
                  this.state = {
                      liked: false
                  };
              }
              render() {
                  let text = this.state.liked ? '좋아요 취소' : '좋아요';
                  return React.createElement(
                      'button', {
                          onClick: () =>
                              this.setState({
                                  liked: !this.state.liked
                              })
                      },
                      text,
                  );
  
              }
          }
          // page 9, 1-6번 코드
          class Container extends React.Component {
              constructor(props) {
                  super(props);
                  this.state = {
                      count: 0
                  };
              }
              render() { // 렌더링 함수를 통해 실제 출력모양이 어떻게 될지 예상하는건 어려움. html 문법으로 만들고 표준문법의 형태로 바꿔주면 편함
                  return React.createElement(
                      'div',
                      null,
                      React.createElement(LikeButton), // div안에 들어감
                      React.createElement(
                          'div', {
                              style: {
                                  marginTop: 20
                              }
                          },
                          React.createElement('span', null, '현재 카운트 :'),
                          React.createElement('span', null, this.state.count),
                          React.createElement(
                              'button', {
                                  onClick: () => this.setState({
                                      count: this.state.count + 1
                                  })
                              },
                              '증가',
                          ),
                          React.createElement(
                              'button', {
                                  onClick: () => this.setState({
                                      count: this.state.count - 1
                                  })
                              },
                              '감소',
                          ),
                      ),
                  );
              }
          }
          ReactDOM.render(
              React.createElement(Container), document.querySelector('#react-root')
          );
      </script>
  </body>
  ```

  - 위의 코드를 JSX구문으로 바꿈 --> 문서의 구조, 형태를 한눈에 파악하기 조금 더 편함
  
    ```javascript
        class LikeButton extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    liked: false
                };
            }
            render() {
                let text = this.state.liked ? '좋아요 취소' : '좋아요';
                return React.createElement(
                    'button', {
                        onClick: () =>
                            this.setState({
                                liked: !this.state.liked
                            })
                    },
                    text,
                );
    
            }
        }
        // page 11 코드 1-7 참조
        class Container extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    count: 0
                };
            }
            render() { 
                return (
                    <div>
                        <LikeButton />
                        <div style={{marginTop: 20}}>
                            <span>현재 카운트:</span>
                            <span>{this.state.count}</span>
                            <button onClick={()=>this.setState({count: this.state.count+1})}>증가</button>
                            <button onClick={()=>this.setState({count: this.state.count-1})}>감소</button>
                        </div>
                    </div>
                );
            }
        }
        ReactDOM.render(
            React.createElement(Container), document.querySelector('#react-root')
        );
    ```
  
    - 하지만 이 코드는 브라우저가 해석할 수 없기 때문에 `바벨`을 이용해서 형태를 바꿔줌 
  
  - 바벨 패키지 설치 후 자바스크립트를 변환(컴파일)
  
    - 설치 : `npm install @babel/core @babel/cli @babel/preset-react`
    - 컴파일 : `npx babel --watch ./src --out-dir ./ --presets @babel/preset-react`
    - 컴파일 후 새로 생긴 code1-6.js
  
    ```javascript
    class LikeButton extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          liked: false
        };
      }
    
      render() {
        let text = this.state.liked ? '좋아요 취소' : '좋아요';
        return React.createElement('button', {
          onClick: () => this.setState({
            liked: !this.state.liked
          })
        }, text);
      }
    
    } // page 11 코드 1-7 참조
    
    
    class Container extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
      }
    
      render() {
        return React.createElement("div", null, React.createElement(LikeButton, null), React.createElement("div", {
          style: {
            marginTop: 20
          }
        }, React.createElement("span", null, "\uD604\uC7AC \uCE74\uC6B4\uD2B8:"), React.createElement("span", null, this.state.count), React.createElement("button", {
          onClick: () => this.setState({
            count: this.state.count + 1
          })
        }, "\uC99D\uAC00"), React.createElement("button", {
          onClick: () => this.setState({
            count: this.state.count - 1
          })
        }, "\uAC10\uC18C")));
      }
    
    }
    
    ReactDOM.render(React.createElement(Container), document.querySelector('#react-root'));
    ```
  
    


