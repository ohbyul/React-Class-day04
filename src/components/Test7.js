import React, { useState } from 'react';
import './Test7.css'

const Test7 = () => {
    
    const [isClass , setIsClass] = useState(false);

    const onAdd = () => {
        setIsClass(true)
    }
    const onRemove = () => {
        setIsClass(false)
    }
    const onToggle = () => {
        setIsClass(!isClass)
    }
    return (
        <div className="wrap">
            
            <p className="test">오늘은 금요일 입니다.</p>
            <p className="test on">오늘은 금요일 입니다.</p>
            <p className ="on1">오늘은 금요일 입니다.</p>
            <hr/>

            <h2>결과</h2>
            
            <p className={`test ${isClass ? 'on' : ''}` }>오늘은 금요일 입니다.</p>
            <p className={isClass ? 'on' : ''}>오늘은 금요일 입니다.</p>
            <p className={isClass === true ? 'on1' : ''}>오늘은 금요일 입니다.</p>
            
            <div>
                <button onClick = {onAdd}>add class</button>
                <button onClick = {onRemove}>remove class</button>
                <button onClick = {onToggle}>toggle class</button>
            </div>

        </div>
    );
};

export default Test7;