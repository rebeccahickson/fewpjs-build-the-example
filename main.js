// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

document
  .querySelectorAll(".media-post")
  .forEach((article) => article.addEventListener("click", handleClick));

function handleClick(event) {
  mimicServerCall()
    .then((response) => {
      if (event.target.className == "like-glyph") {
        if (event.target.innerText == EMPTY_HEART) {
          event.target.innerText = `${FULL_HEART}`;
        } else if (event.target.innerText == FULL_HEART) {
          event.target.innerText = `${EMPTY_HEART}`;
        }
      }
    })
    .catch((response) => {
      document.getElementById("modal").classList.remove("hidden");
      document.getElementById("modal-message").innerText = `${response}`;
      setTimeout(function () {
        document.getElementById("modal").classList.add("hidden");
      }, 5000);
    });
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
