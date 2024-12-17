type FuncionarioProps = {
  nome: string;
  setor: string;
  data: string;
  salarioBase: number;
  dependentes: {
    nome: string;
    data_nascimento: string;
    abono_salarial: number;
  }[];
};

type PropsCalculoSalario = {
  salarioBase: number;
  dependentes: {
    nome: string;
    data_nascimento: string;
    abono_salarial: number;
  }[];
};

type DependenteProps = {
  nome: string;
  data: string;
};

export type { FuncionarioProps, PropsCalculoSalario, DependenteProps };
