const loadNews = () =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
    .then(res => res.json())
    .then(data => displayNewsCat(data.data))
}
// display data
const displayNewsCat = (data) =>{
    const navbar = document.getElementById("nav");
    data.news_category.forEach((news) =>{
        // console.log(news)
        const createDiv = document.createElement('div');
        createDiv.classList.add('col', 'py-2');
        createDiv.innerHTML = `
        <a class="text-decoration-none" onclick="loadNewsDetails('${news.category_id}')" href="#">${news.category_name}</a>
        `;
        navbar.appendChild(createDiv);
    });
}
// load news details
const loadNewsDetails = (id) =>{
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayNewsDetails(data.data))
}
const displayNewsDetails = data =>{
    const container = document.getElementById('news-container');
    data.forEach( singleNews =>{
        console.log(singleNews)
        const {details, thumbnail_url, title, total_view, author} = singleNews;
        const createDiv = document.createElement('div');
        createDiv.innerHTML = `
        <div class="card mb-3">
            <div class="row">
                <div class="col-md-4">
                    <img src="${thumbnail_url}" class="img-fluid  rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <p class="card-text">
                        <small class="text-muted">Last updated 3 mins ago</small>
                        </p>
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${details.slice(1, 150)}....</p>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-center">
                            <img class="img-fluid rounded-circle" height="40" width="40" src="${author.img}" alt="">
                            <p class="mb-0 p-2">${author.name ? author.name : 'Author Not Available'}</p>
                        </div>
                        <div>
                            <h5 class="mb-0"><i class="fa-solid fa-eye"></i> ${total_view ? total_view : 'Not Active'}</h5>
                        </div>
                        <div>
                            <p class="p-2 mb-0"><i class="fa-solid fa-arrow-right"></i></p>
                        </div>
                    </div>
                    <p>Date: ${author.published_date}</p>
                </div>
            </div>
        </div>
        `;
        container.appendChild(createDiv)
    })
}
loadNews()

{/* <div class="card mb-3">
     <div class="row">
        <div class="col-md-4">
            <img src="..." class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a little bit longer.
                </p>
                <p class="card-text">
                 <small class="text-muted">Last updated 3 mins ago</small>
                </p>
            </div>
        </div>
    </div>
</div> */}