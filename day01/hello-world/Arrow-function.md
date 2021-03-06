# Arrow-function : 화살표 함수


- 화살표 함수

```javascript
<h3>P70 화살표 함수</h3>
<script>
    {
        // 함수 표현식을 이용한 함수 정의(익명 함수)
        let add1 = function (a, b) {
            return a + b;
        };
        // 화살표 함수
        let add2 = (a, b) => {
            return a + b
        };

        // 화살표 함수에서 중괄호로 감싸지 않으면 화살표 오른쪽의 계산 결과를 반환
        let add3 = (a, b) => a + b;

        console.log(add1(1, 2)); // 동일한 결과를 반환
        console.log(add2(1, 2));
        console.log(add3(1, 2));

        // 매개변수가 하나이면 매개변수를 감싸고 있는 소괄호도 생략이 가능
        let add5 = a => a + 5;
        console.log(add5(10)); // 15 

        // 객체를 반환하는 경우 소괄호로 감싸야 함
        let addAndReturnObject = (a, b) => ({
            result: a + b
        })
        console.log(addAndReturnObject(10, 20)); // {result:30}
        console.log(addAndReturnObject(10, 20).result);
    }

    {
        // 화살표 함수의 코드가 여러 줄인 경우, 전체를 중괄호로 묶고, 반환값에는 return 키워드를 사용
        let add = (a, b) => {
            if (a <= 0 || b <= 0) {
                throw new Error("양수만 입력하세요");
            }
            return a + b;
        };
        console.log(add(100, 200)); // 300
    }
    {
        // 화살표 함수에서 나머지 매개변수 사용
        // 화샇표 함수는 일반 함수와 달리 this와 arguments가 바인딩되지 않음
        let obj = {
            value1: 10,
            value2: 20,
            increase: function () { // 익명함수(일반함수) 방식으로 정의
                if(this.value1!==undefined){
                    this.value1++;
                }
                else{
                    this.value1=30;
                }
            },
            add:()=>{ // 화살표 함수 방식으로 정의 : this가 바인딩 되지 않음 
                console.log(this); // window가 나옴. global로 간다는 의미
                if(this.value2 !==undefined){ // global this의 값을 증가시켜줌
                    this.value2++;
                }else{
                    this.value2=40;
                }
            }
        };
        console.log('-----------------------');
        console.log(obj.value1); // 10
        console.log(globalThis.value1); // undefined
        obj.increase();
        console.log(obj.value1); // 11
        console.log(globalThis.value1); // undefined
        let increase = obj.increase; // 함수변수 increase에 할당
        increase(); // 참조하는 객체가 없기 때문에 global로 간다. global은 window가 되고, 
        console.log(obj.value1); // 11
        // 일반 함수는 값이 증가함

        console.log('-----------------------');
        console.log(globalThis.value2); // undefined
        obj.add();   
        console.log(globalThis.value2); // 40 --> undefined이던 값이 40으로 바인딩
        console.log(obj.value2); // 20 --> 변함 없음 

        let add = obj.add;
        add();
        console.log(obj.value2); // 20 --> 변함 없음
        console.log(globalThis.value2); // 41 --> 1증가
        // 화살표 함수는 값이 변경되지 않음
        
    }
</script> 
```



- 화살표 함수 - setInterval

```javascript
<script>
    {
        function Something1() {
            this.value = 1;
            setInterval(
                function increase() { // this.value를 1초에 1씩 증가 시킴
                    if (this.value !== undefined) {
                        this.value++;
                    } else {
                        this.value = 1;
                    }
                    console.log(`something1:${this.value}`); // 1부터 출력
                },
                1000
            );
        }

        let obj1 = new Something1();


    }

    {
        // this를 함수 안에서 쓰기 위해서 새로운 변수 that을 만들어서 처리함
        function Something2() {
            this.value = 1;
            let that = this;
            setInterval(
                function increase() {
                    that.value++;
                    console.log(`something2:${that.value}`); // 2부터 출력
                },
                1000
            );
        }

        let obj2 = new Something2();
    }

    {
        // something2를 화살표 함수로 표현
        function Something3() {
            this.value = 1;
            setInterval(
                () => {
                    this.value++;
                    console.log(`something3:${this.value}`); // 2부터 출력
                },
                1000
            );
        }

        let obj3 = new Something3();
    }
</script>
```

