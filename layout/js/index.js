let save = document.getElementById("save");
let text = document.getElementById("text");

save.onclick = () => {
  text.classList.add("active");
  save.setAttribute("disabled" , true);
  setTimeout(() => {
    save.disabled = false;
    text.classList.remove("active");
  }, 2000);
}