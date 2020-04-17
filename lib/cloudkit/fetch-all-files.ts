export default privateDB =>
  async function fetchAllFiles() {
    const response = await privateDB.performQuery({ recordType: 'file' })
    if (response.hasErrors) {
      throw response.errors[0]
    } else {
      return response.records
    }
  }
