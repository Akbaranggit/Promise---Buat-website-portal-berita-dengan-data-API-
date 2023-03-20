// tampilan awal
fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=83e34568e80d4470bfa501380f65f0d6')
.then(respon => respon.json())
.then(hasil =>{
    let card = '';
    const data = hasil.articles;
    data.forEach(dt =>{
        card += isicard(dt)
      // cara 2 
        //data.forEach(parameter =>{
          //card += `
          // <div class="col-md-4 my-5">
          //   <div class="card">
          //     <img src="${parameter.urlToImage}" class="card-img-top">
          //     <div class="card-body">
          //       <h5 class="card-title">${parameter.title}</h5>
          //       <h6 class="card-subtitle mb-2 text-muted">${parameter.author}, ${parameter.publishedAt}</h6>
          //       <p class="card-text">${parameter.description}</p>
          //       <a href="${parameter.url}" class="btn btn-primary ">Read more...</a>
          //     </div>
          //   </div>
          // </div>`
    });
    document.getElementById("konten").innerHTML = card;
}).catch(err => console.log(err) );
//pencarian 
document.querySelector('.pencarian').addEventListener("click", function(){
  const go = document.querySelector('input')
  fetch(`https://newsapi.org/v2/everything?q=${go.value}&apiKey=83e34568e80d4470bfa501380f65f0d6`)
  .then(cari => cari.json())
  .then(keluarnya =>{
      let card = '';
      const tes = keluarnya.articles;
      tes.forEach(cr =>{
          card += isicard(cr)
      });
      document.getElementById("konten").innerHTML = card;
  }).catch(err=>{
    console.log(err);
  });
})
function isicard(parameter){
  return `<div class="col-md-4 my-5">
  <div class="card h-500" >
      <img src="${parameter.urlToImage}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${parameter.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${parameter.author}, ${parameter.publishedAt}</h6>
        <p class="card-text">${parameter.description}</p>
        <a href="${parameter.url}" class="btn btn-primary btn-sm">Read more...</a>
      </div>
    </div>
  </div>`
};

    


