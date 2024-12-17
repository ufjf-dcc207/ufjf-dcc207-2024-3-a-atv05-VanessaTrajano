import "./App.css";
import Funcionario from "./components/Funcionario";
import funcionarios from "./ufjf-dcc207-2024-3-a-atv05.json";

function App() {
  return (
    <>
      {funcionarios.funcionarios.map((funcionario) => (
        <Funcionario
          key={funcionario.nome_completo}
          nome={funcionario.nome_completo}
          setor={funcionario.setor}
          data={funcionario.data_admissao}
          salarioBase={funcionario.salario_base}
          dependentes={funcionario.dependentes}
        />
      ))}
    </>
  );
}

export default App;
