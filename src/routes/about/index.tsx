import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div>
      <h1>custom page</h1>
      <ul>
        <li>
          <a href="/about/9asast"> First Component</a>
        </li>
        <li>
          <a href="/about/1111"> About </a>
        </li>
        <li>
          <a href="/about/food"> Food </a>
        </li>
      </ul>
    </div>
  );
});
