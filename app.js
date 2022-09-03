const loadCategoris = async() => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    showCategoris(data.data.news_category)


}
const showCategoris = (catagoris) => {
    console.log(catagoris)
    const newsItem = document.getElementById('news-item')
    newsItem.classList.add('d-flex')
    catagoris.forEach(catagory => {
        const li = document.createElement('li')
        li.innerHTML = `
        <a  href="#">${catagory. category_name}</a>
        `
        newsItem.appendChild(li)

    });

}
loadCategoris()