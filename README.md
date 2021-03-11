# Google-chat-action

GITHUB ACTION PARA ENVIAR NOTIFICACIONES AL HACER PR

### Equipo / Coordinación / Gerencia
[aftersale-AgentTools](https://github.com/orgs/despegar/teams/aftersale-agenttools/members) / Mariano Fabian Longo	(mflongo@despegar.com) / Jorge Santoro	(jsantoro@despegar.com) 

### Contacto
[aftersale-agentTools-dev@despegar.com](mailto:aftersale-agentTools-dev@despegar.com)
 
## Code in Main

Install the dependencies

```bash
npm install
```

Run the tests :heavy_check_mark:

```bash
$ npm test

 PASS  ./index.test.js
  ✓ throws invalid number (3ms)
  ✓ wait 500 ms (504ms)
  ✓ test runs (95ms)
...
```

## Package for distribution

GitHub Actions will run the entry point from the action.yml. Packaging assembles the code into one file that can be checked in to Git, enabling fast and reliable execution and preventing the need to check in node_modules.

Actions are run from GitHub repos.  Packaging the action will create a packaged action in the dist folder.

Run prepare

```bash
npm run prepare
```

Since the packaged index.js is run from the dist folder.

```bash
git add dist
```


### Usage

Add `notify.yml` to `.github/workflows/`

> .github/workflows/notify.yml
```yaml
name: notify
on:
  pull_request:
    types: [opened]
jobs:
  notify:
    runs-on: [self-hosted]
    continue-on-error: false
    steps:
    - name: Google Chat Notification
      uses: despegar/google-chat-action@v0.0.2
      with:
        url: ${{ secrets.GOOGLE_CHAT_WEBHOOK }}
```
