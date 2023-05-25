import axios from 'axios';
import { CapacitorCookies } from '@capacitor/core';


window.customElements.define(
  'capacitor-welcome',
  class extends HTMLElement {
    constructor() {
      super();

      const root = this.attachShadow({ mode: 'open' });

      root.innerHTML = '<div><button id="getCookie">getCookie</button><button id="sendCookie">send Cookie</button></div>';

    }

    connectedCallback() {
      const self = this;

      self.shadowRoot.querySelector('#getCookie').addEventListener('click', async function (e) {
        try {
	    const response = await axios.get('http://192.168.0.13:5000/getCookie');
            console.log(response.data);
        } catch (e) {
          console.warn('Error', JSON.stringify(e));
        }
      });
      self.shadowRoot.querySelector('#sendCookie').addEventListener('click', async function (e) {
        try {
	    const response = await axios.get('http://192.168.0.13:5000/sendCookie', {
		withCredentials: true
	    });
            console.log(response.data);
        } catch (e) {
          console.warn('Error', JSON.stringify(e));
        }
      });
    }
  }
);

window.customElements.define(
  'capacitor-welcome-titlebar',
  class extends HTMLElement {
    constructor() {
      super();
      const root = this.attachShadow({ mode: 'open' });
      root.innerHTML = `
    <style>
      :host {
        position: relative;
        display: block;
        padding: 15px 15px 15px 15px;
        text-align: center;
        background-color: #73B5F6;
      }
      ::slotted(h1) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 0.9em;
        font-weight: 600;
        color: #fff;
      }
    </style>
    <slot></slot>
    `;
    }
  }
);
