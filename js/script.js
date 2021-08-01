const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');

const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

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

const sot = companies.sort(function(a, b) {
    if (a.start > b.start) {
        return 1
    } else {
        return -1
    }
}).filter(function(item) {
    if (item.start < 1995) {
        return item;
    }
});
console.log(sot);
// console.log(sot);
// const filt = companies.filter(function(item) {
//     if (item.start > 1995) {
//         return item;
//     }
// })
// console.log(filt);


companies.forEach(function(comp) {
    // console.log(comp.category);
        comp.category = 'wrfwsfwefwef';
        comp.name = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaah';
    
})

console.log(companies);