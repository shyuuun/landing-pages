window.addEventListener('scroll', ()=> {
    const leftLine = document.querySelector('.line-left');
    const rightLine = document.querySelector('.line-right');
    const imgLeft = document.querySelector('.img-container.left');
    const imgRight = document.querySelector('.img-container.right');
    if(this.scrollY > 20){
        imgLeft.style.transform = 'translate(-100px, 0px)';
        imgRight.style.transform = 'translate(100px, 0px)';
        leftLine.style.width = '30%';
        rightLine.style.width = '30%';
    } else if (this.scrollY > 40) {
        imgLeft.style.transform = 'translate(-250px, 0px)';
        imgRight.style.transform = 'translate(250px, 0px)';
        leftLine.style.width = '20%';
        rightLine.style.width = '20%';
    } else {
        imgLeft.style.transform = 'translate(0px, 0px)';
        imgRight.style.transform = 'translate(0px, 0px)';
        leftLine.style.width = '35%'
        rightLine.style.width = '35%';
    }
});

function expand() {
    const expanded = document.getElementById('cards');
    expanded.classList.toggle('expand');
    setTimeout(1000, expanded.classList.toggle('default'));
    
}
