// ---Dependencies
import {component$, useContext, } from "@builder.io/qwik";
import { Mycontext } from 'src/pages/Food/Food';

export const ChildEx =  component$(() => {
    // -----------------------CONSTS, HOOKS, STATES
    const state: any = useContext(Mycontext);
    return(
    <div>
      --------------Hi im a Child--------------
      <hr /> 
      Le mandamos las propiedasdes del State al hijo por medio de "useContext"
      <p>Name state:{state.name} </p>
      <p>Age state:{state.age} </p>
    </div>
  );
});