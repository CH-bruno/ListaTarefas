import axios from "axios";

// Cria uma instância da API configurada com a base URL
export const Api = () => {
  // Retorna uma instância do Axios com uma configuração pré-definida
  return axios.create({
    // Define a URL base para todas as requisições feitas usando essa instância
    baseURL: 'http://localhost:3333'
  });
};
