import React, { useState } from 'react';

const Test3 = () => {
    const [ color,setColor] = useState('skyblue');

    const onColor = () => {
        // if(color == 'pink'){
        //     setColor('tomato');    
        // }else{
        //     setColor('pink');
        // } 
        setColor(color === 'pink' ? 'tomato' : 'pink');
    }
    
    return (
        <>
            <p> h2를 클릭시, 배경색 바꾸기 pink - tomato</p>
            <h2 style ={{
                width : 400 , height: 100 , border : '1px solid black',
                margin : 20 , padding : 15 , lineHeight : '100px',
                backgroundColor : color , textAlign : 'center',
                cursor : 'pointer'
            }}
            onClick = {onColor}
            >
                배경색 : {color}
            </h2>
        </>
    );
};

export default Test3;