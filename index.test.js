const sendNotification = require('./src/send_notification');
const process = require('process');
const cp = require('child_process');
const path = require('path');

test('throws invalid url', async () => {
  await expect(sendNotification('foo')).rejects.toThrow('url not valid');
});

test('wait response', async () => {
  response = await sendNotification('https://chat.googleapis.com/v1/spaces/AAAA7OKsf0M/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=2tWgZ47_zVfbjD96NyjOCHQqJapONCVDTSro4uhkwd8%3D')
  console.log(response)
});

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  process.env['INPUT_url'] = 'https://chat.googleapis.com/v1/spaces/AAAA7OKsf0M/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=2tWgZ47_zVfbjD96NyjOCHQqJapONCVDTSro4uhkwd8%3D';
  const ip = path.join(__dirname, 'index.js');
  console.log(ip)
  console.log(cp.execSync(`node ${ip}`, {env: process.env}).toString());
})
