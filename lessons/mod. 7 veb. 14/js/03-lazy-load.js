/*
 * Ленивая загрузка изображений (концепция)
 * - нативная поддержка
 * - событие загрузки изображения
 */

const lazyImages = document.querySelectorAll('img[loading="lazy"]');

lazyImages.forEach(image => {
    image.addEventListener('load', onImageLoaded, {once: true});
})

function onImageLoaded (evt) {
    console.log('картинка завантажилась');
    evt.target.classList.add('appear')
}