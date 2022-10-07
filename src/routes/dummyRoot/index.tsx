// ---Dependencies
import { component$ } from "@builder.io/qwik";
import DummyComponent from "~/components/dummyComponent";

export default component$(() => {
  return (
    <div>
        hi i am a Dummy Root wit a Dummy Component
        <br />
        trye me!!!
        <DummyComponent/>
    </div>
  );
});