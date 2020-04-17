import { useState, useEffect } from 'react'

const querySubscription = {
  subscriptionID: 'fetchUpdatesToFiles',
  subscriptionType: 'query',
  firesOn: ['create', 'update', 'delete'],
  query: {
    recordType: 'file',
  },
}

let registered = false

export default container =>
  function useSubscription(deps: any[] = []): [any | undefined, Error | undefined] {
    const [notification, setNotification] = useState(undefined)
    const [error, setError] = useState<undefined | Error>(undefined)

    async function saveFileSubscription() {
      container.privateCloudDatabase
        .saveSubscriptions(querySubscription)
        .then(response => {
          if (response.hasErrors) {
            setError(response.errors[0])
          } else {
            if (!registered) {
              container.registerForNotifications()
              container.addNotificationListener(function (notification) {
                setNotification(notification)
              })
              console.log('Registered for notifications')
              registered = true
            }
            return response
          }
        })
        .catch(err => {
          setError(err)
        })
    }

    useEffect(() => {
      saveFileSubscription()
    }, deps)

    return [notification, error]
  }
