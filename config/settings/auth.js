 module.exports = {
  // AUTHENTICATION SETTINGS
  // Set your client ids private keys for each of your services
  auth: {
    linkedin : {
      clientId    : process.env.LINKEDIN_CLIENT_ID  || 'CLIENT_ID',
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET || 'CLIENT_SECRET',
      callbackUrl : process.env.LINKEDIN_CALLBACK_URL || 'http://localhost/api/auth/linkedin/callback'
    },
    myusa : {
      clientId    : process.env.MYUSA_CLIENT_ID  || 'CLIENT_ID',
      clientSecret: process.env.MYUSA_CLIENT_SECRET || 'CLIENT_SECRET',
      callbackUrl : process.env.MYUSA_CALLBACK_URL || 'http://localhost/api/auth/myusa/callback'
    }
  }
};
