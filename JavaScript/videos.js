const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch(error => console.log(error)
    )
    
}

const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data => displayVideos(data.videos))
    .catch(error => console.log(error))
}

const displayVideos = (videos) =>{
    const videosContainer = document.getElementById('videos-container')
    for(const video of videos){
        console.log(video)
        const divCard = document.createElement('div')
        divCard.classList = 'card card-compact'
        divCard.innerHTML = `
        <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>`
  videosContainer.appendChild(divCard)
    }
}

const displayCategories = (data) =>{
    const buttonContainer = document.getElementById('button-container')
     for(const item of data){
        console.log(item)
        const button = document.createElement('button')
        button.classList = 'btn'
        button.innerText = item.category
        buttonContainer.appendChild(button)
     }
}


loadCategories();
loadVideos()