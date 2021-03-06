const tests = {
  input: `@button toust {
  button-color: yellow white white;
  button-background: white yellow silver;
  button-border: 4px yellow yellow silver;
  button-class: active disabled;
  padding: 0.75rem;
}

.my-button {
  button: toust;
  padding: 0.75rem;
}
`,
  output: `.my-button,.my-button:visited {
  cursor: pointer;
  text-decoration: none;
  border: none;
  display: inline-block;
  color: yellow;
  background-color: white;
  box-shadow: inset 0 0 0 4px yellow;
  padding: 0.75rem;
}
.my-button:active,.my-button.active {
  color: white;
  background-color: yellow;
  box-shadow: inset 0 0 0 4px yellow;
}
.my-button:hover,.my-button.active:hover {
  color: white;
  background-color: silver;
  box-shadow: inset 0 0 0 4px silver;
}
.my-button:disabled,.my-button:disabled:active,.my-button:disabled:hover,.my-button.disabled,.my-button.disabled:active,.my-button.disabled:hover {
  opacity: 0.25;
  cursor: default;
  color: yellow;
  background-color: white;
  box-shadow: inset 0 0 0 4px yellow;
}
`,
};

export default tests;
