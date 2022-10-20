// ---Dependencies
import { component$ } from "@builder.io/qwik";
import mrs from "public/MeeseeksHQ.webp"

export default component$(() => {
    // -----------------------CONSTS, HOOKS, STATES
    return(
    <div class="Dummy">
      <p>--------------Hi im a Dummy Commponent--------------</p> 
      <img src={mrs} alt="dummy image" />
      <br />
      <p>trye me!!!</p>
      
    </div>
  );
});