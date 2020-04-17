import useLogin from './hooks/use-login'
import useSubscription from './hooks/use-subscription'
import config from './config'
import fetchAllFiles from './fetch-all-files'
import saveFile from './save-file'
import deleteFile from './delete-file'

function configure(config) {
  if (!window.CloudKit) {
    throw new Error('Missing CloudKit official SDK.')
  }

  const cloudKit = window.CloudKit.configure(config)
  const container = cloudKit.getDefaultContainer()
  const privateDB = container.privateCloudDatabase

  return {
    container,
    privateDB,
    useLogin: useLogin(container),
    useSubscription: useSubscription(container),
    fetchAllFiles: fetchAllFiles(privateDB),
    saveFile: saveFile(privateDB),
    deleteFile: deleteFile(privateDB),
  }
}

const cloudKit = configure(config)

export default cloudKit
