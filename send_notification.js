/* eslint-disable */
var axios = require('axios');
const JIRA_URL = "https://jira.despegar.com/browse/"

let compose_jira_url = function(branch){
  let jiraCode = branch.match(/(.?\w{0,3}-\d+)/)[0]
  return JIRA_URL+jiraCode
}

let write_message = function(context){
  const {owner, repo} = context.repo
  const pullRequestPayload = context.payload
  const pullRequest = pullRequestPayload.pull_request
  let url_jira = compose_jira_url(pullRequest.head.ref)
  return `[${owner}/${repo}] - PR ${pullRequest.user.login} ${pullRequest.html_url}  (${pullRequest.title}) ${url_jira}`

}

let sendNotification = function (url, context) {
    return new Promise(async (resolve, reject) => {
        try {
          var message = write_message(context)
          var data = JSON.stringify({"text" : message});
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
