class CustomMobileMenu extends HTMLElement {
  constructor() {
    super();
    // element created
  }

  connectedCallback() {
    this.innerHTML = `
          <nav class="nav-menu-mobile menu-invisible">
            <div class="logo close-button link-pointer">
              <span class="material-symbols-outlined smaller-icon">
                close
              </span>
            </div>
            <div class="routes pixelated">
              <li id="home" class="slides slide-out" style="--i:0"><a href="/">home</a></li>
              <li id="events" style="--i:1"><a href="/events">events</a></li>
              <li id="sponsors"  style="--i:2"><a href="/sponsors">sponsors</a></li>
              <li id="magazines" style="--i:3"><a href="/magazines">x-cryptus</a></li>
              <li id="contact" style="--i:4"><a href="/contact">contact us</a></li>
              <li id="about" style="--i:5"><a href="/about">about us</a></li>
            </div>
            <div class="socials mono">
              <div class="icons-group">
                <img src="./assets/insta.svg">
                <img src="./assets/site.svg">
              </div>
              <div class="info">
                Department of Computer Science
                <br>
                St. Xavier's College (Autonomous), Kolkata
              </div>
            </div>
          </nav>
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

customElements.define("custom-mobile-menu", CustomMobileMenu)