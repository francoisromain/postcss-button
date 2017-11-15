const tests = {
  input: `.parent .link-one {
  padding: 2rem;
  button-color: skyblue white white;
}

.parent .link-two {
  padding: 2rem;
  button-color: skyblue white white;
  button-class-parent: false;
}

.parent .link-three {
  padding: 2rem;
  button-color: skyblue white white;
  button-class-parent: true;
}
`,
  output: `.parent .link-one,.parent .link-one:visited {
  cursor: pointer;
  text-decoration: none;
  border: none;
  display: inline-block;
  color: skyblue;
  background-color: white;
  padding: 2rem;
}

.parent .link-one:active,.parent .link-one.active {
  color: white;
  background-color: red;
}

.parent .link-one:hover,.parent .link-one.active:hover {
  color: white;
  background-color: grey;
}

.parent .link-one:disabled,.parent .link-one:disabled:active,.parent .link-one:disabled:hover,.parent .link-one.disabled,.parent .link-one.disabled:active,.parent .link-one.disabled:hover {
  opacity: 0.25;
  cursor: default;
  color: skyblue;
  background-color: white;
  box-shadow: inset 0 0 0 0 grey;
}

.parent .link-two,.parent .link-two:visited {
  cursor: pointer;
  text-decoration: none;
  border: none;
  display: inline-block;
  color: skyblue;
  background-color: white;
  padding: 2rem;
}

.parent .link-two:active,.parent .link-two.active {
  color: white;
  background-color: red;
}

.parent .link-two:hover,.parent .link-two.active:hover {
  color: white;
  background-color: grey;
}

.parent .link-two:disabled,.parent .link-two:disabled:active,.parent .link-two:disabled:hover,.parent .link-two.disabled,.parent .link-two.disabled:active,.parent .link-two.disabled:hover {
  opacity: 0.25;
  cursor: default;
  color: skyblue;
  background-color: white;
  box-shadow: inset 0 0 0 0 grey;
}

.parent .link-three,.parent:visited .link-three {
  cursor: pointer;
  text-decoration: none;
  border: none;
  display: inline-block;
  color: skyblue;
  background-color: white;
  padding: 2rem;
}

.parent:active .link-three,.parent.active .link-three {
  color: white;
  background-color: red;
}

.parent:hover .link-three,.parent.active:hover .link-three {
  color: white;
  background-color: grey;
}

.parent:disabled .link-three,.parent:disabled:active .link-three,.parent:disabled:hover .link-three,.parent.disabled .link-three,.parent.disabled:active .link-three,.parent.disabled:hover .link-three {
  opacity: 0.25;
  cursor: default;
  color: skyblue;
  background-color: white;
  box-shadow: inset 0 0 0 0 grey;
}
`,
};

export default tests;
