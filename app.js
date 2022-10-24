

const pytania = document.querySelectorAll(".pytanie");

pytania.forEach(function(pytanie) {
  const btn = pytanie.querySelector(".pytanie-btn");
   console.log(btn);

  btn.addEventListener("click", function () {
     console.log(pytanie);

    pytania.forEach(function (item) {
      if (item !== pytanie) {
        item.classList.remove("show-text");
      }
    });

    pytanie.classList.toggle("show-text");
  });
});



