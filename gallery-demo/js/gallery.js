// console.log('gallery.js is loaded');

let gal = document.querySelector('#gallery');
console.log(gal);

const thumbnails = document.querySelectorAll('figure');
// console.log(thumbnails);

const modal = document.querySelector('dialog');

thumbnails.forEach(thumb => {
  //console.log(thumb);
  thumb.addEventListener('click', showModal);
})
for(i=0;i<thumbnails.length;i++){
  console.log(i);
}

function showModal(event){
  //console.info(event.target.closest('figure').querySelector('img').src);
  let thumbImg = event.target.closest('figure').querySelector('img').src;
  thumbImg = thumbImg.substring(thumbImg.lastIndexOf('/'));
  // console.info(thumbImg);

  modal.querySelector('figure').innerHTML = event.target.closest('figure').innerHTML;
  modal.querySelector('img').src = 'images' + thumbImg;
  modal.showModal();
 
}