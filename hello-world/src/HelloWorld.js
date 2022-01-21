import { html, css, LitElement } from 'lit';
// import is used to import read only live bindings, exported from another module

export class HelloWorld extends LitElement {
// export statement exports live bindings to functions, objects, or primitive value types from the module to 
// be used by other programs

  static get styles() {
  // the static keyword defines a static method and the get is a getter for the Object you require to get
    // return statement ends function execution
    return css` 
      :host {
        display: block;
        padding: 25px;
        color: var(--hello-world-text-color, #000);
      }
    `;
  }

  static get properties() {
  // the static keyword defines a static method and the get is a getter for the Object you require to get
    return {
    // return statement ends function execution
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() { 
  // a constructor creates many objects of the same type
    super();
    this.title = 'Hello World';
    this.counter = 5;
  }

  __increment() {
    // 'increment' operator adds 1 to the operand
    this.counter += 1;
  }

  render() {
    // The 'render' function adds two arguments 1) HTML code and 2) HTML element
    // return statement ends function execution
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
