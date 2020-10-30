# Memo Cards (React with firebase, cloudinary)

## 기능

- firebase  
  로그인기능, db 연동, 실시간
- cloudinary로 사진 저장기능
- 책, 영화&영상, 전시&세미나 리뷰 등록가능
- 테마별로 카드 배경 다르게 지정

## 구현 순서

- [x] route - 로그인 페이지와 로그인 후 페이지
- [x] firebase - 로그인 기능 연결하기
- [x] 카드 목록 만들기 (폼입력, preview, background-option 변경)
- [x] 카드 변동사항 실시간으로 preview 보여주기
- [x] firebase - 카드 내용 실시간 정보 db 저장하기
- [x] coudinary - 이미지 저장하기

## 연습

- routing
- OAuth 연결
- DI
- form

## 배운 점

- css @keyframes
- react에서 common으로 css 값 관리하기
- css flex-box 이해도 증가
- event.currentTarget.textcontent ==> element 내역확인
- Object와 배열로써의 상태관리
- Object 메서드
- 연산자 [operators mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators)
- element.click() [element method mdn](https://developer.mozilla.org/ko/docs/Web/API/HTMLElement)
- 왜 props로 컴포넌트 함수를 전달할때는 codeblock 사용이 안되는 거지?? 의문 --> 코드블럭을 사용하려면 리턴값으로 해줘야됨
- useHistory action 사용에 관해 더 알아보기& location
- useEffect의 의존성 배열에 값은 대다수의 경우에 넣어주자... 무한 반복호출된다(자원낭비)
- return 값으로의 callback함수
- 왜 input section 에서는 overflow-y : auto 적용이 안되는지? --> main에서 전체에도 적용해주면 됨.
- object접근 [object mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Working_with_Objects)
