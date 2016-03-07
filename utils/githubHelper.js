var Axios = require('axios');


function getUserInfo(username) {
  return Axios.get('https://api.github.com/users/' + username);
}

helpers = {
  getUsersInfo : function(users) {
      // get each user info
      return Axios.all(
        users.map(function(user) {
          return getUserInfo(user);
        })
      ).then (function (info) {
        return info.map(function(player) {
          return player.data;
        });
      }).catch(function(err) {
        console.warn("Error in getting github user info", err);
      });
  }
}

module.exports = helpers;
