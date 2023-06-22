// page
let page1 = document.getElementById("page1");

// page 2 start
let page2 = document.getElementById("page2");
//page 2 end

//page 3 start
let website = document.getElementById("pagewebsite");
let advertising = document.getElementById("pageadvertising");
let creativeproduction = document.getElementById("pagecreativeproduction");
let sosialmediamanagement = document.getElementById(
  "pagesosialmediamanagement"
);
let googlebussinessoptimization = document.getElementById(
  "pagegooglebussinessoptimization"
);
//page 3 end

// page 4 start
let hubspotmarketing = document.getElementById("pagehubspotmarketing");
let wordpress = document.getElementById("pagewordpress");
let sosialmediamaadvertising = document.getElementById(
  "pagesosialmediamaadvertising"
);
let googleadvertising = document.getElementById("pagegoogleadvertising");
let videoproduction = document.getElementById("pagevideoproduction");
let visualproduction = document.getElementById("pagevisualproduction");
let searchengine = document.getElementById("pagesearchengine");
// page 4 end

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

// AKHIR KHUSUS PAGE 1

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
  if (value === "item23") {
    creativeproduction.classList.remove("hidden");
  }
  if (value === "item24") {
    sosialmediamanagement.classList.remove("hidden");
  }
  if (value === "item25") {
    googlebussinessoptimization.classList.remove("hidden");
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

// AKHIR KHUSUS PAGE 2

// KHUSUS PAGE WEBSITE

let website1 = document.getElementById("website1");
let website2 = document.getElementById("website2");

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
  value = website2.id;
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

nextweb.addEventListener("click", function () {
  website.classList.add("hidden");
  if (value === "website1") {
    hubspotmarketing.classList.remove("hidden");
  }
  if (value === "website2") {
    wordpress.classList.remove("hidden");
  }

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
  value = advertising2.id;
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

nextads.addEventListener("click", function () {
  advertising.classList.add("hidden");
  if (value === "advertising1") {
    sosialmediamaadvertising.classList.remove("hidden");
  }
  if (value === "advertising2") {
    googleadvertising.classList.remove("hidden");
  }

  advertising1.classList.remove("bg-red-500");
  advertising1.classList.remove("text-white");
  advertising2.classList.remove("bg-red-500");
  advertising2.classList.remove("text-white");

  nextads.classList.add("hidden");
});

// AKHIR KHUSUS PAGE ADVERTISING

// KHUSUS PAGE CREATIVE PRODUCTION

let creative1 = document.getElementById("creative1");
let creative2 = document.getElementById("creative2");

let nextcrepro = document.getElementById("nextcrepro");
let backcrepro = document.getElementById("backcrepro");

creative1.addEventListener("click", function () {
  value = creative1.id;
  creative1.classList.add("bg-red-500");
  creative1.classList.add("text-white");

  creative2.classList.remove("bg-red-500");
  creative2.classList.remove("text-white");

  nextcrepro.classList.remove("hidden");
  console.log(value);
});

creative2.addEventListener("click", function () {
  value = creative2.id;
  creative2.classList.add("bg-red-500");
  creative2.classList.add("text-white");

  creative1.classList.remove("bg-red-500");
  creative1.classList.remove("text-white");

  nextcrepro.classList.remove("hidden");
  console.log(value);
});

backcrepro.addEventListener("click", function () {
  creativeproduction.classList.add("hidden");
  page2.classList.remove("hidden");

  creative1.classList.remove("bg-red-500");
  creative1.classList.remove("text-white");
  creative2.classList.remove("bg-red-500");
  creative2.classList.remove("text-white");

  nextcrepro.classList.add("hidden");
});

nextcrepro.addEventListener("click", function () {
  creativeproduction.classList.add("hidden");
  if (value === "creative1") {
    videoproduction.classList.remove("hidden");
  }
  if (value === "creative2") {
    visualproduction.classList.remove("hidden");
  }

  creative1.classList.remove("bg-red-500");
  creative1.classList.remove("text-white");
  creative2.classList.remove("bg-red-500");
  creative2.classList.remove("text-white");

  nextcrepro.classList.add("hidden");
});

// AKHIR KHUSUS PAGE CREATIVE PRODUCTION

// KHUSUS PAGE SOSIAL MEDIA MANAGEMENT

let sosmed1 = document.getElementById("sosmed1");
let sosmed2 = document.getElementById("sosmed2");

let homesos = document.getElementById("homesos");
let backsos = document.getElementById("backsos");

sosmed1.addEventListener("click", function () {
  value = sosmed1.id;
  sosmed1.classList.add("bg-red-500");
  sosmed1.classList.add("text-white");

  sosmed2.classList.remove("bg-red-500");
  sosmed2.classList.remove("text-white");

  nextsos.classList.remove("hidden");
  console.log(value);
});

sosmed2.addEventListener("click", function () {
  value = sosmed2.textContent;
  sosmed2.classList.add("bg-red-500");
  sosmed2.classList.add("text-white");

  sosmed1.classList.remove("bg-red-500");
  sosmed1.classList.remove("text-white");

  nextsos.classList.remove("hidden");
  console.log(value);
});

backsos.addEventListener("click", function () {
  sosialmediamanagement.classList.add("hidden");
  page2.classList.remove("hidden");

  sosmed1.classList.remove("bg-red-500");
  sosmed1.classList.remove("text-white");
  sosmed2.classList.remove("bg-red-500");
  sosmed2.classList.remove("text-white");

  nextsos.classList.add("hidden");
});

homesos.addEventListener("click", function () {
  sosialmediamanagement.classList.add("hidden");
  page1.classList.remove("hidden");
});

// AKHIR KHUSUS PAGE SOSIAL MEDIA MANAGEMENT

// KHUSUS PAGE GOOGLE BUSSINESS OPTIMIZITATION

let seo = document.getElementById("seo");

let nextseo = document.getElementById("nextseo");
let backseo = document.getElementById("backseo");

seo.addEventListener("click", function () {
  value = seo.id;
  seo.classList.add("bg-red-500");
  seo.classList.add("text-white");

  nextseo.classList.remove("hidden");
  console.log(value);
});

backseo.addEventListener("click", function () {
  googlebussinessoptimization.classList.add("hidden");
  page2.classList.remove("hidden");

  seo.classList.remove("bg-red-500");
  seo.classList.remove("text-white");

  nextseo.classList.add("hidden");
});

nextseo.addEventListener("click", function () {
  googlebussinessoptimization.classList.add("hidden");
  searchengine.classList.remove("hidden");

  seo.classList.remove("bg-red-500");
  seo.classList.remove("text-white");

  nextseo.classList.add("hidden");
});

// AKHIR KHUSUS PAGE GOOGLE BUSSINESS OPTIMIZITATION

// PAGE 4

// KHUSUS HUBSPOT MARKETING

let backhub = document.getElementById("backhub");
let homehub = document.getElementById("homehub");

backhub.addEventListener("click", function () {
  hubspotmarketing.classList.add("hidden");
  website.classList.remove("hidden");
});

homehub.addEventListener("click", function () {
  hubspotmarketing.classList.add("hidden");
  page1.classList.remove("hidden");
});

// AKHIR KHUSUS PAGE HUBSPOT MARKETING

// KHUSUS WORDPRESS

let backwordpress = document.getElementById("backwordpress");
let homewordpress = document.getElementById("homewordpress");

backwordpress.addEventListener("click", function () {
  wordpress.classList.add("hidden");
  website.classList.remove("hidden");
});

homewordpress.addEventListener("click", function () {
  wordpress.classList.add("hidden");
  page1.classList.remove("hidden");
});

// AKHIR KHUSUS PAGE WORDPRESS

// KHUSUS SOSMED ADVERTISING

let backsosmedads = document.getElementById("backsosmedads");
let homesosmedads = document.getElementById("homesosmedads");

backsosmedads.addEventListener("click", function () {
  sosialmediamaadvertising.classList.add("hidden");
  advertising.classList.remove("hidden");
});

homesosmedads.addEventListener("click", function () {
  sosialmediamaadvertising.classList.add("hidden");
  page1.classList.remove("hidden");
});

// AKHIR KHUSUS PAGE SOSMED ADVERTISING

// KHUSUS GOOGLE ADVERTISING

let backgoogleads = document.getElementById("backgoogleads");
let homegoogleads = document.getElementById("homegoogleads");

backgoogleads.addEventListener("click", function () {
  googleadvertising.classList.add("hidden");
  advertising.classList.remove("hidden");
});

homegoogleads.addEventListener("click", function () {
  googleadvertising.classList.add("hidden");
  page1.classList.remove("hidden");
});

// AKHIR KHUSUS PAGE GOOGLE ADVERTISING

// KHUSUS VIDEO PRODUCTION

let backvideoproduction = document.getElementById("backvideoproduction");
let homevideoproduction = document.getElementById("homevideoproduction");

backvideoproduction.addEventListener("click", function () {
  videoproduction.classList.add("hidden");
  creativeproduction.classList.remove("hidden");
});

homevideoproduction.addEventListener("click", function () {
  videoproduction.classList.add("hidden");
  page1.classList.remove("hidden");
});

// AKHIR KHUSUS PAGE VIDEO PRODUCTION

// KHUSUS VISUAL PRODUCTION

let backvisualproduction = document.getElementById("backvisualproduction");
let homevisualproduction = document.getElementById("homevisualproduction");

backvisualproduction.addEventListener("click", function () {
  visualproduction.classList.add("hidden");
  creativeproduction.classList.remove("hidden");
});

homevisualproduction.addEventListener("click", function () {
  visualproduction.classList.add("hidden");
  page1.classList.remove("hidden");
});

// AKHIR KHUSUS PAGE VISUAL PRODUCTION

// KHUSUS SEARCH ENGINE OPTIMIZITATION

let backsearchengine = document.getElementById("backsearchengine");
let homesearchengine = document.getElementById("homesearchengine");

backsearchengine.addEventListener("click", function () {
  searchengine.classList.add("hidden");
  googlebussinessoptimization.classList.remove("hidden");
});

homesearchengine.addEventListener("click", function () {
  searchengine.classList.add("hidden");
  page1.classList.remove("hidden");
});

// AKHIR KHUSUS PAGE SEARCH ENGINE OPTIMIZITATION