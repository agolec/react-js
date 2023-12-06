function Message() {
  // JSX: Javascript XML.
  //go to babeljs.io and it will show you how the react code gets generated.

  const name = 'Mosh';
  if (name) {
    return <h1>Hello {name}!</h1>;
  }
  return <h1>Hello World</h1>;
}

export default Message;
