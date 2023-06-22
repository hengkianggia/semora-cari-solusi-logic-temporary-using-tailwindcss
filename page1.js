// page
let page1 = document.getElementById("page1");
let page2 = document.getElementById("page2");
let website = document.getElementById("pagewebsite");
let advertising = document.getElementById("pageadvertising");

// inisiasi tombol mana yang dipencet
let value = "";

// KHUSUS PAGE 1

// item
let item = document.getElementById("item");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let item4 = document.getElementById("item4");
let item5 = document.getElementById("item5");
let item6 = document.getElementById("item6");

let next = document.getElementById("next");

// event item
item.addEventListener("click", function () {
  item.classList.add("bg-red-500");
  item.classList.add("text-white");

  item2.classList.remove("bg-red-500");
  item2.classList.remove("text-white");
  item3.classList.remove("bg-red-500");
  item3.classList.remove("text-white");
  item4.classList.remove("bg-red-500");
  item4.classList.remove("text-white");
  item5.classList.remove("bg-red-500");
  item5.classList.remove("text-white");
  item6.classList.remove("bg-red-500");
  item6.classList.remove("text-white");

  next.classList.remove("hidden");
  console.log(value);
});

item2.addEventListener("click", function () {
  item2.classList.add("bg-red-500");
  item2.classList.add("text-white");

  item.classList.remove("bg-red-500");
  item.classList.remove("text-white");
  item3.classList.remove("bg-red-500");
  item3.classList.remove("text-white");
  item4.classList.remove("bg-red-500");
  item4.classList.remove("text-white");
  item5.classList.remove("bg-red-500");
  item5.classList.remove("text-white");
  item6.classList.remove("bg-red-500");
  item6.classList.remove("text-white");

  next.classList.remove("hidden");
  console.log(value);
});

item3.addEventListener("click", function () {
  item3.classList.add("bg-red-500");
  item3.classList.add("text-white");

  item.classList.remove("bg-red-500");
  item.classList.remove("text-white");
  item2.classList.remove("bg-red-500");
  item2.classList.remove("text-white");
  item4.classList.remove("bg-red-500");
  item4.classList.remove("text-white");
  item5.classList.remove("bg-red-500");
  item5.classList.remove("text-white");
  item6.classList.remove("bg-red-500");
  item6.classList.remove("text-white");

  next.classList.remove("hidden");
  console.log(value);
});

item4.addEventListener("click", function () {
  item4.classList.add("bg-red-500");
  item4.classList.add("text-white");

  item.classList.remove("bg-red-500");
  item.classList.remove("text-white");
  item2.classList.remove("bg-red-500");
  item2.classList.remove("text-white");
  item3.classList.remove("bg-red-500");
  item3.classList.remove("text-white");
  item5.classList.remove("bg-red-500");
  item5.classList.remove("text-white");
  item6.classList.remove("bg-red-500");
  item6.classList.remove("text-white");

  next.classList.remove("hidden");
  console.log(value);
});

item5.addEventListener("click", function () {
  item5.classList.add("bg-red-500");
  item5.classList.add("text-white");

  item.classList.remove("bg-red-500");
  item.classList.remove("text-white");
  item2.classList.remove("bg-red-500");
  item2.classList.remove("text-white");
  item3.classList.remove("bg-red-500");
  item3.classList.remove("text-white");
  item4.classList.remove("bg-red-500");
  item4.classList.remove("text-white");
  item6.classList.remove("bg-red-500");
  item6.classList.remove("text-white");

  next.classList.remove("hidden");
  console.log(value);
});

item6.addEventListener("click", function () {
  item6.classList.add("bg-red-500");
  item6.classList.add("text-white");

  item.classList.remove("bg-red-500");
  item.classList.remove("text-white");
  item2.classList.remove("bg-red-500");
  item2.classList.remove("text-white");
  item3.classList.remove("bg-red-500");
  item3.classList.remove("text-white");
  item4.classList.remove("bg-red-500");
  item4.classList.remove("text-white");
  item5.classList.remove("bg-red-500");
  item5.classList.remove("text-white");
  next.classList.remove("hidden");
  console.log(value);
});

next.addEventListener("click", function () {
  page1.classList.add("hidden");
  page2.classList.remove("hidden");

  item.classList.remove("bg-red-500");
  item.classList.remove("text-white");
  item2.classList.remove("bg-red-500");
  item2.classList.remove("text-white");
  item3.classList.remove("bg-red-500");
  item3.classList.remove("text-white");
  item4.classList.remove("bg-red-500");
  item4.classList.remove("text-white");
  item5.classList.remove("bg-red-500");
  item5.classList.remove("text-white");
  item6.classList.remove("bg-red-500");
  item6.classList.remove("text-white");

  next.classList.add("hidden");
});

