
// TOKEN

export const getToken = () => {
  return localStorage.getItem("token")
}

export const setToken = (token) => {
  localStorage.setItem("token", token)
}

export const deleteToken = () => {
  localStorage.removeItem("token")
}



// ITEMS

export const getItem = (key) => {
  const item = localStorage.getItem(key)

  return item ? JSON.parse(item) : null
}

export const setItem = (key, value) => {
  localStorage.setItem(
    key,
    JSON.stringify(value)
  )
}
export const removeItem = (key) => {
  localStorage.removeItem(key)
}


// CLEAR

export const clearLocal = () => {
  localStorage.clear()
}