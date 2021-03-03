const sendNotification = require('./send_notification');

const url = 'https://chat.googleapis.com/v1/spaces/AAAA7OKsf0M/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=2tWgZ47_zVfbjD96NyjOCHQqJapONCVDTSro4uhkwd8%3D'


const PR_JSON = {
  repo: {repo: "caracas",owner: "denoche"},
  payload: {
    action: 'synchronize',
    after: '81946530c2d39b700ec2c26f01a2ecc592966dca',
    before: '73cb5dd0730b53a7b5f42316675c56645a08de14',
    number: 2,
    pull_request: {
      _links: [Object],
      active_lock_reason: null,
      additions: 35,
      assignee: null,
      assignees: [],
      author_association: 'OWNER',
      auto_merge: null,
      base: [Object],
      body: '',
      changed_files: 6,
      closed_at: null,
      comments: 0,
      comments_url: 'https://api.github.com/repos/manueldespegar/google-chat-action/issues/2/comments',
      commits: 5,
      commits_url: 'https://api.github.com/repos/manueldespegar/google-chat-action/pulls/2/commits',
      created_at: '2021-02-26T21:44:01Z',
      deletions: 67,
      diff_url: 'https://github.com/manueldespegar/google-chat-action/pull/2.diff',
      draft: false,
      head: [Object],
      html_url: 'https://github.com/manueldespegar/google-chat-action/pull/2',
      id: 581133586,
      issue_url: 'https://api.github.com/repos/manueldespegar/google-chat-action/issues/2',
      labels: [],
      locked: false,
      maintainer_can_modify: false,
      merge_commit_sha: 'fe82e04861afc304b4e6bd7a1e6863272a641f90',
      mergeable: null,
      mergeable_state: 'unknown',
      merged: false,
      merged_at: null,
      merged_by: null,
      milestone: null,
      node_id: 'MDExOlB1bGxSZXF1ZXN0NTgxMTMzNTg2',
      number: 2,
      patch_url: 'https://github.com/manueldespegar/google-chat-action/pull/2.patch',
      rebaseable: null,
      requested_reviewers: [],
      requested_teams: [],
      review_comment_url: 'https://api.github.com/repos/manueldespegar/google-chat-action/pulls/comments{/number}',
      review_comments: 0,
      review_comments_url: 'https://api.github.com/repos/manueldespegar/google-chat-action/pulls/2/comments',
      state: 'open',
      statuses_url: 'https://api.github.com/repos/manueldespegar/google-chat-action/statuses/81946530c2d39b700ec2c26f01a2ecc592966dca',
      title: 'asd',
      updated_at: '2021-03-02T02:08:17Z',
      url: 'https://api.github.com/repos/manueldespegar/google-chat-action/pulls/2',
      user: {"login": "manuelen"}
    },
  },


}

test('wait response', async () => {
  await expect (
    sendNotification(url, PR_JSON)).resolves.toBe(200);
});

test('throws invalid url', async () => {
  await expect(sendNotification(url+"1", PR_JSON)).rejects.any;
});
