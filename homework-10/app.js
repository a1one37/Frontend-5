const galleryItems = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
  ];




//   const myMark = arr => {
//     return a.reducer((arr, item) => {
//       acc += `<li class="gallery__item">
//     <a
//       class="gallery__link"
//       href=${item.link}
//     >
//       <img
//         class="gallery__image"
//         src=${item.src}
//         data-source=${item.src}
//         alt="Tulips"
//       />
//     </a>
//   </li>`
//       return acc
//     }, ``)
//   };
  
  
// //   const iRef = document.querySelector('#i')
  
// //     iRef.innerHTML = myMark;
  
// //       }, '');
     
// //   };
   
//   listRef.innerHTML = galleryMarkup(gallery);

const galeryJs = document.querySelector('.js-gallery')
const lightBoxOverlay = document.querySelector('.lightbox__overlay')
const lightBoxContent = document.querySelector('.lightbox__content')
const lightBoxImage = document.querySelector('.lightbox__image')
const lightBoxButton = document.querySelector('.lightbox__button')
const jsLightBox = document.querySelector('.js-lightbox')

const markUp = galleryItems.reduce((acc, element) => {


acc += `<li class="gallery__item">
  <a
    class="gallery__link"
    href = ${element.original}
  >
    <img
      class="gallery__image"
      src=${element.preview}
      data-source=${element.original}
      alt=${element.description}
    />
  </a>
</li>`
  


return acc
}, ``)

galeryJs.innerHTML = markUp
const closemodal = (event) => {
  jsLightBox.classList.remove('is-open')
  lightBoxImage.src = '#'
}



const openningWindow = (event) =>{
event.preventDefault()



if(event.target.nodeName !== 'IMG'){
  return
}else{
  jsLightBox.classList.add('is-open')
  lightBoxImage.src = event.target.dataset.source
  lightBoxButton.addEventListener('click', closemodal)
}

}




galeryJs.addEventListener('click', openningWindow)


function closeModalByEsc() {
  
  jsLightBox.classList.remove('is-open');
  lightBoxImage.removeAttribute('src');
  lightBoxImage.removeAttribute('alt');

}

galeryJs.addEventListener('keydown', onPressEsc);

function onPressEsc(event) {
  if(event.code === 'Escape'){
    closeModalByEsc();

  }
  console.log(event.code);
}