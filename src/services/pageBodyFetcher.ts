import axios from 'axios'

export const fetch = async (url: string): Promise<string> => {
  const response = await axios.get(url, {
    responseType: 'text',
    validateStatus: null,
  })
  return response.data
}
