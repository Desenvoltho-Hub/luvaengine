//=========================================================
//! LUVA ENGINE ⚙️  OUTPUTS
//=========================================================

export const luvaChangeOut = <T>(input: T) => {
  //===========================
  //! Listeners
  
  const listernerSaida: ((v: T) => void)[] = []
  //===========================
  //! Getters e setters
  let valor: T = input
  const get = () => {
    return valor
  }
  const set = (novoValor: T) => {
    valor = novoValor
    listernerSaida.forEach(v => v(valor))
  }
  //===========================
  //! Subscribes
  const subscribeUm = (f:(v: T) => void) => {
    listernerSaida.push(f)
    return () => {
        const index = listernerSaida.indexOf(f)
        if(index > -1) listernerSaida.splice(index, 1)
    }
  }
  return {
    get,
    set,
    subscribeUm
  }
};
//===============================================
//! Saídas
export const luvaChange = <T>(output: ReturnType<typeof luvaChangeOut>, callback: (v: T) => void) => {
    output.subscribeUm(callback)
}