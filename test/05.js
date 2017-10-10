const tests = {
  input: `@button chuel {
  button-color: green white white;
  button-background: white green silver;
  button-border: 4px green green silver;
  button-classes: active disabled;
  padding: 0.25rem;
}

@button mehj {
  button: chuel;
  button-background-color-hover: orangered;
  padding: 0.30rem;
}

.my-button {
  button: mehj;
  padding: 0.75rem;
}

.fake-button {
  button-background-color-hover: blue;
  padding: 0.75rem;
}
`,
  output: `.my-button,.my-button:visited {
  cursor: pointer;
  text-decoration: none;
  border: none;
  display: inline-block;
  color: green;
  background-color: white;
  box-shadow: inset 0 0 0 4px green;
  padding: 0.75rem;
}

.my-button:active,.my-button.active {
  color: white;
  background-color: green;
  box-shadow: inset 0 0 0 4px green;
}

.my-button:hover,.my-button.active:hover {
  color: white;
  background-color: orangered;
  box-shadow: inset 0 0 0 4px silver;
}

.my-button:disabled,.my-button:disabled:active,.my-button:disabled:hover,.my-button.disabled,.my-button.disabled:active,.my-button.disabled:hover {
  opacity: 0.25;
  cursor: default;
  color: green;
  background-color: white;
  box-shadow: inset 0 0 0 4px green;
}

.fake-button,.fake-button:visited {
  cursor: pointer;
  text-decoration: none;
  border: none;
  display: inline-block;
  color: grey;
  background-color: white;
  padding: 0.75rem;
}

.fake-button:active,.fake-button.active {
  color: white;
  background-color: red;
}

.fake-button:hover,.fake-button.active:hover {
  color: white;
  background-color: blue;
}

.fake-button:disabled,.fake-button:disabled:active,.fake-button:disabled:hover,.fake-button.disabled,.fake-button.disabled:active,.fake-button.disabled:hover {
  opacity: 0.25;
  cursor: default;
  color: grey;
  background-color: white;
  box-shadow: inset 0 0 0 0 grey;
}
`,
};

export default tests;
