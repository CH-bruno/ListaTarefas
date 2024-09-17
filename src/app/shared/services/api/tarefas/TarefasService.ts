import { ApiException } from "../ApiException"; // Importa a classe ApiException para tratamento de erros personalizados
import { Api } from "../ApiConfig"; // Importa a função Api para configurar as requisições à API

// Define a interface ITarefa para o formato dos objetos de tarefa
export interface ITarefa {
  id: number; // Identificador único da tarefa
  title: string; // Título da tarefa
  isCompleted: boolean; // Status de conclusão da tarefa
}

// Função para obter todas as tarefas
const getAll = async (): Promise<ITarefa[] | ApiException> => {
  try {
    const { data } = await Api().get('/tarefas'); // Faz uma requisição GET para obter todas as tarefas
    return data; // Retorna os dados das tarefas
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao buscar os registros.'); // Retorna um objeto ApiException em caso de erro
  }
};

// Função para obter uma tarefa específica pelo ID
const getById = async (id: number): Promise<ITarefa | ApiException> => {
  try {
    const { data } = await Api().get(`/tarefas/${id}`); // Faz uma requisição GET para obter a tarefa pelo ID
    return data; // Retorna os dados da tarefa
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao consultar o registro.'); // Retorna um objeto ApiException em caso de erro
  }
};

// Função para criar uma nova tarefa
const create = async (dataToCreate: Omit<ITarefa, 'id'>): Promise<ITarefa | ApiException> => {
  try {
    const { data } = await Api().post<any>('/tarefas', dataToCreate); // Faz uma requisição POST para criar uma nova tarefa
    return data; // Retorna os dados da nova tarefa criada
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao criar o registro.'); // Retorna um objeto ApiException em caso de erro
  }
};

// Função para atualizar uma tarefa existente pelo ID
const updateById = async (id: number, dataToUpdate: ITarefa): Promise<ITarefa | ApiException> => {
  try {
    const { data } = await Api().put(`/tarefas/${id}`, dataToUpdate); // Faz uma requisição PUT para atualizar a tarefa pelo ID
    return data; // Retorna os dados atualizados da tarefa
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao atualizar o registro.'); // Retorna um objeto ApiException em caso de erro
  }
};

// Função para deletar uma tarefa pelo ID
const deleteById = async (id: number): Promise<undefined | ApiException> => {
  try {
    await Api().delete(`/tarefas/${id}`); // Faz uma requisição DELETE para remover a tarefa pelo ID
    return undefined; // Retorna undefined indicando que a tarefa foi deletada com sucesso
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao apagar o registro.'); // Retorna um objeto ApiException em caso de erro
  }
};

// Exporta o objeto TarefasService contendo todas as funções de manipulação de tarefas
export const TarefasService = {
  getAll,
  create,
  getById,
  updateById,
  deleteById,
};
