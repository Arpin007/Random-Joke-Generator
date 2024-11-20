async function fatchJoke() {
  try {
    let joke = await fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    });
    const data = await joke.json();

    console.log(data);

    let text = document.getElementById("text");
    let btn = document.getElementById("btn");

    text.innerHTML = `<p><strong></strong> ${data.joke}</p>`;

    btn.addEventListener("click", function () {
      fatchJoke();
    });
  } catch (error) {
    console.error(error);
  }
}

fatchJoke();
