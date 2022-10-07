// ---Dependencies
import { component$, useStore } from "@builder.io/qwik";

export default component$(() =>{
    // -----------------------CONSTS, HOOKS, STATES
    const store = useStore({
        count : 0
    })
    return (
    <div>
        <h1>Hola Soy un componete de qwik </h1>
            Uso del useStore: se instancia el un estado 
        <h1>count:{store.count}</h1>
        <button onClick$={() => store.count++}>
            increment
        </button>   
    </div>)
})