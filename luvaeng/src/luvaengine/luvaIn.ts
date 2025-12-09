import { luvaChangeOut } from "./luvaOut";

//=========================================================
//! LUVA ENGINE ⚙️ INPUT
//=========================================================
export const luvaInChange = <T>(inputInicial: T, output?: ReturnType<typeof luvaChangeOut>) => {
    const listenersInput: ((v: T) => void)[] = [];

    let input = inputInicial;

    const get = () => input;

    const set = (novoValor: T) => {
        input = novoValor;

      
        listenersInput.forEach(f => f(input));

        if (output) output.set(input);
    };

    const subscribe = (f: (v: T) => void) => {
        listenersInput.push(f);
        return () => {
            const index = listenersInput.indexOf(f);
            if (index > -1) listenersInput.splice(index, 1);
        };
    };

    
    if (output) subscribe((v) => output.set(v));

    return { get, set, subscribe };
};
