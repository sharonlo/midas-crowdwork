/**
 * This is a configuration file that defines the login
 * options available in the login backbone app
 */
define({
  // The OAuth providers enabled for this application
  oauth: [
    // No OAuth providers for CrowdWork
  ],
  // should local username/password logins be allowed?
  // set to true to allow username/password
  local: {
    // is login enabled by local username/password?
    enabled: true,
    // should the username/password fields be expanded/visible by default?
    expand: true,
    // should the user be able to logout (for auto-login systems)
    logout: false
  }
});
