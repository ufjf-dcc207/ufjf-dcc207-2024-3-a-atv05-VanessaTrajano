import "./Funcionario.css";

type FuncionarioProps = {
  nome: string;
  setor: string;
  data: string;
  salarioBase: number;
  dependentes: [];
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
      <div>{dependentes}</div>
    </>
  );
}

export default Funcionario;
