export default async function post(endpoint: string, body: string) {
  const res = await fetch(endpoint, {
    method: "post",
    body,
  })
  const json = await res.json()
  if (res.ok) {
    return json
  } else {
    throw Exception(json.message, json.log)
  }
}

function Exception(message: string, log: string) {
  return {
    message, log
  }
}