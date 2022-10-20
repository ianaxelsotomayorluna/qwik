// ---Dependencies
import { component$, useStylesScoped$ } from '@builder.io/qwik';
// ---CSS
import styles from './header.css?inline';

export default component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  useStylesScoped$(styles);
  return (
    <header className="navbar">
      <div class="container">
        <nav>
        <a className="imagen" href="/">
          <img src="/forge-sm-web.png" alt="forge" width={100} />
        </a>
          <button className="first">
            <a href="/firstComponent"> First Component</a>
          </button>
          <button className="about">
            <a href="/about"> About </a>
          </button>
          <button className="food">
            <a href="/food"> Food </a>
          </button>
          <button className="watch">
            <a href="/watchTutor"> Watchtutor </a>
          </button>
          <button className="dummy">
            <a href="/dummyRoot"> Dummy Root </a>
          </button>
          <button className="practica">
            <a href="/practicaCss"> Practica Css Grid </a>
          </button>
        </nav>
      </div>
    </header>
  );
});
