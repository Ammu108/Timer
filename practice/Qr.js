const button = document.getElementById('btn');

button.addEventListener('click', ()=>{
  const text = document.getElementById('text').value;
  const apiURL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
  const img = document.getElementById('img');
  const qrcode = apiURL;
  img.src = qrcode;
  img.style.border = '2px solid #434343';
})