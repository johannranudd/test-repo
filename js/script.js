// const ul = document.querySelector("ul");
// const li = document.querySelectorAll("li");

// const companies = [
//   { name: "Company One", category: "Finance", start: 1981, end: 2004 },
//   { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
//   { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
//   { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
//   { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
//   { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
//   { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
//   { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
//   { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
// ];

// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// *forLoop
// for (let i = 0; i < li.length; i++) {
//     if (li[i].textContent == 'three') {
//         li[i].textContent = 'changed';
//     }
// }

// *forEach
// does not return, only changes
// const newArr = ages.filter(function(item) {
//     if (item >= 21) {
//         return item;
//     }
// })

// const newArr = companies.filter(item => item.category === 'Retail');

// console.log(newArr);

// *map
// creates new array
// const mapArr = companies.map(function(item) {
//     return `<li>${item.name} - [${item.start} - ${item.end}]</li>`;
// }).join("");

// const mapArr = companies.map(item => `<li>${item.name} - [${item.start} - ${item.end}]</li>`).join("");

// ul.innerHTML = mapArr;
// console.log(mapArr);

// const randomAge = ages.map(function(age) {

//     return Math.random() * age.length;
// })

// function random(age) {
//     for (let i = 0; i < age.length; i++) {
//         const randomNumber = Math.floor(Math.random() * age.length) + 1;
//         return age[randomNumber];
//     }
// }

// console.log(random(ages));

// const sot = companies.sort(function(a, b) {
//     if (a.start > b.start) {
//         return 1
//     } else {
//         return -1
//     }
// }).filter(function(item) {
//     if (item.start < 1995) {
//         return item;
//     }
// });

// sot.forEach(function(comp) {
//     if (comp.category == 'Retail') {
//         comp.category = 'wrfwsfwefwef';
//         comp.name = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaah';
//     }
// })

// console.log(sot);

// companies.sort(function (a, b) {
//   if (a.start > b.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// const filtComp = companies.filter(function (comp) {
//   if (comp.end - comp.start >= 10) {
//       comp.category = 'new';
//     return comp;
//   }
// });

// const mapComp = companies.map(function (comp) {
//   return comp.category;
// });

// console.log(filtComp);

// const ul = document.querySelector("ul");

const ul1 = document.querySelector(".ul1");
const ul2 = document.querySelector(".ul2");
const li = document.querySelectorAll("li");

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
// sort
function sortItems(sor) {
  sor.sort((a, b) => {
    if (a.start > b.start) {
      return 1;
    } else {
      return -1;
    }
  });
}
sortItems(companies);

// map
function mapItems(u) {
  companies
    .map((comp) => {
      const listItem = document.createElement("li");
      listItem.classList.add("flexing");
      listItem.innerHTML = `<span>${comp.name}</span>
        <span>${comp.category}</span>
        <span>${comp.start}</span>
        <span>${comp.end}</span>`;

      u.appendChild(listItem);
    })
    .join("");
}
mapItems(ul1);

function filterItems(f) {
  const filt = companies.filter((item) => {
    if (item.category === "Retail") {
      const listItem = document.createElement("li");
      listItem.classList.add("flexing");
      listItem.innerHTML = `<span>${item.name}</span>
        <span>${item.category}</span>
        <span>${item.start}</span>
        <span>${item.end}</span>`;

      f.appendChild(listItem);
    }
  });
  return filt;
  // mapItems(ul1)
}
filterItems(ul1)
// display
// function displayItems(d) {

// }

// displayItems()

// filter
// function filterItems(){
//     companies.filter(item => {
//         if (item.category !== 'Retail') {
//             // return mapItems(ul2)
//             return item
//         }

//     })
//     return mapItems(ul2)
// }

// filterItems();

// filterItems(mapItems(ul2))
