const openmenubutton = document.querySelectorAll("#open-menu");
const modal = document.querySelectorAll("#modal-wrapper");
const closemenubutton = document.querySelectorAll("#close-modal");

console.log(closemenubutton);

openmenubutton.forEach((button) => {
  console.log(button.dataset.num);
  button.addEventListener("click", () => {
    modal[button.dataset.num - 1].style.display = "flex";
  });
});

closemenubutton.forEach((button) => {
  button.addEventListener("click", () => {
    modal.forEach((modal) => {
      modal.style.display = "none";
    });
  });
});
