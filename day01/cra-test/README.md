## Create-react-app

#### 200204 화요일

- `create-react-app`
  - 리액트 웹 애플리케이션을 만들기 위한 환경을 제공
  - 바벨과 웹팩이 포함되어 있음
  - 테스트가 용이하고, HMR(Hot-Module-Replacement), ES6+ 문법, CSS 후처리 등을 제공



##### 개발 환경 설정

- `npx create-react-app cra-test`

##### 개발 서버 실행

- `npm start` ⇒ 브라우저가 자동으로 http://localhost:3000/ 접속

##### 서버 빌드

- `npm run build`

- 빌드에 성공하면 `build` 폴더가 생긴다.

  - 자바스크립트 파일에서 `import` 키워드를 이용해서 가져온 `CSS 파일` → build/static/css/main.{해시값}.chunk.css 파일에 모두 저장

    - 해시 : 임의 크기의 입력으로 고정 크기의 출력을 만들어냄
      - 유일성 보장(if a!=b :arrow_right: H(a​)!=H(b)) ==> 무결성 보장
      - 단방향성(일방향성) : 해시값 a를 가지고 원래의 값인 a를 찾는 것은 불가능 하다(복호화 불가능)
        - cf) 양방향 : 암호화, 복호화가 가능한 알고리즘
      - 충돌을 최대한 회피해야 좋다 
      - 인증(Authentication)정보 저장 및 처리에 쓰임. 인가(Authorization)

  - 자바스크립트 파일에서 `import` 키워드를 이용해서 가져온 `폰트, 이미지 등의 리소스 파일` → build/static/media 폴더에 저장.(10k 이하의 작은 파일은 data url 형식으로 자바스크립트 파일에 저장)

    