// ------------------------  ------------------------------------------------------Задание 1------------------------------------------------------------------------------
// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true

//   };

//   user['mood'] = 'happy';
// user.hobby = 'skydiving'
// user.premium = 'false'

//   for(let elements in user){
//       console.log(elements + " : " + user[elements]);
      
//   }

// ------------------------  ------------------------------------------------------Задание 2------------------------------------------------------------------------------


// const countProps = function (obj) {

// return "Количество свойств: "  + Object.keys(obj).length

//   };
  
 
//   console.log(countProps({})); // 0
  
//   console.log(countProps({ name: 'Mango', age: 2 })); // 2
  
//   console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3



// ------------------------  ------------------------------------------------------Задание 3------------------------------------------------------------------------------


// const findBestEmployee = function (employees) {
    

// let arr = Object.values(employees);

     
//      let max = Math.max(...arr);
   

//    console.log(nameOfBest , max);
     



//   };
  
//   /*
//    * Викличи функції для перевірки працездатності твоєї реалізації.
//    */
//   console.log(
//     findBestEmployee({
//       ann: 29,
//       david: 35,
//       helen: 1,
//       lorence: 99,
//     }),
//   ); // lorence
  
//   console.log(
//     findBestEmployee({
//       poly: 12,
//       mango: 17,
//       ajax: 4,
//     }),
//   ); // mango
  
//   console.log(
//     findBestEmployee({
//       lux: 147,
//       david: 21,
//       kiwi: 19,
//       chelsy: 38,
//     }),
//   ); // lux



// ------------------------  ------------------------------------------------------Задание 4------------------------------------------------------------------------------


// const countTotalSalary = function (employees) {
//     let sum = 0;
//     for (let salary of Object.values(employees)) {
//       sum += salary;
//     }
  
//     return sum; 
//   };
  
//   /*
//    * Викличи функції для перевірки працездатності твоєї реалізації.
//    */
//   console.log(countTotalSalary({})); // 0
  
//   console.log(
//     countTotalSalary({
//       mango: 100,
//       poly: 150,
//       alfred: 80,
//     }),
//   ); // 330
  
//   console.log(
//     countTotalSalary({
//       kiwi: 200,
//       lux: 50,
//       chelsy: 150,
//     }),
//   ); // 400


// ------------------------  ------------------------------------------------------Задание 5------------------------------------------------------------------------------

// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроїд', price: 400, quantity: 7 },
//     { name: 'Захоплення', price: 1200, quantity: 2 },
//   ];
  
//  const getAllPropValues = function (arr, prop) {

//   }
  
  
//   // Вызовы функции для проверки
//   console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']

//   console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
  
//   console.log(getAllPropValues(products, 'category')); // []


// ------------------------  ------------------------------------------------------Задание 6------------------------------------------------------------------------------

// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроїд', price: 400, quantity: 7 },
//     { name: 'Захоплення', price: 1200, quantity: 2 },
//   ];
  
//   const calculateTotalPrice = function (allProdcuts, productName) {
//     console.log(allProdcuts * productName);
//   };
  
//   /*
//    * Викличи функції для перевірки працездатності твоєї реалізації.
//    */
//   console.log(calculateTotalPrice(products, 'Радар')); // 5200
  
//   console.log(calculateTotalPrice(products, 'Дроїд')); // 2800