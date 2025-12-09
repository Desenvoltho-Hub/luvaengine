//=========================================================
//! LUVA ENGINE ⚙️ OUTPUT
//=========================================================
export const luvaChangeOut = <T>(input: T) => {
    let listeners: ((v: T) => void)[] = [];
    let valor: T = input;

    const get = () => valor;

    const set = (novoValor: T) => {
        valor = novoValor;
        listeners.forEach(f => f(valor));
    };

    const subscribe = (f: (v: T) => void) => {
        listeners.push(f);
        return () => {
            const index = listeners.indexOf(f);
            if (index > -1) listeners.splice(index, 1);
        };
    };

    const destroy = () => {
        listeners.length = 0;
        valor = undefined as unknown as T;
    };

    return { get, set, subscribe, destroy };
};
