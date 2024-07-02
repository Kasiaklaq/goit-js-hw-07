const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('.item');

console.log(`Liczba kategorii: ${categoryItems.length}`);


categoryItems.forEach(item => {
  
  const categoryTitle = item.querySelector('h2').textContent;

  const categoryElements = item.querySelectorAll('ul li').length;


  console.log(`Kategoria: ${categoryTitle}`);
  console.log(`Liczba elementów: ${categoryElements}`);
});