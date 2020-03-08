//Services
let tabs = document.querySelector(".tabs");
let contents = document.querySelector(".tabs-content")

tabs.addEventListener('click', (e) => {
    const { target } = e;
    let tabsList = []
    for(let el of tabs.children) {
        el.classList.remove('active');
        tabsList.push(el);
    }
    target.classList.add('active');
    const indexOfActiveTab = tabsList.indexOf(document.querySelector('.active'))
    for(let el of contents.children) {
        el.classList.remove('act')
    }
    contents.children[indexOfActiveTab].classList.add('act')

})

//Work
const filter2 =  document.querySelector('.tabs2');
const items2 = document.querySelectorAll('.tabs-item2');
filter2.addEventListener('click', (e) => {
    if(e.target.classList.contains('tabs-title2')) {
        const title2 = e.target;
        const type2 = title2.dataset.filterby || 'tabs-item2';
        const isActive2 = title2.classList.contains('active');
        if(!isActive2) {
            document.querySelector('.tabs-title2.active').classList.remove('active');
            title2.classList.add('active');

            filter2ByClassName(items2, type2);
        }
    }
});

function filter2ByClassName(elems, className) {
    for(let elem of elems) {
        elem.hidden = !elem.classList.contains(className);
    }
}

//load more
function LoadMore() {
    for(let i=0;i<12;i++){
        let image = document.createElement('img');
        image.src = 'graphic-design1.jpg'

        document.getElementById('loadmores').appendChild(image);}
    document.getElementById('loads').style.visibility = 'hidden';
}