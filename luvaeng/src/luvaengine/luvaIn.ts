//=========================================================
//! LUVA ENGINE ⚙️ INPUT
//=========================================================
export const luvaEng = <T>(input: T) => {
  //! Listeners
  const listeners:((v: T) => void)[] = []
  
  //=======================================================
  //! Getters e setters
  //=======================================================
  let valor: T
  const get = () => {
    return valor
  }
  const set = (novoValor: T) => {
    valor = novoValor
    listeners.forEach(v => v(valor))
  }
  //! Subscribes
  const subscribes = (f:(v: T) => void) => {
    listeners.push(f)
    return () => {
      const index = listeners.indexOf(f)
      listeners.splice(index, 1)
    }
  }
  //! Submotores
  
  //! Output
  

   const luvaChangeOut = (cb: (v: T) => void) => {
  subscribes((v) => {
    if (v instanceof HTMLInputElement) cb(v)
  });
}
  
  return {
    get,
    set,
    luvaChangeOut
    

  }
}

