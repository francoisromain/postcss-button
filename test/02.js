const tests = {
  input: `button,
.my-button {
  button: test;
}

.my-button-2 {
  button-color: red pink blue green;
  button-border: 2px black red;
  button-radius: 10px;
}

@button {
  color: purple;
  background-color: aqua;
  color-active: yellow;
  background-color-active: orange;
  border-width: 0;
  border-color: orange;
  border-color-active: red;
  border-radius: 0;
  class-disabled: disabled;
  class-active: active;
}

.my-button-3 {
  button-radius: 10px;
}

.my-button-4 {
  button: truc;
}
`,
  output: `button,
.my-button,
button:visited,
.my-button:visited {
  display: inline-block;
  margin: 0;
  cursor: pointer;
  text-decoration: none;
  border: none;
  color: grey;
  background-color: white;
}

button:active, button:hover, .my-button:active, .my-button:hover, button.active, .my-button.active {
  color: black;
  background-color: silver;
  box-shadow: inset 0 0 0 0 black;
}

button:disabled, button:disabled:active, button:disabled:hover, .my-button:disabled, .my-button:disabled:active, .my-button:disabled:hover, button.disabled, button.disabled:active, button.disabled:hover, .my-button.disabled, .my-button.disabled:active, .my-button.disabled:hover {
  opacity: 0.25;
  cursor: default;
}

.my-button-2, .my-button-2:visited {
  display: inline-block;
  margin: 0;
  cursor: pointer;
  text-decoration: none;
  border: none;
  color: red;
  background-color: pink;
  box-shadow: inset 0 0 0 2px black;
  border-radius: 10px;
}

.my-button-2:active, .my-button-2:hover, .my-button-2.active {
  color: blue;
  background-color: green;
  box-shadow: inset 0 0 0 2px red;
}

.my-button-2:disabled, .my-button-2:disabled:active, .my-button-2:disabled:hover, .my-button-2.disabled, .my-button-2.disabled:active, .my-button-2.disabled:hover {
  opacity: 0.25;
  cursor: default;
}

.my-button-3, .my-button-3:visited {
  display: inline-block;
  margin: 0;
  cursor: pointer;
  text-decoration: none;
  border: none;
  color: purple;
  background-color: aqua;
  border-radius: 10px;
}

.my-button-3:active, .my-button-3:hover, .my-button-3.active {
  color: yellow;
  background-color: orange;
}

.my-button-3:disabled, .my-button-3:disabled:active, .my-button-3:disabled:hover, .my-button-3.disabled, .my-button-3.disabled:active, .my-button-3.disabled:hover {
  opacity: 0.25;
  cursor: default;
}

.my-button-4, .my-button-4:visited {
  display: inline-block;
  margin: 0;
  cursor: pointer;
  text-decoration: none;
  border: none;
  color: purple;
  background-color: aqua;
  border-radius: 10px;
}

.my-button-4:active, .my-button-4:hover, .my-button-4.active {
  color: yellow;
  background-color: orange;
}

.my-button-4:disabled, .my-button-4:disabled:active, .my-button-4:disabled:hover, .my-button-4.disabled, .my-button-4.disabled:active, .my-button-4.disabled:hover {
  opacity: 0.25;
  cursor: default;
}
`,
};

export default tests;
