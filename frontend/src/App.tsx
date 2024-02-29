import { useEffect, useState } from "react"

const App = () => {
  const [recvResp, setRecvResp] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:3000/').then((res) => res.json()).then((res) => console.log(res))
  }, [])

  return <p>{recvResp}</p>
}

export default App;