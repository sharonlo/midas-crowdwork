module.exports = {
  url: 'http://localhost:1337/api',
  users: {
    'mattchessen': {
      name: 'Matt Chessen',
      username: 'mattchessen-demo',
      password: 'matt',
      title: 'Consular Chief',
      agency: 'Embassy Troublestan Consular Section',
      location: 'Troublestan City',
      photo: 'assets/users/mattchessen.jpg'
    },
    'mc': {
      name: 'Matt B FSO',
      username: 'mc-demo',
      password: 'mc',
      title: 'Foreign Service Officer',
      agency: 'Embassy Troublestan Consular Section',
      location: 'Troublestan City',
      photo: 'assets/users/mc.jpg'
    },
    'acheson': {
      name: 'Dean Acheson',
      username: 'acheson-demo',
      password: 'acheson',
      title: 'Political Section Chief',
      agency: 'Embassy Troublestan Political Section',
      location: 'Troublestan City',
      photo: 'assets/users/acheson.jpg'
    },
    'ambassador': {
      name: 'Mrs. Ambassador',
      username: 'ambassador-demo',
      password: 'ambassador',
      title: 'US Ambassador to Troublestan',
      agency: 'Embassy Troublestan Political Section',
      location: 'Troublestan City',
      photo: 'assets/users/ambassador.jpg'
    },
    'assistantsecretary': {
      name: 'Mr Assistant Secretary',
      username: 'assistantsecretary-demo',
      password: 'assistantsecretary',
      title: 'Assistant Secretary',
      agency: 'Embassy Troublestan Political Section',
      location: 'Washington',
      photo: 'assets/users/assistantsecretary.jpg'
    },
    'deskofficer': {
      name: 'Mr. Desk Officer',
      username: 'deskofficer-demo',
      password: 'deskofficer',
      title: 'Foreign Affairs Officer',
      agency: 'Troublestan Desk',
      location: 'Washington',
      photo: 'assets/users/deskofficer.jpg'
    }
  },
  tags: {
    'Political Reporting': {
      type: 'skill',
      name: 'Political Reporting'
    },
    'Consular Interviewing': {
      type: 'skill',
      name: 'Consular Interviewing'
    },
    'Polling': {
      type: 'skill',
      name: 'Polling'
    },
    'Elections': {
      type: 'topic',
      name: 'Elections'
    },
    'Troublestan Topic': {
      type: 'topic',
      name: 'Troublestan'
    },
    'Embassy Troublestan Consular Section': {
      type: 'agency',
      name: 'Embassy Troublestan Consular Section'
    },
    'Embassy Troublestan Political Section': {
      type: 'agency',
      name: 'Embassy Troublestan Political Section'
    },
    'Troublestan Desk': {
      type: 'agency',
      name: 'Troublestan Desk'
    },
    'Troublestan City': {
      type: 'location',
      name: 'Troublestan City'
    },
    'Troublestan': {
      type: 'location',
      name: 'Troublestan'
    },
    'Washington': {
      type: 'location',
      name: 'Washington, D.C'
    }
  },
  projects: [
    {
      state: 'public',
      title: 'Troublestan Election Reporting',
      description: 'The political section at Embassy Troublestan would like to know what people are saying about the upcoming election. The Consular Chief agreed that Consular staff should integrate these questions into Consular interviews.',
      cover: 'assets/projects/state.jpg',
      owner: 'mattchessen',
      owners: ['ambassador'],
      tags: ['Political Reporting', 'Consular Interviewing', 'Elections', 'Troublestan Topic', 'Embassy Troublestan Political Section', 'Embassy Troublestan Consular Section', 'Polling', 'Troublestan', 'Troublestan City', 'Troublestan Desk'],
      comments: [
        {
          topic: true,
          user: 'acheson',
          value: 'We\'d like to know what you\'ve been hearing about candidate Bob Roberts.',
          children: [
            {
              user: 'mc',
              value: 'Most applicants are very positive on Mr. Roberts. They cite his devotion and integrity as important. However, his association with the former president discredits him in the eyes of many.'
            },
            {
              user: 'mattchessen',
              value: 'I\'ve heard the same in many of my interviews. However, I also heard that if Roberts speaks out against the corruption of the former president, he could earn the trust of the nation.'
            },
            {
              user: 'mc',
              value: 'Every applicant I ask about Roberts this morning is beaming about his speech last night. They say he politely distanced himself from the policies of the ex-president.'
            }
          ]
        },
        {
          topic: true,
          user: 'acheson',
          value: 'We\'d like to know what you\'ve been hearing about the President.',
          children: [
            {
              user: 'mc',
              value: 'Several visa applicants speculated that the President\'s reputation for corruption and his penchant for wild trips to Dubai have fatally damaged his prospects.'
            },
            {
              user: 'deskofficer',
              value: 'Last night I was at a fundraiser here in DC for Troublestan orphans, and the ex-pat community is very positive on the President. Many commented they\'ve wired home funds for his campaign.'
            },
            {
              user: 'ambassador',
              value: 'Do you know if the guests were primarily from the Left tribe or the Right tribe?'
            },
            {
              user: 'deskofficer',
              value: 'Left tribe. The Right tribe expats here tend to be from the working class. They generally oppose the President, but since they don\'t have much money to send home they have difficulty influencing the election.'
            },
            {
              user: 'mattchessen',
              value: 'Same split here. Left tribe supports the President and Right tribe is falling in behind Roberts.'
            },
            {
              user: 'assistantsecretary',
              value: 'This is very useful information. Please keep up the good work!'
            }
          ]
        },
        {
          topic: true,
          user: 'ambassador',
          value: 'Could I please ask the team to think of creative ways of asking our local staff their opinions about the elections?',
          children: [
            {
              user: 'acheson',
              value: 'I think an email poll would be a good start. Could someone please create the opportunity?'
            },
            {
              user: 'mc',
              value: 'Happy to do it sir!.'
            },
            {
              user: 'deskofficer',
              value: 'I have some ideas. I\'ll comment on the opportunity after you create it.'
            },
            {
              user: 'mattchessen',
              value: 'Lets run this by PD since they have done considerable polling work.'
            }
          ]
        }
      ],
      events: [
        {
          title: 'Pre-election meeting',
          description: 'Meeting to discuss predicted election outcomes.',
          location: 'VTC between Desk and Political Section'
        },
        {
          title: 'Troublestan Elections',
          description: 'First round elections start June 5',
          location: 'Troublestan'
        }
      ],
      tasks: [
        {
          state: 'public',
          title: 'We need someone to turn this material into a cable',
          description: 'This should be collated into a 2 page cable. PolCouns will provide the analysis.'
        },
        {
          state: 'public',
          title: 'We\'d like someone to informally poll the LES staff and local guard force for their views',
          description: 'Outcome should be a short paper for the deputy pol chief to pass to the Ambassador.'
        }
      ]
    }
  ]
};
