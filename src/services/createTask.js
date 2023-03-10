export const createTask = async (userActive, content, status) => {
  const url =
    import.meta.env.VITE_URL_APIKEY === undefined
      ? process.env.VITE_URL_APIKEY
      : import.meta.env.VITE_URL_APIKEY
  const response = await fetch(`${url}/api/v1/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user_id: userActive._id,
      content: content,
      status: status
    })
  })
  const data = await response.json()
  return data
}
