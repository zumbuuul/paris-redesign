const questions = document.querySelectorAll(".faq > #sec > article");
const answers = document.querySelectorAll(".faq > #sec > article > .answer");

questions.forEach((question, idx) => {
  question.addEventListener("click", () => {
   
    answers[idx].style.display == "block"
      ? (answers[idx].style.display = "none")
      : (answers[idx].style.display = "block");
  });
});
