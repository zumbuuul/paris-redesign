const menuItems = document.querySelectorAll(".menu > span");
let last = document.getElementById("dorucak");
let lastCategory = document.getElementById("start");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    showItem(item.outerText.toLowerCase());
    colorCategory(item);
    console.log(item);
  });
});

function showItem(category) {
  last.style.display = "none";
  document.getElementById(category).style.display = "block";
  last = document.getElementById(category);
}

function colorCategory(category) {
  lastCategory.style.color = "white";
  category.style.color = "#A9927D";

  lastCategory = category;
}

showItem("dorucak");
colorCategory(document.getElementById("start"));
