import { useCallback, useEffect, useState } from 'react'; 
// Importa hooks do React (useCallback, useEffect, useState) para lidar com estado e efeitos colaterais.

import { Checkbox, IconButton, Input, List, ListItem, ListItemText, Typography, Paper, Box } from '@mui/material'; 
// Importa componentes do Material UI para criar uma interface visual mais amigável.

import DeleteIcon from '@mui/icons-material/Delete'; 
// Importa o ícone de deletar da biblioteca de ícones do Material UI.

import { ITarefa, TarefasService } from '../../shared/services/api/tarefas/TarefasService'; 
// Importa a interface ITarefa e o serviço TarefasService para interagir com a API de tarefas.

import { ApiException } from '../../shared/services/api/ApiException'; 
// Importa a classe ApiException para lidar com erros de API.

export const Dashboard = () => {
  // Declara o componente funcional Dashboard.

  const [lista, setLista] = useState<ITarefa[]>([]); 
  // Define o estado 'lista' que armazena a lista de tarefas.

  useEffect(() => {
    // useEffect é chamado ao montar o componente para buscar a lista de tarefas da API.

    TarefasService.getAll()
      .then((result) => {
        if (result instanceof ApiException) {
          // Se ocorrer um erro na API, uma mensagem de alerta será exibida.
          alert(result.message);
        } else {
          // Caso contrário, o estado 'lista' é atualizado com o resultado obtido da API.
          setLista(result);
        }
      });
  }, []); 
  // O array vazio indica que o efeito só será executado uma vez, ao montar o componente.

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
    // Função chamada quando o usuário pressiona uma tecla dentro do campo de input.

    if (e.key === 'Enter') {
      // Verifica se a tecla pressionada foi "Enter".

      if (e.currentTarget.value.trim().length === 0) return;
      // Se o valor inserido for vazio ou composto apenas por espaços, não faz nada.

      const value = e.currentTarget.value; 
      // Armazena o valor digitado no input.

      e.currentTarget.value = ''; 
      // Limpa o campo de input.

      if (lista.some((listItem) => listItem.title === value)) return;
      // Se a tarefa já existir na lista, não faz nada.

      TarefasService.create({ title: value, isCompleted: false })
        .then((result) => {
          if (result instanceof ApiException) {
            // Lida com erro de criação da tarefa.
            alert(result.message);
          } else {
            // Adiciona a nova tarefa à lista atualizada.
            setLista((oldLista) => [...oldLista, result]);
          }
        });
    }
  }, [lista]); 
  // O hook useCallback é usado para otimizar a função e garantir que ela seja criada apenas quando 'lista' mudar.

  const handleToggleComplete = useCallback((id: number) => {
    // Função chamada quando o usuário marca/desmarca a tarefa como concluída.

    const tarefaToUpdate = lista.find((tarefa) => tarefa.id === id);
    // Procura a tarefa com o id especificado na lista.

    if (!tarefaToUpdate) return; 
    // Se a tarefa não for encontrada, retorna sem fazer nada.

    TarefasService.updateById(id, {
      ...tarefaToUpdate,
      isCompleted: !tarefaToUpdate.isCompleted,
    })
      .then((result) => {
        if (result instanceof ApiException) {
          alert(result.message);
        } else {
          setLista(oldLista => {
            // Atualiza a tarefa modificada na lista.
            return oldLista.map(oldListItem => {
              if (oldListItem.id === id) return result;
              return oldListItem;
            });
          });
        }
      });
  }, [lista]); 
  // Atualiza a função sempre que 'lista' mudar.

  const handleDelete = useCallback((id: number) => {
    // Função chamada quando o usuário clica no ícone de deletar.

    TarefasService.deleteById(id)
      .then((result) => {
        if (result instanceof ApiException) {
          alert(result.message);
        } else {
          setLista(oldLista => {
            // Remove a tarefa da lista ao confirmar a exclusão.
            return oldLista.filter(oldListItem => oldListItem.id !== id);
          });
        }
      });
  }, []); 
  // O hook useCallback garante que a função seja criada uma única vez.

  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        padding: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Define o layout geral da página com fundo claro e centraliza os elementos. */}
      
      <Paper elevation={3} sx={{ width: '100%', maxWidth: '600px', padding: 3, backgroundColor: '#ffffff' }}>
        {/* Papel contendo a lista de tarefas com uma sombra leve (elevation=3). */}

        <Typography variant="h6" align="center" gutterBottom sx={{ color: '#1976d2' }}>
          Lista de Tarefas
        </Typography>
        {/* Título centralizado da página */}

        <Input
          fullWidth
          placeholder="Adicionar nova tarefa"
          onKeyDown={handleInputKeyDown}
          sx={{
            marginBottom: 2,
            backgroundColor: '#e0f7fa',
            padding: 1,
            borderRadius: '4px',
          }}
        />
        {/* Campo de input para adicionar nova tarefa, acionado ao pressionar "Enter". */}

        <Typography variant="body2" align="center" gutterBottom>
          Completadas: {lista.filter((listItem) => listItem.isCompleted).length}
        </Typography>
        {/* Exibe a quantidade de tarefas completadas. */}

        <List sx={{ backgroundColor: '#fafafa', borderRadius: '8px' }}>
          {lista.map((listItem) => (
            <ListItem
              key={listItem.id}
              divider
              secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(listItem.id)}>
                  <DeleteIcon sx={{ color: '#d32f2f' }} />
                </IconButton>
              }
              sx={{
                backgroundColor: listItem.isCompleted ? '#dcedc8' : '#fff9c4',
                marginBottom: 1,
                borderRadius: '4px',
              }}
            >
              <Checkbox
                checked={listItem.isCompleted}
                onChange={() => handleToggleComplete(listItem.id)}
                sx={{
                  color: listItem.isCompleted ? '#4caf50' : '#ffeb3b',
                }}
              />
              <ListItemText 
                primary={listItem.title} 
                secondary={listItem.isCompleted ? 'Completada' : 'Pendente'} 
              />
              {/* Cada tarefa com checkbox e texto que muda conforme o status (completada ou pendente). */}
            </ListItem>
          ))}
        </List>
        {/* Lista de tarefas, destacando cada item como completado ou pendente. */}
      </Paper>
    </Box>
  );
};
