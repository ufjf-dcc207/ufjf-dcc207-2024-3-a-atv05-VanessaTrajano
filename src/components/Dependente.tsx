import './Dependente.css'
import { DependenteProps } from '../types'
import transformaFormatoData from '../transformaFormatoData'

function Dependente({nome, data}: DependenteProps) {
  return (
    <div className='dependente-container'>
      <h4>Nome: {nome}</h4> 
      <p>Data de Nascimento: <br /> {transformaFormatoData(data)}</p>
    </div>
  )
}

export default Dependente
