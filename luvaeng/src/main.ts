import { luvaInChange } from "./luvaengine/luvaIn";

const inputDOM = document.getElementById('input') as HTMLInputElement;
const msgDOM   = document.getElementById('mensagem') as HTMLDivElement;

// input dispara motor, tudo atualiza sozinho
inputDOM.addEventListener('input', e => 
  luvaInChangee((e.target as HTMLInputElement).value, v => msgDOM.textContent = v)
);
