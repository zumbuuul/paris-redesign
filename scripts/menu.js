const openmenubutton = document.querySelectorAll("#open-menu");
const modal = document.getElementById("modal-wrapper");
const closemenubutton = document.getElementById("close-modal");

openmenubutton.forEach((button) => {
  button.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});

closemenubutton.addEventListener("click", () => {
  modal.style.display = "none";
});
