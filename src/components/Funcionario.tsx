import Dependente from "./Dependente";
import "./Funcionario.css";
import { FuncionarioProps, PropsCalculoSalario } from "../types";
import transformaFormatoData from "../transformaFormatoData";

function Funcionario({
  nome,
  setor,
  data,
  salarioBase,
  dependentes,
}: FuncionarioProps) {
  const calculaSalario = ({
    salarioBase,
    dependentes,
  }: PropsCalculoSalario) => {
    let salarioTotal = salarioBase;
    for (let i = 0; i < dependentes.length; i++) {
      salarioTotal += dependentes[i].abono_salarial;
    }
    return salarioTotal;
  };

  return (
    <div className="funcionario-container">
      <h2>Nome: {nome}</h2>
      <p>Setor: {setor}</p>
      <p>Data de Adimissão: {transformaFormatoData(data)}</p>
      <p>Salário: R$ {calculaSalario({ salarioBase, dependentes })},00</p>
      {dependentes.length > 0 ? (
        <>
          <h3>Dependentes: </h3>
          <div className="dependentes-container">
            {dependentes.map((dependente) => (
              <Dependente
                nome={dependente.nome}
                data={dependente.data_nascimento}
              />
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Funcionario;
