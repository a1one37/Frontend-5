 const users = [
    {
      id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      eyeColor: 'blue',
      friends: ['Sharron Pace'],
      isActive: false,
      balance: 2811,
      skills: ['ipsum', 'lorem'],
      gender: 'male',
      age: 37,
    },
    {
      id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      eyeColor: 'blue',
      friends: ['Briana Decker', 'Sharron Pace',],
      isActive: true,
      balance: 3821,
      skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
      gender: 'female',
      age: 34,
    },
    {
      id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      eyeColor: 'green',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner', 'qq', 'qq', 'qq', 'qq'],
      isActive: false,
      balance: 3793,
      skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
      gender: 'male',
      age: 24,
    },
    {
      id: '249b6175-5c30-44c6-b154-f120923736f5',
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      eyeColor: 'green',
      friends: ['Goldie Gentry', 'Aisha Tran', 'qq'],
      isActive: true,
      balance: 2278,
      skills: ['adipisicing', 'irure', 'velit'],
      gender: 'female',
      age: 21,
    },
    {
      id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      eyeColor: 'blue',
      friends: ['Jordan Sampson', 'Eddie Strong', 'qq', 'qq'],
      isActive: true,
      balance: 3951,
      skills: ['ex', 'culpa', 'nostrud'],
      gender: 'male',
      age: 27,
    },
    {
      id: '150b00fb-dd82-427d-9faf-2879ea87c695',
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      eyeColor: 'brown',
      friends: ['Jacklyn Lucas', 'Linda Chapman', 'qq', 'qq', 'qq'],
      isActive: false,
      balance: 1498,
      skills: ['non', 'amet', 'ipsum'],
      gender: 'male',
      age: 38,
    },
    {
      id: 'e1bf46ab-7168-491e-925e-f01e21394812',
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      eyeColor: 'brown',
      friends: ['Goldie Gentry', 'Briana Decker', 'qq', 'qq', 'qq', 'qq'],
      isActive: true,
      balance: 2764,
      skills: ['lorem', 'veniam', 'culpa'],
      gender: 'female',
      age: 39,
    },
  ];



// ------------------------------------------------------------------------------ Задание 1  --------------------------------------------------------------------------


// const getUserNames = users => {
//  const findName = users.map(element =>element.name)
//  console.log(findName); 
//   };
  
//   console.log(getUserNames(users));
//   // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]


// ------------------------------------------------------------------------------ Задание 2  --------------------------------------------------------------------------




// const getUsersWithEyeColor = (users, color) => {
   
//     const usersColorOfEye = users.filter(element => element.eyeColor.includes(color))
// console.log("Объекты: " , usersColorOfEye);
// }
   
  
//   console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]



// ------------------------------------------------------------------------------ Задание 3  --------------------------------------------------------------------------


// const getUsersWithGender = (users, gender) => {
//   const arr = []
//        const usersGender = users.map(element => element.gender)
//  console.log( usersGender);  
// for(let i of usersGender){
//   if(i.includes(gender)){
// arr.push(i)
//   }
// }
// return arr
// };

// console.log(getUsersWithGender(users, 'female')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]


// ------------------------------------------------------------------------------ Задание 4  --------------------------------------------------------------------------



// const getInactiveUsers = users => {
//   const inActiveUsers = users.filter(element => !element.isActive)
//   console.log(inActiveUsers);
// };

// console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]


// ------------------------------------------------------------------------------ Задание 5  --------------------------------------------------------------------------



// const getUserWithEmail = (users, email) => {
//   const getUserEmail = users.find(element => element.email.includes(email))
//    console.log(getUserEmail);
// };

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}


// ------------------------------------------------------------------------------ Задание 6  --------------------------------------------------------------------------
// const getUsersWithAge = (users, min, max) => {
//     const UsersWithAge = users.filter(element => element.age>min & element.age<max)
//  console.log(UsersWithAge);
// };

// console.log(getUsersWithAge(users, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]

// ------------------------------------------------------------------------------ Задание 7  --------------------------------------------------------------------------


// const calculateTotalBalance = users  =>{
// const allBalance = users.reduce((totaBalance, balanceOfCurrentUser) => totaBalance += balanceOfCurrentUser.balance, 0); 
// console.log(allBalance);
// }


// console.log(calculateTotalBalance(users)); // 20916

// ------------------------------------------------------------------------------ Задание 8  --------------------------------------------------------------------------

// const getUsersWithFriend = (users, friendName) => {
//   const getUserFriend = users.filter(element => element.friends.includes(friendName))
//     console.log(getUserFriend);
// };

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]


// ------------------------------------------------------------------------------ Задание 9  --------------------------------------------------------------------------


// const getNamesSortedByFriendsCount = users => {
//    const ageFriend = users.filter (element => element.friends).sort((a,b) => a.friends.length > b.friends.length ? 1 : -1 )
//    console.log(ageFriend);
// };

// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]


// ------------------------------------------------------------------------------ Задание 10  --------------------------------------------------------------------------


// const getSortedUniqueSkills = users => {
//   const getSortedUniqueSkills = users.reduce((acc, item)=> {
//     acc.includes(item.skills[0])
//     for(let element of item.skills){
//         if(!acc.includes(element)){
//             acc.push(element)
//         }
//     }
//     return acc
// },[]).sort((a,b)=> a>b ? 1:-1 )

// console.log(getSortedUniqueSkills);
// };

// console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]