import React from 'react';

function Child({name, onChange}){
    
    return (
        <div>
            <input type="text" value={name} onChange={onChange}/>
        </div>
    );

}
export default Child;