'use strict';

class UserForm {
    constructor(login, password) {
        this.loginFormCallback = function (data) {
        data = {
            login: login,
            password: password,
            loginFormAction() {
                ApiConnector.login
            }
        }
          
          return alert(data);
        },
        this.registerFormCallback = function (data) {
            console.log('Вы прошли регистрацию');
        }
    }
}

class ApiConnector {
    constructor(login, password) {
        this.login = function (){
             если совпадают login и password - войти
            если данные не совпадают - зарегистрируйтесь
        }
    }
}