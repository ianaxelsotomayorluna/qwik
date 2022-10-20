import { component$ } from "@builder.io/qwik";

export const About = component$(() => {
  return (
    <div class="About">
      <h1>custom page</h1>
      <ul>
        <li>
          <a href="/"> First Component</a>
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
