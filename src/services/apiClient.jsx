import React from 'react'

const apiClient = (...params) => {
  const Base_Url='https://api.rawg.io/api'
  const Api_Key='8695233246164b91867ac35b8779a723'
  const Final_Url=Base_Url+params+'?'+'key='+Api_Key
  return Final_Url
}

export default apiClient
