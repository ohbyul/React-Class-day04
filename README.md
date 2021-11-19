# React class 
21.11.19 금 day04

### Test1.js
map 정리
```
map 의 key는 고유값 (고유번호 : 주민번호처럼 생각)
index는 주로 사용하지 않는다.(단순히 화면에 값을 출력할 경우)
수정,삭제, 추가등의 데이터변경이 이루어지면 문제가 생긴다,
주로 배열객체의 키값으로 선언한다
```
### Test2.js
useState
```
1. 사용자 화면에 View(내용)을 보여주는 것을 렌더링 이라고 한다.
2. React 엘리면트를 루트 DOM 노드에 렌더링 하려면 둘다 ReactDOM.render()로 전달하면 된다
3. 초기 렌더링이란 어떠한 UI 관련 프레임워크, 라이브러리를 사용하든지간에 
    맨 처음 사용자 화면에 뷰를 보여주는 것을 초기 렌더링이라고 한다.
    리액트에서는 렌더링을 다루는 render 함수가 있다.

바닐라JS와 리액트 차이
1. 바닐라 js => 변경으로 인한 엘리먼트를 다시 그린다.
2. React => 변경된 부분만 다시 그린다.

---------------------------------
함수형 컴포넌트는 렌더링 될때마다 내부의 것들을 다시 계산해야 한다.
생성 뿐만 아니라 업데이트 될때마다 다시 만들어지기 때문이다.
그래서 use* 필요한데 이것을 hooks 이라고 한다
함수형이라서 함수 실행될때 마다 내부의 것은 메모리가 안되서 다시 만들어 쓸수 있다.
그래서 훅이 등장해서 클래스 처럼 사용이 가능하다.

+ useState
import React, { useState } from 'react';
React.useState

const [count, setCount] = useState(0);
const [상태변수, 상태변수변경을도와주는함수] = useState(초기값);
    초기값 : 0,{},[],문자,논리값
    상태변수 = 초기값
    상태변수 =상태변수변경을도와주는함수(값 , 수식)
const [상태변수, set+첫글자대문자] = useState(초기값);
const [상태데이터, 상태를 위한 setter 함수] = useState(초기값);

값이 유동으로 변경할 경우
```

### Test3.js
useState
```
클릭시 배경색 바꾸기
```

### Test4.js
useState
```
버튼 클릭시, 보이고 숨기기
````

### Test5.js
useState
```
table 출력
```

### Test6.js
useState
```
증가 감소
```

### Test7.js
useState
```
className 뗏다 붙였다
```

### Test8.js
```
e.target
e.currentTarget
```
