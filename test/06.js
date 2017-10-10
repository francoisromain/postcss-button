const tests = {
  input: `.fake-button {
  button-background-color-hover: orangered;
  padding: 0.75rem;
}
`,
  output: `.fake-button, .fake-button:visited {
  cursor: pointer;
  text-decoration: none;
  border: none;
  display: inline-block;
  color: grey;
  background-color: white;
  padding: 0.75rem;
}
.fake-button:active, .fake-button.active {
  color: white;
  background-color: red;
}
.fake-button:hover, .fake-button.active:hover {
  color: white;
  background-color: orangered;
}
.fake-button:disabled, .fake-button:disabled:active, .fake-button:disabled:hover, .fake-button.disabled, .fake-button.disabled:active, .fake-button.disabled:hover {
  opacity: 0.25;
  cursor: default;
  color: grey;
  background-color: white;
  box-shadow: inset 0 0 0 0 grey;
}
`,
};

export default tests;
