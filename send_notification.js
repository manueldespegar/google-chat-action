const github = require('@actions/github');
var axios = require('axios');


let sendNotification = function () {
    return new Promise((resolve, reject) => {
        try {

            const {owner, repo} = github.context.repo
            const pullRequestPayload = github.context
            var data = '{"text" : "'+owner+' / PR '+repo+'"}';

            var config = {
              method: 'post',
              url: 'https://chat.googleapis.com/v1/spaces/AAAA7OKsf0M/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=2tWgZ47_zVfbjD96NyjOCHQqJapONCVDTSro4uhkwd8%3D',
              headers: { 
                'Content-Type': 'application/json; charset=UTF-8'
              },
              data : data
            };
            
            let response = axios(config)
            console.log(github.context)
          return resolve(response);
        } catch (error) {
          console.log("error :>> ", error);
          return reject(error);
        }
      });
};


module.exports = sendNotification;
