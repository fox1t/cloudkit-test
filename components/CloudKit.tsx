import { useState, useEffect, useRef } from 'react'

import cloudKit from '../lib/cloudkit'
import { useInput } from '../hooks/use-input'

function SignUp(props: { user: any; loading: boolean; files: any[]; setLoading: any }) {
  const fileInputRef = useRef<any>()
  const { setLoading } = props
  const { value: file, onChange: onFileChange, reset: resetFile } = useInput('')

  async function uploadFile(e) {
    setLoading(true)
    e.preventDefault()
    try {
      await cloudKit.saveFile({ file })
      resetFile()

      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  async function removeFile(e) {
    setLoading(true)
    e.preventDefault()
    try {
      await cloudKit.deleteFile(e.target.dataset.recordname)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  return (
    <>
      <main>
        <div className="grid">
          <div className="card">
            <div id="apple-sign-in-button"></div>
            <div id="apple-sign-out-button"></div>
          </div>
          {props.loading ? <div className="card">loading...</div> : ''}
          {props.user && !props.loading ? (
            <>
              <div className="card">
                {props.user.nameComponents.givenName} {props.user.nameComponents.familyName}
              </div>
              {Array.isArray(props.files) ? (
                <ul>
                  <div>
                    {props.files.map((file, index) => (
                      <li key={index}>
                        {file.recordName}
                        {file.fields.file && file.fields.type?.value?.startsWith('image') ? (
                          <img width="100px" src={file.fields.file.value.downloadURL} />
                        ) : (
                          ''
                        )}
                        <button onClick={removeFile} data-recordname={file.recordName}>
                          Delete file
                        </button>
                      </li>
                    ))}
                  </div>
                </ul>
              ) : (
                ''
              )}
            </>
          ) : (
            ''
          )}
          <form onSubmit={uploadFile}>
            <label>
              File:
              <input type="file" name="file" onChange={onFileChange} ref={fileInputRef} />
            </label>
            {!props.loading ? <input type="submit" value="Upload" /> : ''}
          </form>
        </div>
      </main>
    </>
  )
}

function CloudKitFinder() {
  const { user, loading: userLoading, error: loginError } = cloudKit.useLogin()
  const [files, setFiles] = useState([])
  const [loading, setLoading] = useState(false)
  const [notification, notificationError] = cloudKit.useSubscription()

  useEffect(() => {
    if (user) {
      setLoading(true)
      cloudKit
        .fetchAllFiles()
        .then(newFiles => {
          if (newFiles.length === files.length && notification) {
            setTimeout(() => {
              cloudKit
                .fetchAllFiles()
                .then(evenNewerFiles => {
                  setFiles(evenNewerFiles)
                  setLoading(false)
                })
                .catch(err => {
                  console.log(err)
                  setLoading(false)
                })
            }, 5000)
          } else {
            setFiles(newFiles)
            setLoading(false)
          }
        })
        .catch(err => {
          console.log(err)
          setLoading(false)
        })
    }
  }, [user, notification])

  useEffect(() => {
    setLoading(userLoading)
  }, [userLoading])

  return <SignUp user={user} loading={loading} files={files} setLoading={setLoading}></SignUp>
}

export default CloudKitFinder
