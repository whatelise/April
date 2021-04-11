const form = document.querySelector("form");
// console.log(form.elements);
form.addEventListener("submit", userSubmitted);

function userSubmitted(evt) {
  evt.preventDefault();
  console.log(form.elements.username.value);
  console.log(form.elements.title.value);
  console.log(form.elements.content.value);

  const payload = {
    title: form.elements.title.value,
    username: form.elements.username.value,
    content: form.elements.content.value,
  };
  // form.elements.title.focus();
  document.querySelector("input[type=submit]").disabled = true;

  fetch("https://keasem2-551e.restdb.io/rest/posts", {
    method: "POST",
    headers: {
      "x-apikey": "606defeaf592f7113340ed01",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res, json())
    .then((response) => {
      console.log(response);
      document.querySelector("input[type=submit]").disabled = false;
      form.elements.title.value = "";
      form.elements.username.value = "";
      form.elements.content.value = "";
      document.querySelector("p.hidden").classList.remove(".hidden");
    })
    .catch((err) => {
      console.error(err);
    });
}
