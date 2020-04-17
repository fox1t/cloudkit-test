export default {
  locale: 'en-us',
  containers: [
    {
      containerIdentifier: 'iCloud.com.lockwiser.LockWiser',
      apiTokenAuth: {
        apiToken: '35367481ed03fee8c1f21923bc477cac1b919c31c461202ecdd4aa4c0fec392c',
        persist: true,
        signInButton: {
          id: 'apple-sign-in-button',
          theme: 'black',
        },
        signOutButton: {
          id: 'apple-sign-out-button',
          theme: 'black',
        },
      },
      environment: 'development',
    },
  ],
}
