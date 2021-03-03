/* eslint-disable */
var axios = require('axios');

let sendNotification = function (url, context) {
    return new Promise(async (resolve, reject) => {
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
          const response = await axios(config)
          return resolve(response.status)
        } catch (error) {
          console.log("error :>> ", error);
          return reject(error);
        }
      });
};


module.exports = sendNotification;
