import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";

// This style will be loaded inside the shadow DOM element (thanks to vite-plugin-shadow-style)
import "./index.scss";

// This style will be loaded outside the shadow DOM element, in the root <style> element
// https://vitejs.dev/guide/features.html#disabling-css-injection-into-the-page
import global from "./global.scss?inline";

class Documentale extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
  }

  connectedCallback() {
    const globalStyle = document.createElement("style");
    globalStyle.textContent = global;
    document.body.parentNode!.appendChild(globalStyle);

    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });

    // Create spans
    const wrapper = document.createElement("span");
    wrapper.setAttribute("class", "wrapper");

    // Create some CSS to apply to the shadow dom
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM#applying_styles_inside_the_shadow_dom
    const style = document.createElement("style");

    // Attach the created elements to the shadow dom
    shadow.appendChild(style);
    console.log("style.isConnected: " + style.isConnected);

    style.textContent += SHADOW_STYLE;

    // Attach the created elements to the shadow dom
    shadow.appendChild(style);

    shadow.appendChild(wrapper);

    const div = document.createElement("div");
    shadow.appendChild(div);
    const root = ReactDOM.createRoot(div!);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
  }
}

customElements.define("new-documentale", Documentale)
