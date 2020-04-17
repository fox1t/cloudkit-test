interface Record<T = any> {
  recordType: string
  fields: T
  recordChangeTag?: string
  recordName?: string
}

export default privateDB =>
  async function saveFile(
    {
      recordName,
      recordChangeTag,
      file,
    }: { recordName?: string; recordChangeTag?: string; file: File },
    options?: any,
  ) {
    if (!file) {
      throw new Error('You must provide an file to save.')
    }
    const record: Record = {
      recordType: 'file',
      // To modify an existing record, supply a recordChangeTag.
      ...(recordChangeTag ? { recordChangeTag } : undefined),
      // If no recordName is supplied the server will generate one.
      ...(recordName ? { recordName } : undefined),
      fields: {
        originalName: {
          value: file.name,
        },
        size: {
          value: file.size,
        },
        type: {
          value: file.type,
        },
        file: {
          value: file,
        },
      },
    }

    const response = await privateDB.saveRecords([record], options)

    if (response.hasErrors) {
      throw response.errors[0]
    } else {
      const createdRecord = response.records[0]
      return createdRecord
    }
  }
