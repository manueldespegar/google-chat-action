const core = require('@actions/core');
const sendNotification = require('./send_notification')


// most @actions toolkit packages have async methods
async function run() {
  try {

    sendNotification()
    core.setOutput('url', new Date().toTimeString());
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