// KHUSUS PAGE 2

let item21 = document.getElementById("item21");
let item22 = document.getElementById("item22");
let item23 = document.getElementById("item23");
let item24 = document.getElementById("item24");
let item25 = document.getElementById("item25");

let tombol2 = document.getElementById(" next2");
let next2 = document.getElementById("next2");
let back2 = document.getElementById("back2");

item21.addEventListener("click", function () {
  value = item21.id;
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

  next2.classList.remove("hidden");
  console.log(value);
});

item22.addEventListener("click", function () {
  value = item22.id;
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

  next2.classList.remove("hidden");
  console.log(value);
});

item23.addEventListener("click", function () {
  value = item23.id;
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

  next2.classList.remove("hidden");
  console.log(value);
});

item24.addEventListener("click", function () {
  value = item24.id;
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

  next2.classList.remove("hidden");
  console.log(value);
});

item25.addEventListener("click", function () {
  value = item25.id;
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

  next2.classList.remove("hidden");
  console.log(value);
});

back2.addEventListener("click", function () {
  page2.classList.add("hidden");
  page1.classList.remove("hidden");

  item21.classList.remove("bg-red-500");
  item21.classList.remove("text-white");
  item22.classList.remove("bg-red-500");
  item22.classList.remove("text-white");
  item23.classList.remove("bg-red-500");
  item23.classList.remove("text-white");
  item24.classList.remove("bg-red-500");
  item24.classList.remove("text-white");
  item25.classList.remove("bg-red-500");
  item25.classList.remove("text-white");

  next2.classList.add("hidden");
});

next2.addEventListener("click", function () {
  if (value === "item21") {
    website.classList.remove("hidden");
  }
  if (value === "item22") {
    advertising.classList.remove("hidden");
  }
  page2.classList.add("hidden");

  item21.classList.remove("bg-red-500");
  item21.classList.remove("text-white");
  item22.classList.remove("bg-red-500");
  item22.classList.remove("text-white");
  item23.classList.remove("bg-red-500");
  item23.classList.remove("text-white");
  item24.classList.remove("bg-red-500");
  item24.classList.remove("text-white");
  item25.classList.remove("bg-red-500");
  item25.classList.remove("text-white");

  next2.classList.add("hidden");
});

// KHUSUS PAGE WEBSITE

let website1 = document.getElementById("website1");
let website2 = document.getElementById("website2");

let tombolwebsite = document.getElementById("tombolwebsite");
let nextweb = document.getElementById("nextweb");
let backweb = document.getElementById("backweb");

website1.addEventListener("click", function () {
  value = website1.id;
  website1.classList.add("bg-red-500");
  website1.classList.add("text-white");

  website2.classList.remove("bg-red-500");
  website2.classList.remove("text-white");

  nextweb.classList.remove("hidden");
  console.log(value);
});

website2.addEventListener("click", function () {
  value = website2.textContent;
  website2.classList.add("bg-red-500");
  website2.classList.add("text-white");

  website1.classList.remove("bg-red-500");
  website1.classList.remove("text-white");

  nextweb.classList.remove("hidden");
  console.log(value);
});

backweb.addEventListener("click", function () {
  website.classList.add("hidden");
  page2.classList.remove("hidden");

  website1.classList.remove("bg-red-500");
  website1.classList.remove("text-white");
  website2.classList.remove("bg-red-500");
  website2.classList.remove("text-white");

  nextweb.classList.add("hidden");
});

// AKHIR KHUSUS PAGE WEBSITE

// KHUSUS PAGE ADVERTISING

let advertising1 = document.getElementById("advertising1");
let advertising2 = document.getElementById("advertising2");

let nextads = document.getElementById("nextads");
let backads = document.getElementById("backads");

advertising1.addEventListener("click", function () {
  value = advertising1.id;
  advertising1.classList.add("bg-red-500");
  advertising1.classList.add("text-white");

  advertising2.classList.remove("bg-red-500");
  advertising2.classList.remove("text-white");

  nextads.classList.remove("hidden");
  console.log(value);
});

advertising2.addEventListener("click", function () {
  value = advertising2.textContent;
  advertising2.classList.add("bg-red-500");
  advertising2.classList.add("text-white");

  advertising1.classList.remove("bg-red-500");
  advertising1.classList.remove("text-white");

  nextads.classList.remove("hidden");
  console.log(value);
});

backads.addEventListener("click", function () {
  advertising.classList.add("hidden");
  page2.classList.remove("hidden");

  advertising1.classList.remove("bg-red-500");
  advertising1.classList.remove("text-white");
  advertising2.classList.remove("bg-red-500");
  advertising2.classList.remove("text-white");

  nextads.classList.add("hidden");
});

// AKHIR KHUSUS PAGE ADVERTISING
