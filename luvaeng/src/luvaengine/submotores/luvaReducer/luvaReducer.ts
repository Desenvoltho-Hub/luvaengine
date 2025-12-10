export const luvaReducer = <T>(x: T, fn:(y: T, cb:(novoValor: T) => void) => void) => {
    let valor: T = x
    const get  = () => {
      return valor
    }
    const set  = (novoValor: T) => {
      valor = novoValor
      
    }
    fn(valor ,set)
    console.log(get())
}