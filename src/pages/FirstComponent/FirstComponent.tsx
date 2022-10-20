// ---Dependencies
import { component$, useStore } from "@builder.io/qwik";

/**
 * Home Component: Renderea una página estática
 * @return {Component<{}>} Qwik component
 */
export const FirstComponent = component$(() => {
  const store = useStore({
    count : 0
})
return (
<div class="FirstComponent">
    <h1>Hola Soy un componete de qwik </h1>
        Uso del useStore: se instancia el un estado 
    <h1>count:{store.count}</h1>
    <button onClick$={() => store.count++}>
        increment
    </button>   
</div>)
})