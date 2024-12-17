import './Dependente.css'

type DependenteProps = {
    nome: string, 
    data: string,
}

function Dependente({nome, data}: DependenteProps) {
  return (
    <>
      <h4>Nome: {nome}</h4>
      <p>Data de Nascimento: {data}</p>
    </>
  )
}

export default Dependente
