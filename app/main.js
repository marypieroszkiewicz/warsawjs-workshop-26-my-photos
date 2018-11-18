// let allImages = [];
// let imagesList = new ImagesList({ source: localData });
// imagesList.render();

let imagesList = new ImagesList();

fetchImages({
    callback: () => {
        let carousel = new Carousel();
    }
});

// let parentEl = document.querySelector('.images-list');
// allImages = localData.map(function (image) {
//     let imageClass = new ImageClass(image);
//     return parentEl.appendChild(imageClass.render());
// });

let fileForm = new FileForm();
fileForm.render();
fileForm.bindEvent();

let lightBox = new LightBox();