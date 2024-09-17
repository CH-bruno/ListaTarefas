// Cria uma classe personalizada de exceção para lidar com erros da API
export class ApiException extends Error {
  // Atributo que armazena a mensagem de erro
  public readonly message: string = '';

  // Construtor que recebe a mensagem de erro e inicializa a classe
  constructor(message: string) {
    // Chama o construtor da classe pai (Error) para inicializar o comportamento padrão de erro
    super();

    // Define a mensagem de erro que será acessível para a instância da exceção
    this.message = message;
  }
}
