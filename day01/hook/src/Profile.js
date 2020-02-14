import React, {useContext} from 'react';

const UserContext = React.createContext();

function Profile({userId}) {
    const user = {
        name: '이리이링리이이니이니',
        age: 44564
    };
    return (
        <div>
            {/*  */}
            <UserContext.Provider value={user}>
                <ParentComponent/>
            </UserContext.Provider>
        </div>
    );
}
function ParentComponent() {
    return (
        <div>
            <ChildComponent/>
            <ChildComponentWithHook/>
        </div>
    );
}
// 훅을 사용하지 않음 --> 부모~자식간의 깊이가 길어지면 복잡해진다.
function ChildComponent({user}) {
    return (
        <UserContext.Consumer>
            {user => (
                <div>
                    <p>{`name is ${user.name}`}</p>
                    <p>{`age is ${user.age}`}</p>
                </div>
            )}
        </UserContext.Consumer>
    );
}

// 훅을 사용
function ChildComponentWithHook(){
    const user =useContext(UserContext);
    return(
        <div>
            <p>{`name is ${user.name}`}</p>
            <p>{`name is ${user.age}`}</p>

        </div>
    )
}
export default Profile;



