import React from 'react';

// Interface para as propriedades do InputLogin
interface IInputLoginProps {
  // Tipo do input (por exemplo, "text", "password", etc.)
  type?: string;
  // Rótulo a ser exibido para o campo de entrada
  label: string;
  // Valor atual do campo de entrada
  value: string;
  // Função a ser chamada quando a tecla Enter é pressionada
  onPressEnter?: () => void;
  // Função a ser chamada quando o valor do campo é alterado
  onChange: (newValue: string) => void;
}

// Componente InputLogin
export const InputLogin = React.forwardRef<HTMLInputElement, IInputLoginProps>((props, ref) => {
  return (
    <label>
      <span>{props.label}</span>
      <input
        ref={ref}
        type={props.type}
        value={props.value}
        onChange={e => props.onChange(e.target.value)}
        onKeyDown={e => e.key === 'Enter'
          ? props.onPressEnter && props.onPressEnter()
          : undefined
        }
      />
    </label>
  );
});
