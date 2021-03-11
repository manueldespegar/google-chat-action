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
      head: {
        label: 'despegar:ASX-1/example',
        ref: 'ASX-1/example',
        repo: {
          allow_merge_commit: true,
          allow_rebase_merge: true,
          allow_squash_merge: true,
          archive_url: 'https://api.github.com/repos/despegar/google-chat-action/{archive_format}{/ref}',
          archived: false,
          assignees_url: 'https://api.github.com/repos/despegar/google-chat-action/assignees{/user}',
          blobs_url: 'https://api.github.com/repos/despegar/google-chat-action/git/blobs{/sha}',
          branches_url: 'https://api.github.com/repos/despegar/google-chat-action/branches{/branch}',
          clone_url: 'https://github.com/despegar/google-chat-action.git',
          collaborators_url: 'https://api.github.com/repos/despegar/google-chat-action/collaborators{/collaborator}',
          comments_url: 'https://api.github.com/repos/despegar/google-chat-action/comments{/number}',
          commits_url: 'https://api.github.com/repos/despegar/google-chat-action/commits{/sha}',
          compare_url: 'https://api.github.com/repos/despegar/google-chat-action/compare/{base}...{head}',
          contents_url: 'https://api.github.com/repos/despegar/google-chat-action/contents/{+path}',
          contributors_url: 'https://api.github.com/repos/despegar/google-chat-action/contributors',
          created_at: '2021-02-26T12:46:21Z',
          default_branch: 'main',
          delete_branch_on_merge: false,
          deployments_url: 'https://api.github.com/repos/despegar/google-chat-action/deployments',
          description: null,
          disabled: false,
          downloads_url: 'https://api.github.com/repos/despegar/google-chat-action/downloads',
          events_url: 'https://api.github.com/repos/despegar/google-chat-action/events',
          fork: false,
          forks: 0,
          forks_count: 0,
          forks_url: 'https://api.github.com/repos/despegar/google-chat-action/forks',
          full_name: 'despegar/google-chat-action',
          git_commits_url: 'https://api.github.com/repos/despegar/google-chat-action/git/commits{/sha}',
          git_refs_url: 'https://api.github.com/repos/despegar/google-chat-action/git/refs{/sha}',
          git_tags_url: 'https://api.github.com/repos/despegar/google-chat-action/git/tags{/sha}',
          git_url: 'git://github.com/despegar/google-chat-action.git',
          has_downloads: true,
          has_issues: true,
          has_pages: false,
          has_projects: true,
          has_wiki: true,
          homepage: null,
          hooks_url: 'https://api.github.com/repos/despegar/google-chat-action/hooks',
          html_url: 'https://github.com/despegar/google-chat-action',
          id: 342573458,
          issue_comment_url: 'https://api.github.com/repos/despegar/google-chat-action/issues/comments{/number}',
          issue_events_url: 'https://api.github.com/repos/despegar/google-chat-action/issues/events{/number}',
          issues_url: 'https://api.github.com/repos/despegar/google-chat-action/issues{/number}',
          keys_url: 'https://api.github.com/repos/despegar/google-chat-action/keys{/key_id}',
          labels_url: 'https://api.github.com/repos/despegar/google-chat-action/labels{/name}',
          language: 'JavaScript',
          languages_url: 'https://api.github.com/repos/despegar/google-chat-action/languages',
          license: {
            key: 'mit',
            name: 'MIT License',
            node_id: 'MDc6TGljZW5zZTEz',
            spdx_id: 'MIT',
            url: 'https://api.github.com/licenses/mit'
          },
          merges_url: 'https://api.github.com/repos/despegar/google-chat-action/merges',
          milestones_url: 'https://api.github.com/repos/despegar/google-chat-action/milestones{/number}',
          mirror_url: null,
          name: 'google-chat-action',
          node_id: 'MDEwOlJlcG9zaXRvcnkzNDI1NzM0NTg=',
          notifications_url: 'https://api.github.com/repos/despegar/google-chat-action/notifications{?since,all,participating}',
          open_issues: 1,
          open_issues_count: 1,
          owner: {
            avatar_url: 'https://avatars.githubusercontent.com/u/10155251?v=4',
            events_url: 'https://api.github.com/users/despegar/events{/privacy}',
            followers_url: 'https://api.github.com/users/despegar/followers',
            following_url: 'https://api.github.com/users/despegar/following{/other_user}',
            gists_url: 'https://api.github.com/users/despegar/gists{/gist_id}',
            gravatar_id: '',
            html_url: 'https://github.com/despegar',
            id: 10155251,
            login: 'despegar',
            node_id: 'MDEyOk9yZ2FuaXphdGlvbjEwMTU1MjUx',
            organizations_url: 'https://api.github.com/users/despegar/orgs',
            received_events_url: 'https://api.github.com/users/despegar/received_events',
            repos_url: 'https://api.github.com/users/despegar/repos',
            site_admin: false,
            starred_url: 'https://api.github.com/users/despegar/starred{/owner}{/repo}',
            subscriptions_url: 'https://api.github.com/users/despegar/subscriptions',
            type: 'Organization',
            url: 'https://api.github.com/users/despegar'
          },
          private: false,
          pulls_url: 'https://api.github.com/repos/despegar/google-chat-action/pulls{/number}',
          pushed_at: '2021-03-10T20:41:07Z',
          releases_url: 'https://api.github.com/repos/despegar/google-chat-action/releases{/id}',
          size: 422,
          ssh_url: 'git@github.com:despegar/google-chat-action.git',
          stargazers_count: 1,
          stargazers_url: 'https://api.github.com/repos/despegar/google-chat-action/stargazers',
          statuses_url: 'https://api.github.com/repos/despegar/google-chat-action/statuses/{sha}',
          subscribers_url: 'https://api.github.com/repos/despegar/google-chat-action/subscribers',
          subscription_url: 'https://api.github.com/repos/despegar/google-chat-action/subscription',
          svn_url: 'https://github.com/despegar/google-chat-action',
          tags_url: 'https://api.github.com/repos/despegar/google-chat-action/tags',
          teams_url: 'https://api.github.com/repos/despegar/google-chat-action/teams',
          trees_url: 'https://api.github.com/repos/despegar/google-chat-action/git/trees{/sha}',
          updated_at: '2021-03-10T20:06:42Z',
          url: 'https://api.github.com/repos/despegar/google-chat-action',
          watchers: 1,
          watchers_count: 1
        },
        sha: 'b4392e54e3417919ff5f425aae882f533b6f4af0',
        user: {
          avatar_url: 'https://avatars.githubusercontent.com/u/10155251?v=4',
          events_url: 'https://api.github.com/users/despegar/events{/privacy}',
          followers_url: 'https://api.github.com/users/despegar/followers',
          following_url: 'https://api.github.com/users/despegar/following{/other_user}',
          gists_url: 'https://api.github.com/users/despegar/gists{/gist_id}',
          gravatar_id: '',
          html_url: 'https://github.com/despegar',
          id: 10155251,
          login: 'despegar',
          node_id: 'MDEyOk9yZ2FuaXphdGlvbjEwMTU1MjUx',
          organizations_url: 'https://api.github.com/users/despegar/orgs',
          received_events_url: 'https://api.github.com/users/despegar/received_events',
          repos_url: 'https://api.github.com/users/despegar/repos',
          site_admin: false,
          starred_url: 'https://api.github.com/users/despegar/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/despegar/subscriptions',
          type: 'Organization',
          url: 'https://api.github.com/users/despegar'
        }
      },
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
