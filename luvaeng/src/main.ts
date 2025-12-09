import { luvaEng } from "./luvaengine/luvaIn";

const input = document.getElementById('input')
input?.addEventListener('input', () => {
  luva.set(input)
})
const luva = luvaEng('')
let minhaVariavel
luva.luvaChangeOut((e) => {
  minhaVariavel = e.value
  console.log(minhaVariavel)
})