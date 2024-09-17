import React from 'react';

// Interface para as propriedades do botão de login
interface IButtonLoginProps {
  // Função a ser chamada quando o botão é clicado
  onClick: () => void;
  // Tipo do botão: "button", "submit" ou "reset"
  type?: "button" | "submit" | "reset";
  // Conteúdo que será exibido dentro do botão
  children: React.ReactNode;
}

// Componente ButtonLogin
export const ButtonLogin: React.FC<IButtonLoginProps> = ({ type = "button", onClick, children }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
 

  );
};
