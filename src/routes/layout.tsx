// ---Dependencies
import { component$, Slot } from '@builder.io/qwik';
// ---Components
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        this is footer
      </footer>
    </>
  );
});
