import { createContext, useCallback, useEffect, useState, ReactNode } from "react";

// Interface que define a estrutura do contexto
interface IUsuarioLogadoContextData {
  nomeDoUsuario: string;
  logout: () => void;
}

// Criação do contexto com um valor inicial vazio
export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

// Interface para as props do provider
interface IUsuarioLogadoProviderProps {
  children: ReactNode;
}

// Componente Provider para fornecer o contexto
export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({ children }) => {
  const [nome, setNome] = useState<string>('');

  useEffect(() => {
    // Simulação de uma chamada assíncrona para obter o nome do usuário
    const timer = setTimeout(() => {
      setNome('Lucas');
    }, 1000);

    // Cleanup function para limpar o timeout se o componente for desmontado
    return () => clearTimeout(timer);
  }, []); // Dependência vazia para executar apenas uma vez após o primeiro render

  const handleLogout = useCallback(() => {
    console.log('Logout executou');
    // Adicione a lógica de logout aqui, como redirecionar para a página de login
  }, []);

  return (
    <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: nome, logout: handleLogout }}>
      {children}
    </UsuarioLogadoContext.Provider>
  );
}
