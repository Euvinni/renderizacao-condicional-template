import { Div, Titulo } from "./styled";

function TelaPrincipal({mudarTela}) {
  const deslogar = () => {
    // validação de logout ainda será visto mais pra frente no curso
    mudarTela("login")
  }

  return (
      <Div>
          <Titulo>Tela Principal</Titulo>
          <p>Boas-vindas à aplicação!</p>
          <button onClick={deslogar}>Deslogar</button>
      </Div>
  )
}

export default TelaPrincipal;