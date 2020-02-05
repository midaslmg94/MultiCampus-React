# Grammar- ES6+
- 단축 속성명(shorthand property names) : 속성의 이름만 가지고(이름이 같아야 함) 변수와 바인딩을 시켜준다

  ```javascript
  <script>
      let name = 'min';
      let obj_new={
          age:26,
          name, // 객체의 속성값이 변수로 존재하면 간단하게 변수 이름만 기술할 수 있다.
          getName(){return this.name}
      };
      console.log(obj_new.getName());
  </script>
  
  
  # 단축 속성명을 사용하지 않음 : 옛날 방식
  <script>
  {
          function makePerson_old(age, name) {
              return {age:age, name:name};
            }
            console.log(makePerson_old(12, 'lee')); // {age: 12, name: "lee"}
  
            # 단축 속성명 사용. age, name의 변수명을 같게 써줘야 한다.
            function makePerson_new(age,name) {  
                return {age, name};
            }
            console.log(makePerson_new(12,'ki'));
  }
  </script>
  
  # console.log 출력시 단축 속성명 활용
  <script>
      {
          let name = 'John';
          let age = 21;
          console.log('name=',name, 'age=',age);
  
          console.log({name,age});
      }
  </script>
  ```

  

- 계산된 속성명 : 객체의 속성명을 동적으로 결정

  ```javascript
  <script>
      {
      	# 계산된 속성명 사용 X
          function makeObject_unused(key, value) {
              const obj = {};
              obj[key]=value;
              return obj;
          }
          console.log(makeObject_unused("name","Tom"));
  		
  		# 계산된 속성명 사용 O
          function makeObject_used(key, value) {
              return{[key]:value};
          }
          console.log(makeObject_used("name","Tom"));
  
      }
  </script>    
  ```

  ```javascript
  # 객체의 속성으로 연산식이 들어갈 수 있음
  <script>
          let i=0;
          let obj={
              ["val"+ i++]:i,
              ["val"+ i++]:i,
              ["val"+ i++]:i,
          };
          console.log(obj.val0, obj.val1, obj.val2);
  </script>
  
  # 
  <script>
  let param = 'size';
          let config = {
              [param]:12 ,
              ["mobile"+ param.charAt(0).toUpperCase() + param.slice(1)]:4
  
          };
          console.log(config); // {size: 12, mobileSize:4}
  </script>
  ```



- 전개 연산자(spread operator)

  ```javascript
  # 함수의 매개변수를 전달
  <script>
       let numbers = [1,3,5,7,9];
       console.log(Math.max(numbers)); // max함수는 배열을 인자값으로 받지 못함      	 
       console.log(Math.max(...numbers));    
      
  </script>
  
  # 배열과 객체를 복사
  <script>
  	 // 전개 연산자를 이용해서 배열을 복사
      let arr1 = [1,5,7]; 
      let arr2 = [...arr1]; # 값 복사(깊은 복사)
      let arr3 = arr1;  # 주소값 복사(얕은 복사)
  
      // 동일한 결과가 출력
      console.log(arr1); // [1,5,7]
      console.log(arr2); // [1,5,7]
      console.log(arr3); // [1,5,7]
  
      arr1[0] = 10;
      // arr1, arr3은 바뀌고 arr2은 안바뀜
      console.log(arr1); // [10,5,7]
      console.log(arr2); // [1,5,7]
      console.log(arr3); // [10,5,7]
  
  
  
  	// 배열에서 전개 연산자를 사용하면 배열 요소의 순서가 유지
      console.log([1,...[2,3],4]);
      console.log(new Date(2020,2,5));
      console.log(new Date(...[2020,2,5]));
  
      let today = [2020,2,5];
      console.log(new Date(today[0], today[1], today[2]));
      console.log(new Date(...today));
  </script>
  
  <script>
      {
  	 // 전개 연산자를 이용해서 객체를 복사
          let obj1 = {age: 25, name: 'kim'};
          let obj2 = {...obj1};
          let obj3 = obj1;
          console.log(obj1); // [age:25, name:"kim"]
          console.log(obj2); // [age:25, name:"kim"]
          console.log(obj3); // [age:25, name:"kim"]
  
          obj1["age"] = 99;
          console.log(obj1); // [age:99 name:"kim"]
          console.log(obj2); // [age:25, name:"kim"]
          console.log(obj3); // [age:99 name:"kim"]   
  	}
  
  	{
    	// 두 객체 병합
          let obj1={age:21, name:"Jack"};
          let obj2={hobby:'soccer'};
          let obj3={...obj1, ...obj2};
          console.log(obj3);
      }
  
      { 
          // 객체 리터럴에서 중복된 속성명이 사용 가능
          let obj1 = {x:"a", x:2, y:'b'};
          console.log(obj1); // x:2, y:'b'
          let obj2 = {...obj1, y:'c'};  // x:2, y:'c'
          console.log(obj2);
      }
  </script>
  
  ```

- 

