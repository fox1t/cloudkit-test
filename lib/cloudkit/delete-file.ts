export default privateDB =>
  async function deleteFile(recordName: string, options?: any) {
    if (!recordName) {
      throw new Error('You must provide recordName to delete.')
    }

    const response = await privateDB.deleteRecords([recordName], options)

    if (response.hasErrors) {
      throw response.errors[0]
    } else {
      const deletedRecord = response.records[0]

      return deletedRecord
    }
  }
