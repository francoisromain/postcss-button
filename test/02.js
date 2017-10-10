const tests = {
  input: `@button test {
  button-border-width: 1px;
  button-color: orangered;
  button-background-color: #ffffff;
  button-border-color: silver;
  button-color-hover: whitesmoke;
  button-background-color-hover: orangered;
  button-border-color-hover: orangered;
  button-color-active: whitesmoke;
  button-background-color-active: silver;
  button-border-color-active: silver;
  button-class-active: active;
  button-class-disabled: disabled;
}

.my-button {
  button: test;
  padding: 0.75rem;
}
`,
  output: `.my-button, .my-button:visited {
  cursor: pointer;
  text-decoration: none;
  border: none;
  display: inline-block;
  color: orangered;
  background-color: #ffffff;
  padding: 0.75rem;
}
.my-button:active, .my-button.active {
  color: whitesmoke;
  background-color: silver;
}
.my-button:hover, .my-button.active:hover {
  color: whitesmoke;
  background-color: orangered;
}
.my-button:disabled, .my-button:disabled:active, .my-button:disabled:hover, .my-button.disabled, .my-button.disabled:active, .my-button.disabled:hover {
  opacity: 0.25;
  cursor: default;
  color: orangered;
  background-color: #ffffff;
  box-shadow: inset 0 0 0 0 silver;
}
`,
};

export default tests;
