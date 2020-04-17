export default privateDB =>
  async function fetchZones() {
    const response = await privateDB.fetchAllRecordZones()
    if (response.hasErrors) {
      throw response.errors[0]
    } else {
      return response.zones
    }
  }
