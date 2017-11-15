const tests = {
  input: `@button chuel {
  button-color: brown white white;
  button-background: white brown silver;
  button-border: 4px brown brown silver;
  button-class: active disabled;
  padding: 0.25rem;
}

@button mehj {
  button: chuel;
  button-color: pink white white;
  padding: 0.30rem;
}

.my-button {
  button: mehj;
  padding: 0.75rem;
}
`,
  output: `.my-button,.my-button:visited {
  cursor: pointer;
  text-decoration: none;
  border: none;
  display: inline-block;
  color: pink;
  background-color: white;
  box-shadow: inset 0 0 0 4px brown;
  padding: 0.75rem;
}
.my-button:active,.my-button.active {
  color: white;
  background-color: brown;
  box-shadow: inset 0 0 0 4px brown;
}
.my-button:hover,.my-button.active:hover {
  color: white;
  background-color: silver;
  box-shadow: inset 0 0 0 4px silver;
}
.my-button:disabled,.my-button:disabled:active,.my-button:disabled:hover,.my-button.disabled,.my-button.disabled:active,.my-button.disabled:hover {
  opacity: 0.25;
  cursor: default;
  color: pink;
  background-color: white;
  box-shadow: inset 0 0 0 4px brown;
}
`,
};

export default tests;
