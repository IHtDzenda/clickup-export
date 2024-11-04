
export async function req(url: string): Promise<any> {
  const responce = await fetch(url, {headers:{
    "Method": "GET",
    "Accept": "application/json",
    "AcceptEncoding": "gzip, deflate",
    "Authorization": process.env.API_KEY,
  }})
  return await responce.json()
}
