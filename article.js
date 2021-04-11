const searchParams = new URLSearchParams(window.location.search);
const articleId = searchParams.get("article");

fetch(
  "https://keasem2-551e.restdb.io/rest/posts/" +
    articleId +
    "?fetchchildren=true",
  {
    method: "GET",
    headers: {
      "x-apikey": "606defeaf592f7113340ed01",
    },
  }
)
  .then((res) => res.json())
  .then((response) => {
    showPost(response);
  })
  .catch((err) => {
    console.error(err);
  });

function showPost(data) {
  console.log(data.comments);

  document.querySelector("h2").textContent = data.title;
  document.querySelector("h3 span").textContent = data.username;
  document.querySelector(".content").textContent = data.content;

  const template = document.querySelector(".commentTemplate").content;

  data.comments.forEach((comment) => {
    console.log(comment);
    const clone = template.cloneNode(true);
    clone.querySelector(".commentcontent").textContent = comment.content;
    clone.querySelector("h3 span").textContent = comment.username;

    document.querySelector(".commentList").appendChild(clone);
  });
  // if (data.comments.length === 0) {
  //   const clone = template.cloneNode(true);
  //   clone.querySelector("h3").textContent = "No comments yet. Be the first";
  //   clone.querySelector("p").textContent = "you";
  //   document.querySelector(".commentList").appendChild(clone);
  // }
}
