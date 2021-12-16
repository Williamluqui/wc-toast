export default class WCToastCloseButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.template = document.createElement('template');
    this.template.innerHTML = WCToastCloseButton.template();
    this.shadowRoot.append(this.template.content.cloneNode(true));
  }

  static template() {
    return `
    <style>
      :host {
        width: 20px;
        opacity: 1;
        height: 20px;
        border-radius: 2px;
        border: 1px solid #dadce0;
        background: #f9fafb;
        position: relative;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 5px;
      }
    </style>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
    `;
  }
}

customElements.define('wc-toast-close-button', WCToastCloseButton);
