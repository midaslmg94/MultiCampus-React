# Array-Destructuring(배열 비구조화)


- 배열 비구조화 : 배열의 여러 속성값을 변수로 쉽게 할당할 수 있는 문법

```javascript
<script>
    //  중첩된 객체의 비구조화
    {
        const obj = { name: "Mike", mother: { name: "Sara" } };
        const { name, mother: { name: motherName } } = obj;
        console.log(name);              // Mike
        console.log(motherName);        // Sara
    }
    {
        const obj = { name: "Mike", mother: { name: "Sara" } };
        const { name, mother } = obj;
        console.log(name);              // Mike
        console.log(mother["name"]);    // Sara
    }
    {
        const obj = { name: "Mike", mother: { motherName: "Sara" } };
        const { name, mother: { motherName } } = obj;
        console.log(name);              // Mike
        console.log(motherName);        // Sara
    }
    
    //  비구조화에서 기본값은 변수 단위가 아니라 패턴 단위로 적용
    {
        //  우측 배열이 비어 있기 때문에 객체 기본값을 이용
        const [ { prop: x1 } = { prop: 123 } ] = [ ];
        console.log(x1);        // 123
    }
    {
        //  우측 배열이 비어 있지 않기 때문에 객체 기본값을 이용하지 않음
        const [ { prop: x1 } = { prop: 123 } ] = [ {} ];
        console.log(x1);        // undefined
    }
    
    //  객체 비구조화에서 계산된 속성명을 사용
    //  객체 비구조화에서 계산된 속성명을 사용할 때는 반드시 별칭을 입력해야 함
    {
        const index = 1;
        // const { key1 } = { key1: 123 };
        const { [`key${index}`]: valueOfTheIndex } = { key1: 123 };
        console.log(valueOfTheIndex);   // 123
    }
    
    //  별칭을 이용해서 다른 객체와 배열의 속성값 할당
    {
        const obj = {};
        const arr = [];
        const res = { foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true };
        console.log(obj);   // { prop: 123 }
        console.log(arr);   // [ true ]
    }
    </script>
    
```

