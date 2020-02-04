# React 
##### 200204 화요일

- 프로퍼티(속성,요소) : `props`
  - 객체가 가지고 있는 특성 -- property(ex. 나이, 이름)
  - 부모가 자식에게 내려주는 값(=자식이 부모로 부터 받는 값)
- 상태 : `state`
  - 자기가 갖고있는 값
- 속성 : 객체가 가지고 있는 특성 -- property(ex. 나이, 이름)
- 동작 : 값에 대한 처리 -- method(ex.걷는다, 먹는다, 숨쉰다)



- 컴포넌트
  - 부모 컴포넌트
  - 자식 컴포넌트 



- create-react-app : 리액트의 진입장벽을 낮추기 위해서 제공 환경 --> 이것을 `부트스트랩`이라고 한다. 기본환경을 잡아주는 것
  - `npm start` : 개발 서버 실행
  - `npm run build` : 빌드 
  - `npm run eject` : 필요한 만큼 나누는 작업



- 리액트의 특징 
  - 가상 돔(virtual dom) : 문서 전체를 업데이트 하지 않고, 바뀐 부분만 수정해서 업데이트 함. 이렇게 하면 문서를 빠르고 효율적으로 수정 가능.
  - 함수형 프로그래밍 권장



- 리액트 개발 환경 직접 구축 --> 외부 패키지를 사용하지 않고 리액트 웹 페이지 제작

  - 바벨, 웹팩을 사용하여 구축

  - 리액트 라이브러리 다운로드
  
    ```txt
    https://unpkg.com/react@16.12.0/umd/react.development.js
    https://unpkg.com/react@16.12.0/umd/react.production.min.js
    https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js
  https://unpkg.com/react-dom@16.12.0/umd/react-dom.production.min.js
    ```
  
    - development가 들어간 파일 --> 개발 환경에서 사용하는 파일 --> 에러 메시지 확인 가능
    - production이 들어간 파일 --> 실행(배포)환경에서 사용하는 파일
    - react : 플랫폼 구분없이 공통으로 사용되는 파일(리액트 코어 파일)
    - react-dom : 웹 환경 개발에서 사용되는 파일

