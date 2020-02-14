import React, { useState, useEffect } from 'react';

function MyComponent({userId}){
    const[user, setUser] = useState(null);
    useEffect(()=>{
        getUserApi(userId).then(data=>setUser(data))
    });
    return(
        <div>
                { !user && <p>사용자 정보를 가져오는 중 ...</p> }
                { user && (
                    <>
                        <p>{`name is ${user.name}`}</p>
                        <p>{`age is ${user.age}`}</p>
                    </>
                ) }    

        </div>
    );
}
function getUserApi(userId) {
    return Promise.resolve({userId: 123, name: '홍길동', age: 23});
}

export default MyComponent;
