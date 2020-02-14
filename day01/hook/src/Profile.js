import React, {useEffect} from 'react';

function Profile() {
    const inputEl1 = React.useRef();
    const inputEl2 = React.useRef();
    const onClick = () => {
        if (inputEl1.current) {
            inputEl1.current.focus();
        }
    };
    useEffect(()=>{
        if(inputEl2.current) {
           inputEl2.current.focus();
        }
    });

    return (
        <div>
            <input ref={inputEl1} type="text" value="inputEl1"/>
            <input ref={inputEl2} type="text" value="inputEl2"/>
            <button onClick={onClick}>inputEl1으로 포커스 이동</button>
        </div>
    );
}
export default Profile;
