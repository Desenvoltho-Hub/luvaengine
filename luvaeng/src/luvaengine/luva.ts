import { luvaRouter } from "./submotores/router";
//=========================================================
//! LUVA ENGINE ⚙️
//=========================================================

export const luvaEng = <T>(input: T, inputDois: T) => {
  //=======================================================
  //! Listeners
  //=======================================================
  const listeners: ((v: T) => void)[] = [];
  //=======================================================
  //! Getters e setters
  //=======================================================
  let valor: T = input;
  const get = () => {
    return valor;
  };
  const set = (novoValor: T) => {
    valor = novoValor;
    listeners.forEach((v) => v(valor));
  };
  let valorDois: T = inputDois;
  const getInputDois = () => {
    return valorDois;
  };
  //=======================================================
  //! Subscribes
  //=======================================================
  const subscribes = (f: (v: T) => void) => {
    listeners.push(f);
    return () => {
      const index = listeners.indexOf(f);
      listeners.splice(index, 1);
    };
  };
  //=======================================================
  //! Switch
  //=======================================================
  switch (true) {
    case valor === "luvaRouter" && valorDois:
      luvaRouter(valorDois)
      break
      default:
      break
  }
  //=======================================================
  //! Output
  //=======================================================
  const luvaChangeOut = (cb: (v: T) => void) => {
    subscribes((v) => {
      if (v instanceof HTMLInputElement) cb(v);
    });
  };

  return {
    get,
    set,
    luvaChangeOut,
  };
};
