import { useContext } from "react";
import { UsuarioLogadoContext } from "../contexts";

// Hook personalizado para acessar o contexto do usuário logado
export const useUsuarioLogado = () => {
  const context = useContext(UsuarioLogadoContext);

  // Verificação para garantir que o contexto não seja undefined
  if (context === undefined) {
    throw new Error("useUsuarioLogado must be used within a UsuarioLogadoProvider");
  }

  return context;
};
