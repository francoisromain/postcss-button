const tests = {
  input: `.your-button {
  button-color: skyblue white white;
  button-background: white skyblue silver;
  button-border: 4px skyblue skyblue silver;
  button-class: active disabled false;
}
`,
  output: `.your-button,.your-button:visited {
  cursor: pointer;
  text-decoration: none;
  border: none;
  display: inline-block;
  color: skyblue;
  background-color: white;
  box-shadow: inset 0 0 0 4px skyblue;
}
.your-button:active,.your-button.active {
  color: white;
  background-color: skyblue;
  box-shadow: inset 0 0 0 4px skyblue;
}
.your-button:hover,.your-button.active:hover {
  color: white;
  background-color: silver;
  box-shadow: inset 0 0 0 4px silver;
}
.your-button:disabled,.your-button:disabled:active,.your-button:disabled:hover,.your-button.disabled,.your-button.disabled:active,.your-button.disabled:hover {
  opacity: 0.25;
  cursor: default;
  color: skyblue;
  background-color: white;
  box-shadow: inset 0 0 0 4px skyblue;
}
`,
};

export default tests;
