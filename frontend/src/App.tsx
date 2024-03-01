import { useEffect, useRef, useState } from "react"

const App = () => {
  const apiUrl = useRef('http://localhost:3000/');
  const [ recvResp, setRecvResp ] = useState([]);

  const getDati = async () => {
    setRecvResp(await fetch(apiUrl.current).then(res => res.json()))
  }

  useEffect(() => {
    getDati();
  }, [])

  return (
    <table>
      <th>Nome</th>
      <th>Età</th>
      {recvResp.map((value) => {
        return (
          <tr>
            <td>{value.nome}</td>
            <td>{value.eta}</td>
          </tr>
        )
      })}
    </table>
  )
}

export default App;