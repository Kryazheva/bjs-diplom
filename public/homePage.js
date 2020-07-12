'use strict';
const exit = new LogoutButton();
exit.action = () => {
    ApiConnector.logout((callback) => {
      if (callback.success) {
        location.reload();
      }
    });
  };

const user = new ProfileWidget();
ApiConnector.current(callback => {
      if (callback.success === true) {
        ProfileWidget.showProfile(callback.data)
      }
})

const tableBody = new RatesBoard();
ApiConnector.getStocks(callback => {
    if (callback.success) {
        RatesBoard.fillTable(callback.data)
    }
})