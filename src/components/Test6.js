import React, { useState } from 'react';

const Test6 = () => {
    
    const [count ,setCount] = useState(0);
    
    const increment = () => {
        setCount( count + 1);
    }
    const decrement = () => {
        setCount( count - 1);
    }
    const increment1 = () => {
        //setCount( 이전값 => 이전값 + 값);
        setCount( state => state +1);
        setCount( count => count +1);
        setCount( count => count +1);
    }
    const decrement1 = () => {
        setCount( state => state - 1);
        setCount( count => count - 1);
        
    }
    const increment2 = () => {
        for(let i = 0; i < 10 ; i++){
            // i는 let으로 ...
            setCount(state => state + 1)
        }
    }
    return (
        <div>
            {/* 증가 감소 */}
            <h1> 카운트 : {count}</h1>
            <p>
                <button onClick = {increment}>증가</button>
                <button onClick = {decrement}>감소</button>
            </p>
            <p>
                <button onClick = { () => setCount (count + 1) } >증가</button>
                <button onClick = { () => setCount (count - 1) } >감소</button>
            </p>
            <p>
                <button onClick = {increment1} >3증가</button>
                <button onClick = {decrement1} >2감소</button>
            </p>
            <p>
                <button onClick = {increment2} >10증가</button>
            </p>

        </div>
    );
};

export default Test6;