const render = () => {
  const content = document.querySelector("#content");
  content.style = "";
  content.children[1].remove();
};

export { render };
