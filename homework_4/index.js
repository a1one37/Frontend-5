// ----------------------------------------------------------------------- Задание 1 -------------------------------------------------------------------------

// const logItems = function (array) {
//     for(let i=0; i<array.length ; i+=1){
// console.log(i+1)
// console.log(array[1]);
//     }
//   };
  
//   /*
//    * Виклич функції для перевірки працездатності твоєї реалізації.
//    */
//   logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
  
//     logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);










// ----------------------------------------------------------------------- Задание 2 -------------------------------------------------------------------------

// const calculateEngravingPrice = function (message, pricePerWord) {
//     const splitedMesage =  message.split(" ");
//     console.log(splitedMesage);
//     console.log(pricePerWord*splitedMesage.length);
    
//   };
  
  
//   console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       10,
//     ),
//   ); // 80
  
//   console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       20,
//     ),
//   ); // 160
  
//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
//   ); // 240
  
//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
//   ); // 120

// ----------------------------------------------------------------------- Задание 3 -------------------------------------------------------------------------


// const findLongestWord = function (string) {
//    let longest = 0;
//     const splitedArray = string.split(" ");

//     console.log(splitedArray);

//     for(let i=0; i < splitedArray.length; i+=1 ){

// if(longest < splitedArray[i].length){
//     continue
   
// }
//  if(longest > splitedArray[i].length){
//         console.log(longest);
//     } 
//     }
   
// }
  
//   /*
//    * Виклич функції для перевірки працездатності твоєї реалізації.
//    */
//   console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
//   console.log(findLongestWord('Google do a roll')); // 'Google'
  
//   console.log(findLongestWord('May the force be with you')); // 'force'




// ----------------------------------------------------------------------- Задание 4 -------------------------------------------------------------------------

// const formatString = function (string) {
//     if(string.length > 40){
//         console.log(string.slice(0,40), "... (этот рядок обрезался)");
//     }
//    else{
//       console.log(string); 
//    } 
//   };
  
 
//   console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

  
//   console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

//   console.log(formatString('Curabitur ligula sapien.'));
 
  
//   console.log(
//     formatString(
//       'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//     ),
//   );
 
// ----------------------------------------------------------------------- Задание 5 -------------------------------------------------------------------------


// const checkForSpam = function (message) {
//     if(message.toLowerCase().includes("spam") || message.includes("sale")){
//         return true

//     }
//     else{
//         return false
//     }
//   };
  
 
//   console.log(checkForSpam('Latest technology news')); 
  
//   console.log(checkForSpam('JavaScript weekly newsletter')); 
  
//   console.log(checkForSpam('Get best sale offers now!')); 
  
//   console.log(checkForSpam('[SPAM] How to earn fast money?'));

// ----------------------------------------------------------------------- Задание 6 -------------------------------------------------------------------------


// let input ;
// const numbers = [];
// let total = 0;



// do{
    

//     input = prompt("enter")
//     if(input === null){
//         continue
//     }
//     let inputIsNaN = parseFloat( isNaN(Number(input)))
//     inputIsNaN ? alert("Ви ввели не число ") :  numbers.push(Number(input));
    




// }while(input !== null)

// for(let i of numbers){
//     total += i
// }

// console.log(numbers);
// console.log("Сумма чисел: "+ total);