import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div>
      <h1>custom page</h1>
      <ul>
        <li>
          <a href="/custom/9asast"> First Component</a>
        </li>
        <li>
          <a href="/custom/1111"> About </a>
        </li>
        <li>
          <a href="/custom/food"> Food </a>
        </li>
      </ul>
    </div>
  );
});
