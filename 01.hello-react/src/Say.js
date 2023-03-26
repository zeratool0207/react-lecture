import React, { useState } from 'react';

const Say = () => {

    const [message, setMessage] = useState('default 값입니다.');
    const onClickEnter = () => setMessage('안녕하세요!');
    const onClickLeave = () => setMessage('안녕히 가세요!');

    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick = { onClickEnter } >입장</button>
            <button onClick = { onClickLeave }>퇴장</button>
            <h3 style = {{ color }} > { message } </h3>
            <button style = {{ color: 'red' }}  onClick = {() => setColor('red')}> 빨간색 </button>
            <button style = {{ color: 'green' }}  onClick = {() => setColor('green')}> 초록색 </button>
            <button style = {{ color: 'blue' }}  onClick = {() => setColor('blue')}> 파란색 </button>
        </div>
    );
}

export default Say;