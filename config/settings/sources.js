 module.exports = {
  // SOURCE SETTINGS
  // Set the sources of externally linked data/files
  sources: {
    'project': {
      type: 'model',
      target: 'Project',
      fields: [
        {
          name: 'title',
          where: { state: 'public' }
        }
      ]
    },
    'task': {
      type: 'model',
      target: 'Task',
      fields: [
        {
          name: 'title',
          where: { state: 'public' }
        }
      ]
    },
    'profile': {
      type: 'model',
      target: 'User',
      fields: [
        {
          name: 'username',
          limit: 5
        },
        {
          name: 'name',
          limit: 5
        }
      ]
    },
    'user': {
      type: 'model',
      target: 'User',
      fields: [
        {
          name: 'name',
          limit: 10
        }
      ]
    },
    'tag': {
      type: 'model',
      target: 'TagEntity',
      list: true,
      fields: [
        {
          name: 'name'
        }
      ],
      params: [
        'type'
      ],
      include: [
        'name',
        'type'
      ]
    },
    'wikipedia': {
      type: 'mediawiki',
      target: 'wikipedia',
      limit: 5,
      apiUrl: 'http://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srprop=score&srsearch='
    }
  },
  // Determine the autocomplete search order
  // search is the main search bar
  // inline is for general text boxes (comments, project, tasks)
  // attachments is for the attachment sidebar
  autocomplete: {
    'search': ['project', 'tag'],
    'inline': ['profile', 'project', 'wikipedia'],
    'tag': ['tag'],
    'attachments': ['profile', 'wikipedia'],
    'user': ['user'],
    // these are sub-ids of search, for powering the browse view
    'search-projects': ['project', 'tag'],
    'search-tasks': ['task', 'tag'],
    'search-profiles': ['user', 'tag']
  }
};
