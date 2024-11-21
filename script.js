const jokeEl = document.getElementById("joke");

genJoke();

//Asyc/Await method
async function genJoke() {
  const config = {
    headers: {
      Accept: "application/JSON",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config)

  const data = await res.json()

  jokeEl.innerHTML = data.joke

      $("#joke").fadeOut(500, function () {
      $(this).html(data.joke).fadeIn(500);
    });

}

//OR

//.then Method
function genJoke() {
  const config = {
    headers: {
      Accept: "application/JSON",
    },
  };

  fetch("https://icanhazdadjoke.com", config)
    .then((res) => res.json())
    .then((data) => {
        jokeEl.innerHTML = data.joke
    });
}