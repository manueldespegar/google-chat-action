const core = require('@actions/core');
const github = require('@actions/github');
const sendNotification = require('./send_notification')

// most @actions toolkit packages have async methods
async function run() {
  try {
    const url = core.getInput('url', {required: true})
    core.info(github.context)
    sendNotification(url, github.context)
    core.setOutput('url', url);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
