

const products = [
    {}
];

 document.addEventListener("DOMContentLoaded", function() {
const form = document.getElementById("form");
const btns = document.getElementById("btns");
const closed = document.querySelector(".closed");

 btns.onclick = function() {
     form.style.display = "block";
 }

 closed.onclick = function() {
     form.style.display = "none";
 }

window.onclick = function() {
    if(event.target === form) {
        form.style.display = "none";
    }
}
});

function formValidate() {
    const name = document.getElementById("name").value;
  
    if (name === "") {
      alert("Name cant be empty!");
      return false;
    }
  
    if (name.length > 20) {
      return false;
    }

    return true;
  }

const myform = document.getElementById("myform");
let i = 1;
let dataObjArray = [];

myform.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const imgInput = document.getElementById("imageInput");

  if (imgInput.files.length > 0) {
    const file = imageInput.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      const imgDataUrl = event.target.result;

      const newObj = {
        id: i++,
        name: name,
        img: imgDataUrl,
        download: previewImg.src,
      };

      dataObjArray.push(newObj);
      renderDataCards();
      updateAndSaveDataArray();
    };
    reader.readAsDataURL(file);
  } else {
    console.error("No file selected");
  }
});

function renderDataCards() {
  const container = document.getElementById("container");
  container.innerHTML = ``;

  dataObjArray.forEach((newObj) => {
    const cards = document.createElement("div");
    const downloadBtn = document.querySelector(".download-btn");
    cards.classList.add("card");

    cards.innerHTML = `
    <img src="${newObj.img}" alt="Example Image">
    <div class="info">
      <h2>${newObj.name}</h2>
      <div class="tags">
      </div>
      <a href="${newObj.download}" download="${newObj.name}" class="download-btn">Download</a>
    </div>
    `;
    container.appendChild(cards);
  });
}

const imageInput = document.getElementById("imageInput");
const previewImg = document.getElementById("previewImg");

imageInput.addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      previewImg.classList.add("pvimg")
      previewImg.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});

