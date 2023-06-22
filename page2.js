// page
let page1 = document.getElementById("page1");
let page2 = document.getElementById("page2");

// item
let item21 = document.getElementById("item21");
let item22 = document.getElementById("item22");
let item23 = document.getElementById("item23");
let item24 = document.getElementById("item24");
let item25 = document.getElementById("item25");

let next2 = document.getElementById("next2");
let back2 = document.getElementById("back2");

// inisiasi tombol mana yang dipencet
let value = "";

// item
item21.addEventListener("click", function putField() {
  value = item21.textContent;
  item21.classList.add("bg-red-500");
  item21.classList.add("text-white");

  item22.classList.remove("bg-red-500");
  item22.classList.remove("text-white");
  item23.classList.remove("bg-red-500");
  item23.classList.remove("text-white");
  item24.classList.remove("bg-red-500");
  item24.classList.remove("text-white");
  item25.classList.remove("bg-red-500");
  item25.classList.remove("text-white");

  next.classList.remove("hidden");
  console.log(value);
});

item22.addEventListener("click", function putField() {
  value = item22.textContent;
  item22.classList.add("bg-red-500");
  item22.classList.add("text-white");

  item21.classList.remove("bg-red-500");
  item21.classList.remove("text-white");
  item23.classList.remove("bg-red-500");
  item23.classList.remove("text-white");
  item24.classList.remove("bg-red-500");
  item24.classList.remove("text-white");
  item25.classList.remove("bg-red-500");
  item25.classList.remove("text-white");

  next.classList.remove("hidden");
  console.log(value);
});

item23.addEventListener("click", function putField() {
  value = item23.textContent;
  item23.classList.add("bg-red-500");
  item23.classList.add("text-white");

  item21.classList.remove("bg-red-500");
  item21.classList.remove("text-white");
  item22.classList.remove("bg-red-500");
  item22.classList.remove("text-white");
  item24.classList.remove("bg-red-500");
  item24.classList.remove("text-white");
  item25.classList.remove("bg-red-500");
  item25.classList.remove("text-white");

  next.classList.remove("hidden");
  console.log(value);
});

item24.addEventListener("click", function putField() {
  value = item24.textContent;
  item24.classList.add("bg-red-500");
  item24.classList.add("text-white");

  item21.classList.remove("bg-red-500");
  item21.classList.remove("text-white");
  item22.classList.remove("bg-red-500");
  item22.classList.remove("text-white");
  item23.classList.remove("bg-red-500");
  item23.classList.remove("text-white");
  item25.classList.remove("bg-red-500");
  item25.classList.remove("text-white");

  next.classList.remove("hidden");
  console.log(value);
});

item25.addEventListener("click", function putField() {
  value = item25.textContent;
  item25.classList.add("bg-red-500");
  item25.classList.add("text-white");

  item21.classList.remove("bg-red-500");
  item21.classList.remove("text-white");
  item22.classList.remove("bg-red-500");
  item22.classList.remove("text-white");
  item23.classList.remove("bg-red-500");
  item23.classList.remove("text-white");
  item24.classList.remove("bg-red-500");
  item24.classList.remove("text-white");

  next.classList.remove("hidden");
  console.log(value);
});

next.addEventListener("click", function () {
  page1.classList.add("hidden");
  page2.classList.remove("hidden");
});
