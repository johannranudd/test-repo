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

// const ul1 = document.querySelector(".ul1");
// const ul2 = document.querySelector(".ul2");
// const ul3 = document.querySelector(".ul3");
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

// !test
// // createItem
// function createItem(item) {
//   const listItem = document.createElement("li");
//   listItem.classList.add("flexing");
//   listItem.innerHTML = `<span>${item.name}</span>
//     <span>${item.category}</span>
//     <span>${item.start}</span>
//     <span>${item.end}</span>`;

//   return listItem;
// }
// // one has been returned

// // map and display items
// function displayItem(array, ulList) {
//   array.map((mapItem) => {
//     ulList.appendChild(createItem(mapItem));
//   });
// }

// // choose array to sort (in this case by start)
// function sortBy(arr) {
//   arr.sort((a, b) => {
//     if (a.start > b.start) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });
// }
// // display items in the DOM

// // sortBy(companies);
// // displayItem(companies, ul1)

// // filter items
// function filterByStartAndCategory(array, val) {
//   const filterArr = array.filter((item) => {
//     return item.start >= val || item.category === val;
//   });
//   return filterArr;
// }

// // displayItem(filterByStartAndCategory(companies, 'Retail'), ul2)

// function filterByMoreThanTenYears(arr, val) {
//   const filterArr = arr.filter((item) => {
//     return item.end - item.start >= val;
//   });
//   return filterArr;
// }
// // filterByMoreThanTenYears(companies, 10)
// // displayItem(filterByMoreThanTenYears(companies, 1999), ul3)
// // displayItem(filterByMoreThanTenYears(companies, 10), ul3)

// const buttons = document.querySelectorAll("#btn");
// let editFlag = false;

// buttons.forEach(function(btn) {
//     btn.addEventListener("click", function(e) {
//         const id = e.target.dataset.id;
//         ul1.innerHTML = '';
        
//         if (id === "10-years-pluss") {
//           displayItem(filterByMoreThanTenYears(companies, 10), ul1);
//         } else if (id === "Retail") {
//           displayItem(filterByStartAndCategory(companies, "Retail"), ul1);
//         } 
        
//     })
    
    
// })
 

// sortBy(companies);

// !end test

// !test works
// sort
// const sortedCompanies = companies.sort((a, b) => {
//   if (a.start > b.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// function createItem(create) {
//   const listItem = document.createElement("li");
//   listItem.classList.add("flexing");
//   listItem.innerHTML = `<span>${create.name}</span>
//               <span>${create.category}</span>
//               <span>${create.start}</span>
//               <span>${create.end}</span>`;
//   return listItem;
// }

// // console.log(createItem(companies));

// function mapFunction(companyList, uList) {
//   companyList.map((mapItem) => {
//     uList.appendChild(createItem(mapItem));
//   });
// }

// const filterCompanies = companies.filter((item) => {
//   return item.category === "Retail";
// });

// const startedBefore = companies.filter(item => {
//     return item.start > 1992;
// })

// mapFunction(companies, ul1);
// mapFunction(startedBefore, ul2);

// function mapFunction(companyList) {
//     companyList.map((mapItem) => {
//         const listItem = document.createElement("li");
//         listItem.classList.add("flexing");
//         listItem.innerHTML = `<span>${mapItem.name}</span>
//               <span>${mapItem.category}</span>
//               <span>${mapItem.start}</span>
//               <span>${mapItem.end}</span>`;
//               function chooseUl(uList) {
//                 uList.appendChild(listItem);
//               }
//               chooseUl(ul1)
//       });

// }

// mapFunction(filterCompanies);


// !new test

const ul1 = document.querySelector(".ul1");
const buttons = document.querySelector('.button-div');

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

buttons.addEventListener("click", function(e) {
  const id = e.target.dataset.id;
  if (id === 'Retail') {
    ul1.innerHTML = displayItem(companies);
  }
})

function createItem(item) {
  const listItem = 
}


function displayItem(array) {
  array.map(mapItem => {
    return `<span>${mapItem.name}</span>
    <span>${mapItem.category}</span>
    <span>${mapItem.start}</span>
    <span>${mapItem.end}</span>`;
  })
  return array;
}