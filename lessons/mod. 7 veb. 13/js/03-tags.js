/*
 * Делегирование
 * - один из многих
 * - несколько из многих и Set
 */

// const tagsConatiner = document.querySelector('.js-tags');
// let selectedTag = null;

// tagsConatiner.addEventListener('click', onTagsContainerClick)

// function onTagsContainerClick (evt) {
//     if(evt.target.nodeName !== 'BUTTON') {
//         return;
//     }

//     const currentActiveBtn = document.querySelector('.tags__btn--active');

//     if(currentActiveBtn) {
//         currentActiveBtn.classList.remove('tags__btn--active');
//     }

//     // currentActiveBtn?.classList.remove('tags__btn--active');

//     const nextActiveBtn = evt.target;
//     nextActiveBtn.classList.add('tags__btn--active');
//     selectedTag = nextActiveBtn.dataset.value;

//     console.log(selectedTag);
// }

const tagsConatiner = document.querySelector('.js-tags');
const selectedTags = new Set();

tagsConatiner.addEventListener('click', onTagsContainerClick)

function onTagsContainerClick (evt) {
        if(evt.target.nodeName !== 'BUTTON') {
            return;
        }

        const btn = evt.target;
        const tag = btn.dataset.value;
        const isActive = btn.classList.contains('tags__btn--active');

        if(isActive) {
            selectedTags.delete(tag)
        } else {
            selectedTags.add(tag)
        }

        btn.classList.toggle('tags__btn--active');


        console.log(selectedTags);
    }