import React from 'react';

const Test8 = () => {
    //event , evt ,e
    const onTest = (e) => {
        console.log("타켓");
        console.log(e.target);
        // e.target : 선택한 대상
        console.log("커런트타켓");
        console.log(e.currentTarget);
        // e.currentTarget : 이벤트 대상 
    }
    return (
        <div>
            <button onClick ={ onTest } >
                <span>확인확인</span>
                <br />
                <br />
                <b>클릭클릭</b>
            </button>
        </div>
    );
};

export default Test8;