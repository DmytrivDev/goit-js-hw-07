const categoriesList = document.querySelectorAll('.item');
const catsLength = categoriesList.length;

console.log(`Number of categories: ${catsLength}`);

categoriesList.forEach(element => {
    const catName = element.querySelector('h2').textContent;
    const underCatsLength = element.querySelectorAll('li').length;

    console.log(`Category: ${catName}`);
    console.log(`Elements: ${underCatsLength}`);
});