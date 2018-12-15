let headers = {
  'Content-Type' : 'application/json',
  'Authorization' : ''
}

export const setTokenHeader = (token) => {
  if (token) {
    headers.Authorization = `bearer ${token}`
  } else {
    headers.Authorization = ''
  }
}

export const apiCall = async (method, path, data) => {
  return fetch(path, {
    headers,
    method,
    body : JSON.stringify(data)
  })
    .then(res => {
      if (!res.ok) {
        if (res.status >=400 && res.status <500) {
            return res.json().then(data => {
              throw data.error
          })
        } else {
          const err = {message : 'Please try again'}
          throw err
        }
      }
      return res.json() 
    })
}