'use strict';
const exit = new LogoutButton();
exit.action = () => {
    ApiConnector.logout((callback) => {
      if (callback.success) {
        location.reload();
      }
    });
  };

new ProfileWidget();
ApiConnector.current(callback => {
      if (callback.success === true) {
        ProfileWidget.showProfile(callback.data);
      }
});

const tableBody = new RatesBoard();
ApiConnector.getStocks(callback => {
    if (callback.success === true) {
        tableBody.clearTable();
        tableBody.fillTable(callback.data);
    }
});

/* window.setInterval(() => {
    }, 1000);

    мы внутри сеттаймаута реализовываем getStocks?
    или передаем в качестве аргумента? 
    И тогда нужно будет вывести в константу наш запрос?
*/ 
const errorMessageBlock = new MoneyManager();
const addMoneyForm = new MoneyManager();
addMoneyForm.addMoneyCallback = (data) => {
    ApiConnector.addMoney(data, callback => {
        if (callback.success === true) {
            ProfileWidget.showProfile(callback.data);
            // addMoneyForm.setMessage(callback.success, callback.data);
        } else {
            errorMessageBlock.setMessage(!callback.success, callback.data);
        }
    });
};

//при любом раскладе почему то приходит false
const conversionMoneyForm = new MoneyManager();
conversionMoneyForm.conversionMoneyCallback = (data) => {
    ApiConnector.convertMoney(data, callback => {
        if (callback.success === true) {
            ProfileWidget.showProfile(callback.data);
        } else {
            errorMessageBlock.setMessage(!callback.success, callback.data);
        }
    })
}
//при любом раскладе почему то приходит false
const sendMoneyForm = new MoneyManager();
sendMoneyForm.sendMoneyCallback = (data) => {
    ApiConnector.transferMoney(data, callback => {
        if (callback.success === true) {
            ProfileWidget.showProfile(callback.data);
        } else {
            errorMessageBlock.setMessage(!callback.success, callback.data);
        }
    })
}
const favoritesTableBody = new FavoritesWidget();  
ApiConnector.getFavorites(callback => {
    if (callback.success === true) {
        favoritesTableBody.clearTable();
        favoritesTableBody.fillTable(callback.data);
        sendMoneyForm.updateUsersList(callback.data);
    }
});

const addUserToFavoritesForm = new FavoritesWidget();
const favoritesMessageBox = new FavoritesWidget();
addUserToFavoritesForm.addUserCallback = (data) => {
    ApiConnector.addUserToFavorites(data, callback => {
        console.log(callback)
        if (callback.success === true) {
            addUserToFavoritesForm.clearTable();
            addUserToFavoritesForm.fillTable(callback.data);
            sendMoneyForm.updateUsersList(callback.data);
        } else {
            favoritesMessageBox.setMessage(!callback.success, callback.data);
        }
    });
};

const removeUserToFavoritesForm = new FavoritesWidget();
removeUserToFavoritesForm.removeUserCallback = (data) => {
    ApiConnector.removeUserFromFavorites(data, callback => {
        console.log(callback)
        if (callback.success === true) {
            removeUserToFavoritesForm.clearTable();
            removeUserToFavoritesForm.fillTable(callback.data);
            sendMoneyForm.updateUsersList(callback.data);
        } else {
            favoritesMessageBox.setMessage(!callback.success, callback.data);
        }
    });
}