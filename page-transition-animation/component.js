class CustomPageTransition extends HTMLElement {
  constructor() {
    super();
    // element created
  }

  connectedCallback() {
    this.innerHTML = `
            <div class="transition-wrapper transition-visible">
                <div class="pixelated flex gap-1rem justify-center items-center">
                    <svg
                      class="spinner"
                      width="25px"
                      height="25px"
                      viewBox="0 0 66 66"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        class="path"
                        style={dark ? "stroke: rgb(255, 255, 255)" : ""}
                        fill="none"
                        stroke-width="6"
                        stroke-linecap="round"
                        cx="33"
                        cy="33"
                        r="30"
                      />
                    </svg>
                    eXabyte '24
                </div>
            </div>
          `
  }

  disconnectedCallback() {
    // browser calls this method when the element is removed from the document
    // (can be called many times if an element is repeatedly added/removed)
  }

  static get observedAttributes() {
    return [/* array of attribute names to monitor for changes */];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // called when one of attributes listed above is modified
  }

  adoptedCallback() {
    // called when the element is moved to a new document
    // (happens in document.adoptNode, very rarely used)
  }

  // there can be other element methods and properties
}

customElements.define("custom-page-transition", CustomPageTransition)