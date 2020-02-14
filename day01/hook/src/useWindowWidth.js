import {useEffect, useState} from 'react';
// 변경된 widthm값을 리턴
function useWindowWidth(){
    const[width, setWidh]=useState(window.innerWidth);
    useEffect(
        ()=> {
            const onResize = ()=>{setWidh(window.innerWidth)};   
            window.addEventListener('resize', onResize);
        }
    );
    retunrn width;
}
export default useWindowWidth;