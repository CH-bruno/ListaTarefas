import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom";

// Importa o componente Dashboard e o componente Login
import { Dashboard } from "../pages";
import Login from '../pages/login/Login';

// Define o componente de rotas da aplicação
export const Routes = () => {
  return (
    // O BrowserRouter envolve toda a aplicação e habilita o roteamento com base na URL do navegador
    <BrowserRouter>
      {/* Switch (renomeado como Routes) contém as definições de rotas */}
      <Switch>
        {/* Define a rota inicial como a página de login */}
        <Route path="/login" element={<Login />} />

        {/* Define uma rota para "/pagina-inicial", que renderiza o componente Dashboard */}
        <Route path="/tarefas" element={<Dashboard />} />
        
        {/* Redireciona a rota padrão para a página de login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Switch>
    </BrowserRouter>
  );
};
