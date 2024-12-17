import "./Funcionario.css";

type FuncionarioProps = {
  nome: string;
  setor: string;
  data: string;
  salarioBase: number;
  dependentes: {
    nome: string,
    data_nascimento: string,
    abono_salarial: number,
  }[],
};

function Funcionario({
  nome,
  setor,
  data,
  salarioBase,
  dependentes,
}: FuncionarioProps) {
  return (
    <>
      <h2>Nome: {nome}</h2>
      <p>Setor: {setor}</p>
      <p>Data de Adimissão: {data}</p>
      <p>Salário: {salarioBase}</p>
      <h3>Dependentes: </h3>
      <div>{}</div>
    </>
  );
}

export default Funcionario;
