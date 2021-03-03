var axios = require('axios');


let sendNotification = function (url, context) {
    return new Promise((resolve, reject) => {
        try {
          const {owner, repo} = context.repo
          const pullRequestPayload = context.payload
          const pullRequest = pullRequestPayload.pull_request

          var data = '{"text" : "['+owner+'/'+repo+'] - PR '+pullRequest.user.login+' opened '+pullRequest.html_url+'  ('+pullRequest.title+')"}';

          var config = {
            method: 'post',
            url: url,
            headers: { 
              'Content-Type': 'application/json; charset=UTF-8'
            },
            data : data
          };
            
            let response = axios(config)
          return resolve(response);
        } catch (error) {
          console.log("error :>> ", error);
          return reject(error);
        }
      });
};


module.exports = sendNotification;
