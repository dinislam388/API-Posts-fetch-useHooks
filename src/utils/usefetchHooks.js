import { useEffect, useState } from "react"

export default function usefetchHooks(fetchUrl) {
    const [postsFetchData, setPostsFetchData] = useState([])
  const url = fetchUrl
  // console.log(fetchUrl);
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setPostsFetchData(data))
  }, [])
  return postsFetchData 
}