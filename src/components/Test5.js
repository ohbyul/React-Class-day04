import React, { useState } from 'react';

const Test5 = () => {
    const [data, setData] = useState([
        {id : 11, name : '유재석' , age : 30 , isChecked : true},
        {id : 12, name : '강호동' , age : 31 , isChecked : false},
        {id : 13, name : '유주주' , age : 34 , isChecked : false},
        {id : 14, name : '유빵짱' , age : 22 , isChecked : true},
        {id : 15, name : '유수종' , age : 36 , isChecked : true},
        {id : 16, name : '오리중' , age :  22, isChecked : false},
    ]);
    return (
        <div>
            <table style={{border : '1px solid'}}>
                <caption>신상 리스트</caption>
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                </colgroup>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>이름</th>
                        <th>나이</th>
                        <th>참여여부</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map( item => <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.isChecked ? '참여' : '미참여'}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Test5;