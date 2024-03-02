import { useEffect, useRef, useState } from "react"

const App = () => {
  const apiUrl = useRef('http://localhost:3000/');
  const [ recvResp, setRecvResp ] = useState([]);

  // fetch dei dati della tabella presenti nel database
  useEffect(() => {
    fetch(apiUrl.current)
    .then(res => res.json())
    .then((responseJSON) => setRecvResp(responseJSON))
  }, [])

  return (
    <table>
      <th>Nome</th>
      <th>Età</th>
      {recvResp.map((value) => {
        return (
          <tr>
            <td>{value.nome}</td> {/* i td devono avere una key univoca, da correggere */}
            <td>{value.eta}</td>
          </tr>
        )
      })}
    </table>
  )
}

export default App;