import React, {useEffect, useState} from 'react';

function Effect() {
    const [count, setCount] = useState(0);
    // 렌더링 결과가 실제 돔에  반영된 후 호출되는 훅
    useEffect(() => {
        document.title = `현재 클릭 수 : ${count}`;
    });
    return (
        <div>
            <p>현재 클릭수:{count}</p>
            <p>
                <button onClick={()=>setCount(count+1)}>클릭</button>
                <button onClick={()=>setCount(0)}>초기화</button>
            </p>
        </div>
    );

}
export default Effect;