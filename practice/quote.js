const apiurl = "https://api.quotable.io/random";

const quote = document.getElementById('quote')
const author = document.getElementById('author')
const button = document.getElementById('btn')


button.addEventListener('click',()=>{
  fetch(apiurl)
  .then(response => {
    if(response.ok){
      return response.json();
    }
    throw new Error("Network response was not ok.");
  })
  .then(data => {
    quote.innerHTML = `"...${data.content}...,"`;
    author.innerHTML = `- ${data.author}`;
  })
  .catch(error =>{
    console.log('There was an error : ', error);
  })
})