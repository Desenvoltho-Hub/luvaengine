
import { luvaChangeOut } from "./luvaOut";
//=========================================================
//! LUVA ENGINE ⚙️  INPUTS
//=========================================================

export const luvaInChange = <T>(um: T) => {
  //! Listeners
  const listernerUm: ((v: T) => void)[] = [];
  //=================================
  //! Getters e Setters
  let inputUm = um;
  const get = () => {
    return inputUm;
  };
  const set = (novoValorInputUm: T) => {
    inputUm = novoValorInputUm;
    listernerUm.forEach((v) => v(inputUm));
  };
  //==================================
  //! Subscribes
  const subscribeUm = (f: (v: T) => void) => {
    listernerUm.push(f);
    return () => {
      const index = listernerUm.indexOf(f);
      if (index > -1) listernerUm.splice(index, 1);
    };
  };
  subscribeUm(v => luvaChangeOut(v));
  
  return {
    get,
    set,
    subscribeUm,
  };
};
