window.onload = () => {
  main();
};
function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("change_btn");
  const output = document.getElementById("output");
  btn.addEventListener("click", function () {
    const bgColor = genarateColor();
    root.style.backgroundColor = bgColor;
    output.value = bgColor;
  });
}
function genarateColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const bule = Math.floor(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${bule.toString(16)}`;
}
