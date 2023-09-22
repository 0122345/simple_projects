
const boxesContainer = document.getElementById('boxes');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'));

function createBoxes() {
    for(let j= 0; j < 4; j++){
        for(let k = 0; k < 4; k++) {
            const box = document.createElement('div')
            box.classList.add('box')
            box.style.backgroundPosition = `${-k * 125}px ${-j * 125}px`
            boxesContainer.appendChild(box);
        }
    }
}