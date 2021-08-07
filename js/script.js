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
let editFlag;
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
// displayItem(companies);
window.addEventListener("DOMContentLoaded", displayItem(companies))

buttons.addEventListener("click", function(e) {
  ul1.innerHTML = ''
  const id = e.target.dataset.id;
  if (id === 'Retail') {
    displayItem(filterByCategory);
    editFlag = 'Retail';
  } else if (id === '10-years-pluss') {
    displayItem(filterByYears);
    editFlag = '10-years-pluss';
  } else if (id === 'sortBtn' && editFlag === '10-years-pluss') {
    displayItem(sortItems(filterByYears)); // todo make this into a parameter that can be changed depending on what is currently showing in ul1
  } else if (id === 'sortBtn' && editFlag === 'Retail') {
    displayItem(sortItems(filterByCategory));
  }
  else {
    displayItem(sortItems(companies))
  }
})

function createItem(item) {
  const listItem = document.createElement('li');
  listItem.classList.add('flexing');
  listItem.innerHTML = `<span>${item.name}</span>
  <span>${item.category}</span>
  <span>${item.start}</span>
  <span>${item.end}</span>`;
  ul1.appendChild(listItem);
}

function displayItem(array) {
  array.map(mapItem => {
    return createItem(mapItem);
  })
}

const filterByCategory = companies.filter(filterItem => {
  return filterItem.category === "Retail";
})
const filterByYears = companies.filter(filterItem => {
  return (filterItem.end - filterItem.start) >= 10;
})

function sortItems(sortItem) {
  const sortByStart = sortItem.sort((a, b) => {
    if (a.start > b.start) {
      return 1
    } else {
      return -1
    }
  })
  return sortByStart;
}

