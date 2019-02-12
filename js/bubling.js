const container = document.getElementsByClassName('container')[0];
const outer = container.children[0];
const inner = outer.firstElementChild;
const link = document.querySelector('.inner .btn');

container.onclick = (e) => {
    console.log('clicked on container')
};
outer.onclick = (e) => {
    console.log('clicked on outer');
    inner.hidden = true;
};
inner.onclick = (e) => {
    console.log('clicked on inner');
    e.stopPropagation();
};
link.onclick = e => {
    console.log('clicked on link');
}
