let observer;

let elements = [];

const slow = document.querySelectorAll("#prim");
const slower = document.querySelectorAll("#sec");

elements = [...slower, ...slow];

console.log(elements);

const options = { treshhold: 1 };

function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    console.log(entry.target.id);
    if (entry.isIntersecting && entry.target.id == "prim")
      entry.target.classList.add("slowSlideup");
    if (entry.isIntersecting && entry.target.id == "sec")
      entry.target.classList.add("slowerSlideup");
  });
}

observer = new IntersectionObserver(handleIntersect);

elements.forEach((element) => {
  observer.observe(element, options);
});
