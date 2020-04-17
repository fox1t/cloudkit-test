import { useState, useEffect } from 'react'

export default container =>
  function useLogin(
    deps: any[] = [],
  ): { user: any | undefined; loading: boolean; error: Error | undefined } {
    const [user, setUser] = useState<undefined | any>(undefined)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<undefined | Error>(undefined)

    async function signUpAuth() {
      function gotoAuthenticatedState(userIdentity) {
        setUser(userIdentity)
        setError(undefined)
        setLoading(false)

        container.whenUserSignsOut().then(gotoUnauthenticatedState).catch(gotoUnauthenticatedState)
      }

      function gotoUnauthenticatedState(error?) {
        console.log('gotoUnauthenticatedState')
        if (error && error.ckErrorCode === 'AUTH_PERSIST_ERROR') {
          setError(error)
        }
        setUser(undefined)
        setLoading(false)
        container.whenUserSignsIn().then(gotoAuthenticatedState).catch(gotoUnauthenticatedState)
      }

      container
        .setUpAuth()
        .then(userIdentity => {
          if (userIdentity) {
            setUser(userIdentity)
            setError(undefined)
            setLoading(false)
          } else {
            gotoUnauthenticatedState()
          }
        })
        .catch(gotoUnauthenticatedState)
    }

    useEffect(() => {
      signUpAuth()
    }, deps)

    return { user, loading, error }
  }
