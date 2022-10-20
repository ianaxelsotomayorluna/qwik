// ---Dependencies
import {component$, 
  useStore,
  useContextProvider,
  createContext } from "@builder.io/qwik";
import { ChildEx } from './ChildEx/ChildEx';
// ---Images
import initState from 'public/initialState.jpg';
// ---Custom Hooks
export const Mycontext = createContext("whatever");

/**
 * Food Component: Renderea una página estática
 * @return {Component<{}>} Qwik component
 */
export const Food = component$(() => {
   // -----------------------CONSTS, HOOKS, STATES
   const initialState = useStore({
    name:"Cristian", 
    age:28
  });
  useContextProvider(Mycontext,initialState)
  return (
    <div class="Food">
      Inicializamos el estado en el componente padre y se lo mandamos al componente hijo
      <hr /> 
      <img src={initState} alt="No existe" />
      <br/>
      my state is: {initialState.name}
      <br/>
      <input onInput$={(e)=> initialState.name = (e?.target as HTMLInputElement).value}/>
      <br/>
      <ChildEx />
  </div>)
});

