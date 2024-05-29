

const apiClient = (...params) => {
  const Base_Url='https://api.rawg.io/api'
  const Api_Key='c542e67aec3a4340908f9de9e86038af'
  const Final_Url=Base_Url+params+'?key='+Api_Key
  return Final_Url
}

export default apiClient
