import React, { useState } from 'react';

const Test4 = () => {
    const [ visible , setVisible ] = useState(false);
    
    const onShow = () => {
        setVisible(true)
    }
    const onHide = () => {
        setVisible(false)
    }
    const onToggle = () => {
        setVisible( !visible )
    }
    return (
        <div>
            <p>버튼 누르면 박스 보이고 숨기기 토글기능</p>
            <p>
                <button onClick = {onShow}>보이기</button>
                <button onClick = {onHide}> 숨기기</button>
                <button onClick = {onToggle}>
                    {
                        visible ? '숨기기' : '보이기'
                    }
                </button>
            </p>

            {
                visible === true ? <div style={{
                    width:300 , height : 100 , background : 'pink' , margin:15 , padding : 10 , border : '1px solid red'
                    }} >
                </div> : null
            }

            {
                visible && <div style={{
                    width:300 , height : 100 , background : 'pink' , margin:15 , padding : 10 , border : '1px solid red'
                    }} >
                </div>
            }

        </div>
    );
};

export default Test4;