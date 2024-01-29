var commandOutputs = {
  ls: `
    events
    <br>
    x-cryptus
    <br>
    sponsors
    <br>
    about us
    `,
  date: `
    12th and 13th Feb
    `,
  location: `
    St. Xavier’s College (Autonomous), Kolkata
    <br>
    30, Mother Teresa Sarani,
    <br>
    Kolkata - 700016, West Bengal, India
  `,
  info: `
    The 8th edition Annual Technical Festival of St. Xavier's
    College (Autonomous), Kolkata organized by Department of
    Computer Science, St. Xavier's College (Autonomous), Kolkata is
    here.
    `,
  help: `
    available commands:
    <br>
    - ls : list all pages
    <br>
    - cd: go to a page
    <br>
    - info: about the fest
    <br>
    - location: locate us
    <br>
    - date: when we will go live
    <br>
    - contact: solve all your queries
    <br>
    - clear: clear terminal screen
    `,
};

let infoSection = document.querySelector(".info-section");
var prompt = {
  window: document.querySelector(".window"),
  shortcut: document.querySelector(".prompt-shortcut"),
  input: document.querySelector(".js-prompt-input"),

  init: function () {
    document
      .querySelector(".js-minimize")
      .addEventListener("click", prompt.minimize);
    document
      .querySelector(".js-maximize")
      .addEventListener("click", prompt.maximize);
    document.querySelector(".js-close").addEventListener("click", prompt.close);
    document.querySelector(".js-open").addEventListener("click", prompt.open);
    prompt.input.focus();
    // prompt.input.blur(prompt.focus);
  },
  focus: function () {
    prompt.input.focus();
  },
  minimize: function () {
    prompt.window.classList.remove("window--maximized");
    // prompt.window.classList.add("window--minimized");
    toggleClass(prompt.window, "window--minimized");
    setTimeout(() => {
      let contentWrapper = document.querySelector(".window-content");
      contentWrapper.scrollTop = contentWrapper.scrollHeight;
    }, 500);
  },
  maximize: function () {
    prompt.window.classList.remove("window--minimized");
    // prompt.window.classList.add("window--maximized");
    toggleClass(prompt.window, "window--maximized");
    prompt.focus();
    setTimeout(() => {
      let contentWrapper = document.querySelector(".window-content");
      contentWrapper.scrollTop = contentWrapper.scrollHeight;
    }, 500);
  },
  close: function () {
    infoSection.style.zIndex = "90";
    prompt.window.classList.add("window--destroyed");
    // prompt.window.classList.remove("window--maximized");
    // prompt.window.classList.remove("window--minimized");
    prompt.shortcut.classList.remove("hidden");
    prompt.input.value = "";
  },
  open: function () {
    infoSection.style.zIndex = "102";
    prompt.window.classList.remove("window--destroyed");
    prompt.shortcut.classList.add("hidden");
    prompt.focus();
  },
};

function toggleClass(node, className) {
  if (node.classList.contains(className)) {
    node.classList.remove(className);
  } else {
    node.classList.add(className);
  }
}

function detectEnter(e) {
  if (e.key === "Enter" || e.keyCode === 13) {
    let outputWrapper = document.querySelector(".window .outputs");
    // alert("Enter Pressed");
    let commandFound = false;
    Object.entries(commandOutputs).forEach(([command, output]) => {
      //   console.log(command, output);
      if (command == prompt.input.value) {
        outputWrapper.innerHTML += `<br><br><span class="cmd">${command}</span><br>${output}`;
        commandFound = true;
      }
    });
    if (!commandFound) {
      if (/cd.*/.test(prompt.input.value)) {
        let path = prompt.input.value.split(" ")[1];
        switch (path) {
          case undefined:
            outputWrapper.innerHTML += `<br><span class="cmd">${prompt.input.value}</span><br>Insufficient args: Mention a page name<br>Eg: cd events`;
            commandFound = true;
            break;
          case "events":
            window.location.replace("/events");
            outputWrapper.innerHTML += `<br><span class="cmd">${prompt.input.value}</span><br>redirecting...`;
            commandFound = true;
            break;
          case "about":
            window.location.replace("/about");
            outputWrapper.innerHTML += `<br><span class="cmd">${prompt.input.value}</span><br>redirecting...`;
            commandFound = true;
            break;
          case "x-cryptus":
            window.location.replace("/magazines");
            outputWrapper.innerHTML += `<br><span class="cmd">${prompt.input.value}</span><br>redirecting...`;
            commandFound = true;
            break;
          case "sponsors":
            window.location.replace("/sponsors");
            outputWrapper.innerHTML += `<br><span class="cmd">${prompt.input.value}</span><br>redirecting...`;
            commandFound = true;
            break;
        }
      }
      if (prompt.input.value == "clear") {
        outputWrapper.innerHTML = "";
        commandFound = true;
      }
      if (prompt.input.value == "exit") {
        outputWrapper.innerHTML = "";
        prompt.close()
        commandFound = true;
      }
    }
    if (!commandFound) {
      outputWrapper.innerHTML += `<br><span class="cmd_err">${prompt.input.value}</span><br>ERROR: Unknown Command`;
    }
    prompt.input.value = "";
    prompt.input.style.width = "0.5rem";
  }
  let contentWrapper = document.querySelector(".window-content");
  contentWrapper.scrollTop = contentWrapper.scrollHeight;
}

function setInputWidth(inputElement) {
  // Calculate the width of the content in pixels
  const contentWidth = getTextWidth(
    inputElement.value,
    window.getComputedStyle(inputElement).font
  );

  console.log(contentWidth);
  // Set the input field width with some padding
  inputElement.style.width = contentWidth + 5 + "px";
}

// Function to get the width of a text string in pixels
function getTextWidth(text, font) {
  console.log(100);
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = font;
  const textMetrics = context.measureText(text);
  return textMetrics.width;
}

prompt.init();
prompt.close();
