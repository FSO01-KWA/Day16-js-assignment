// 1. class
// 2. 클래스로 생성된 객체의 속성 초기화
// 3. Hello, my name is Alice.
// 4. 콜백 함수
// 5. 
function greet(name, callback) {
    console.log(`Hello, ${name}`);
    callback(); // 콜백 호출
  }
// 6. [2, 4, 6, 8, 10]
// 7. 함수와 그 함수가 선언된 어휘적 환경의 조합
// 8. 1,2
// 9. 함수를 인수로 받거나 반환하는 함수
// 10. promise, async/await
// 11. Prototype
// 12. 상속
// 13. 
class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks.`);
    }
  }

  // 14. 
  function repeat(action, times) {
    for (let i = 0; i < times; i++) {
      action();
    }
  }
  
  repeat(() => console.log('Repeated twice'), 2);
  repeat(() => console.log('Repeated thrice'), 3);

  // 15. 클로저가 변수를 기억해서

  // 16. 15번의 답이 문항으로 잘못 표기된 듯....

  // 17. 
  Car.prototype.drive = function() {
    console.log(`Driving ${this.brand}`);
  };

  // 18. 
  const add1ThenMultiply2 = x => multiply2(add1(x));

  // 19. super()

  // 20.
  function createCounter() {
    let count = 0;
    
    return {
      increment: function() {
        count++;
        console.log(count);
      },
      decrement: function() {
        count--;
        console.log(count);
      }
    };
  }

  // 21.
const Student = Object.create(Person);

Student.study = function() {
  console.log('Studying');
};

// 22.
function bankAccount(initialBalance) {
    let balance = initialBalance;
  
    return {
      deposit: function(amount) {
        balance += amount;
        console.log(`잔액: ${balance}`);
      },
      withdraw: function(amount) {
        if (amount > balance) {
          console.log('잔액이 부족합니다.');
        } else {
          balance -= amount;
          console.log(`잔액: ${balance}`);
        }
      },
      getBalance: function() {
        return balance;
      }
    };
  }

  //23. 
  console.log('Start');

setTimeout(() => {
  console.log('Middle');
}, 0);

console.log('End');

//24.
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    static isAdult(age) {
      return age >= 18;
    }
  }

  //25.
function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data fetched');
      }, 1000);
    });
  }
  
  fetchData().then(data => console.log(data));

  //26.
  class Employee extends Person {
    constructor(name, jobTitle) {
      super(name);
      this.jobTitle = jobTitle;
    }
  
    greet() {
      super.greet();
      console.log(`Job title: ${this.jobTitle}`);
    }
  }

  //27.
  function createCounter(step) {
    let count = 0;
  
    return function increment() {
      count += step;
      console.log(count);
    };
  }

  //28.
  const numbers = [1, 2, 3, 4, 5];

  // reduce를 사용한 합계 계산
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  console.log(sum); // 15
   
    
