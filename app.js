var {FB} = require('fb')
var access_token= 'Your_Access_Token'
FB.setAccessToken(access_token);

var message = 'Hi from facebook-node-js';
var facebookGroupId='730318568396033'
FB.api( facebookGroupId+'/feed', 'POST', {
     access_token: access_token,
      message: message
  }, function (res) {
      if (!res || res.error) {
          console.error(!res ? 'error occurred' : res.error);
          return;
      }
      console.log('Post Id: ' + res.id);
  });