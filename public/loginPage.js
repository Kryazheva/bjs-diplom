'use strict';
const logIn = new UserForm(); 
logIn.loginFormCallback = data => {
    ApiConnector.login(data, callback => {
      if (callback.success === true) {
          location.reload(); //войди
      } else{
          logIn.setLoginErrorMessage(callback.data); //выведи ошибку
      }
    });
  }

  logIn.registerFormCallback = data => {
    ApiConnector.login(data, callback => {
      if (callback.success === true) {
          location.reload(); //войди
      } else{
          logIn.setLoginErrorMessage(callback.data); //выведи ошибку
      }
    });
  }


