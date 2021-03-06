const tests = {
  input: `@button yarp {
  button-color: green white white;
  button-background: white green silver;
  button-border: 4px green green silver;
  button-class: active disabled true;
  padding: 0.25rem;
}

.test .my-button {
  button: yarp;
  padding: 0.75rem;
}
`,
  output: `.test .my-button,.test:visited .my-button {
  cursor: pointer;
  text-decoration: none;
  border: none;
  display: inline-block;
  color: green;
  background-color: white;
  box-shadow: inset 0 0 0 4px green;
  padding: 0.75rem;
}
.test:active .my-button,.test.active .my-button {
  color: white;
  background-color: green;
  box-shadow: inset 0 0 0 4px green;
}
.test:hover .my-button,.test.active:hover .my-button {
  color: white;
  background-color: silver;
  box-shadow: inset 0 0 0 4px silver;
}
.test:disabled .my-button,.test:disabled:active .my-button,.test:disabled:hover .my-button,.test.disabled .my-button,.test.disabled:active .my-button,.test.disabled:hover .my-button {
  opacity: 0.25;
  cursor: default;
  color: green;
  background-color: white;
  box-shadow: inset 0 0 0 4px green;
}
`,
};

export default tests;
