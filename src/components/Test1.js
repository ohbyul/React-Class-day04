import React from 'react';

const Test1 = () => {
    const arr = ['김철수','조정석' ,'김민정' , '박만성' , '아아'];
    const data = [
        {id:1,name:'김철수',age:30},
        {id:12,name:'조정석',age:30},
        {id:13,name:'김민정',age:30},
        {id:14,name:'박만성',age:30},
        {id:15,name:'아아',age:30},
    ]
    return (
        <div>
            <h2>map 정리</h2>
            {/* map 의 key는 고유값 (고유번호 : 주민번호처럼 생각)
            index는 주로 사용하지 않는다.(단순히 화면에 값을 출력할 경우)
            수정,삭제, 추가등의 데이터변경이 이루어지면 문제가 생긴다,
            주로 배열객체의 키값으로 선언한다
             */}
            {
                arr.map((item,index) =>{
                    return (
                        <p key={index}> {index} / {item} </p>
                    )
                })
            }
            <hr/>
            {
                arr.map((item,index) => <p key={index}>
                    ㅋㅋ {index} / {item}
                </p>)
            }
            <hr/>
            {
                data.map((item,index) => {
                    return (
                        <p key={item.id}>
                            {item.id} / {item.name} / {item.age}
                        </p>
                    )
                })
            }
            <hr />
            {
                data.map( item => <p key={item.id}>
                    ㅎㅎ {item.id} / {item.name} / {item.age}
                </p>)
            }
        </div>
    );
};

export default Test1;