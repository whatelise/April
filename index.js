function getdata() {
  fetch("https://keasem2-551e.restdb.io/rest/posts", {
    method: "GET",
    headers: {
      "x-apikey": "606defeaf592f7113340ed01",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      showPosts(response);
    })
    .catch((err) => {
      console.error(err);
    });
}

getdata();

function showPosts(posts) {
  posts.forEach((post) => {
    console.log(post);
    const template = document.querySelector("template.frontpagelist").content;
    const copy = template.cloneNode(true);
    copy.querySelector("h2").textContent = post.title;
    copy.querySelector("h3 span").textContent = post.username;
    copy.querySelector("a.readmore").href = `article.html?article=${post._id}`;
    document.querySelector("main").appendChild(copy);
  });
}
