const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  if(login.length >= 4 && login.length <= 16){
      return true
  }
return false
};
// console.log(isLoginValid("my login"));


const isLoginUnique = function (allLogins, login) {
  if(allLogins.includes(login)){
      return true
  }
  return false
};
console.log(isLoginUnique(logins, "mango"));

const addLogin = function (allLogins, login) {
  // твій код
};