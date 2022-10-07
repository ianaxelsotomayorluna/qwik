import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
    return (
    <div style="background-color:red;color:white">
        <h1>This is my custom Layout</h1>
        <Slot/>
    </div>
    );
});
