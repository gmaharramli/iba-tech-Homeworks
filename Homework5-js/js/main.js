const filter =  document.querySelector('.tabs');
const items = document.querySelectorAll('.tabs-item');
filter.addEventListener('click', (e) => {
    if(e.target.classList.contains('tabs-title')) {
        const title = e.target;
        const type = title.dataset.filterby || 'tabs-item';
        const isActive = title.classList.contains('active');
        if(!isActive) {
            document.querySelector('.tabs-title.active').classList.remove('active');
            title.classList.add('active');

            filterByClassName(items, type);
        }
    }
});

function filterByClassName(elements, className) {
    for(let element of elements) {
        element.hidden = !element.classList.contains(className);
    }
}
