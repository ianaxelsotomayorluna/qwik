// ---Dependencies
import { component$ } from '@builder.io/qwik';
import { QwikCity, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
// ---Config
import { RouterHead } from './appConfig/RouterHead/RouterHead';
// ---Styles
import './css/global.css';

/**
 * The root of a QwikCity site always start with the <QwikCity> component,
 * immediately followed by the document's <head> and <body>.
 *
 * Dont remove the `<head>` and `<body>` elements.
 */
export default component$(() => {
  return (
    <QwikCity>
      <head>
        <RouterHead />
      </head>
      <body lang="en">
        <ServiceWorkerRegister />
        <RouterOutlet />
      </body>
    </QwikCity>
  );
});
