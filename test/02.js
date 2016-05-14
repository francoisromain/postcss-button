const tests = {
  input: `@button test {
  border-width: 1px;
  color: #ff5400;
  background-color: rgba(248, 247, 243, 0);
  border-color: grey;
  color-hover: #f8f7f3;
  background-color-hover: #ff5400;
  border-color-hover: #ff5400;
  color-active: #f8f7f3;
  background-color-active: #bcb9af;
  border-color-active: #bcb9af;
  class-active: active;
  class-disabled: disabled;
}

.my-button {
  button: test;
}
`,
  output: `.my-button, .my-button:visited {
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  border: none;
  color: #ff5400;
  background-color: rgba(248, 247, 243, 0);
  box-shadow: inset 0 0 0 1px grey;
}
.my-button:active, .my-button.active {
  color: #f8f7f3;
  background-color: #bcb9af;
  box-shadow: inset 0 0 0 1px #bcb9af;
}
.my-button:hover, .my-button.active:hover {
  color: #f8f7f3;
  background-color: #ff5400;
  box-shadow: inset 0 0 0 1px #ff5400;
}
.my-button:disabled, .my-button:disabled:active, .my-button:disabled:hover, .my-button.disabled, .my-button.disabled:active, .my-button.disabled:hover {
  opacity: 0.25;
  cursor: default;
  color: #ff5400;
  background-color: rgba(248, 247, 243, 0);
  box-shadow: inset 0 0 0 1px grey;
}
`,
};

export default tests;
