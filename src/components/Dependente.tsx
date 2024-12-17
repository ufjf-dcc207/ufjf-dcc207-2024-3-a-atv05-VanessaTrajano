import './Dependente.css'

type DependenteProps = {
    nome: string, 
    data: string,
}

function Dependente({nome, data}: DependenteProps) {
  return (
    <>
      <p>Nome: {nome}</p>
      <p>Data de Nascimento: {data}</p>
    </>
  )
}

export default Dependente
