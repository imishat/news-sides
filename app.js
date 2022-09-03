const loadCategoris = async() => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    showCategoris(data.data.news_category)


}
const showCategoris = (catagoris) => {
    console.log(catagoris)
    const newsItem = document.getElementById('news-item')
    newsItem.classList.add('content')
    catagoris.forEach(catagory => {
        const li = document.createElement('li')
        li.innerHTML = `
        <li onclick="loadNews('${catagory.category_id?catagory.category_id:"no data found"}')" >${catagory. category_name}</li>
        `
        newsItem.appendChild(li)

    });

}


const loadNews = () => {
    fetch(`https://openapi.programming-hero.com/api/news/category/01`)
        .then(res => res.json())
        .then(data => displayNews(data.data))
}
const displayNews = newsToday => {
    const newsContainer = document.getElementById('news-box');
    newsToday.forEach(news => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('col')
        newsDiv.innerHTML = `
        <div class="card">
        <img src="${news.image_url}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${news.title}</h5>
            <p class="card-text">${news.details.slice(0, 150) + '...'}</p>
            <div class='d-flex m-2'>
            <img src="${news.author.img}" class='img-fluid img-width-25 w-50 h-100 my-auto rounded-circle' alt="">
            <div>
            <h3 class='m-3'>${news.author.name}</h3>
            <p class='m-3'>${news.author.published_date} </p>
            <h3 class='m-3'>total_view:${news.total_view}</h3>
           </div>

            </div>
        </div>
        
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newsDetalis" onclick='buttonModal("${news._id}")'>Details</button>

        
    </div>
    `;
        newsContainer.appendChild(newsDiv)

    })


}


loadCategoris()