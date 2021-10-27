export default async function post(endpoint: string, body: string) {
  const res = await fetch(endpoint, {
    method: "post",
    body,
  })
  const json = await res.json()
  if (res.ok) {
    return json
  } else {
    const err = String(json.error)
    throw new Error(err)
  }
}