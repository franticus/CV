const cards = document.querySelectorAll('.card');
const slideT = document.querySelector('.tech-slide');
const slideA = document.querySelector('.about-read-slide');
const slideP = document.querySelector('.about-photo-slide')
const rev = document.querySelector('.title-wrapper')
const mobileBtnT = document.querySelector('.mobile-left')
const mobileBtnA = document.querySelector('.mobile-right')
const hide = document.querySelector('.hide')

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('mousemove', rotate);
    card.addEventListener('mouseout', reset)
    card.addEventListener('click', slideClick)
}

hide.addEventListener('click', hideAll)
function reset(e) {
    const cardItem = this.querySelector('.card-item');
    const halfHeight = cardItem.offsetHeight / 2
    const halfWidth = cardItem.offsetWidth / 2

    cardItem.style.transform = `rotate(0)`
}
function rotate(e) {
    const cardItem = this.querySelector('.card-item');
    const halfHeight = cardItem.offsetHeight / 2
    const halfWidth = cardItem.offsetWidth / 2
    cardItem.style.transform =
        `scale(1.1) rotateX(${-(e.offsetY - halfHeight) / 12}deg)
        rotateY(${(e.offsetX - halfWidth) / 12}deg)`
}

mobileBtnT.addEventListener('click', () => {
    hide.style.display = 'block'
    rev.style.transformOrigin = 'top left'
    slideA.style.transform = 'scaleX(0)'
    slideP.style.transform = 'translateX(-50%) scaleY(0)'
    slideT.style.transform = slideT.style.transform === 'scaleX(1)' ? 'scaleX(0)' : 'scaleX(1)'
    rev.style.transform = slideT.style.transform === 'scaleX(1)' ? 'rotateY(30deg)' : 'rotateY(0deg)'
})
mobileBtnA.addEventListener('click', () => {
    hide.style.display = 'block'
    rev.style.transformOrigin = 'top right'
    slideT.style.transform = 'scaleX(0)'
    slideP.style.transform = 'translateX(-50%) scaleY(0)'
    slideA.style.transform = slideA.style.transform === 'scaleX(1)' ? 'scaleX(0)' : 'scaleX(1)'
    rev.style.transform = slideA.style.transform === 'scaleX(1)' ? 'rotateY(-30deg)' : 'rotateY(0deg)'
})

function slideClick(e) {
    hide.style.display = 'block'
    if (e.target.id == 1) {
        rev.style.transformOrigin = 'top left'
        slideT.style.transform = slideT.style.transform === 'scaleX(1)' ? 'scaleX(0)' : 'scaleX(1)'
        rev.style.transform = slideT.style.transform === 'scaleX(1)' ? 'rotateY(30deg)' : 'rotateY(0deg)'
    } else if (e.target.id == 3) {
        rev.style.transformOrigin = 'top right'
        slideA.style.transform = slideA.style.transform === 'scaleX(1)' ? 'scaleX(0)' : 'scaleX(1)'
        rev.style.transform = slideA.style.transform === 'scaleX(1)' ? 'rotateY(-30deg)' : 'rotateY(0deg)'
    } else if (e.target.id == 2) {
        rev.style.transformOrigin = 'top center'
        slideP.style.transform = slideP.style.transform === 'translateX(-50%) scaleY(1)' ? 'translateX(-50%)' +
            ' scaleY(0)' : 'translateX(-50%) scaleY(1)'
        rev.style.transform = slideP.style.transform === 'translateX(-50%) scaleY(1)' ? 'rotateX(-50deg)' : 'rotateX(0deg)'
    }
}

function hideAll(e) {
    hide.style.display = 'none'
    rev.style.transform = 'rotateY(0deg)'
    slideT.style.transform = 'scaleX(0)'
    slideA.style.transform = 'scaleX(0)'
    slideP.style.transform = 'translateX(-50%)' + ' scaleY(0)'
}

slideT.addEventListener('click', sliderHideR)
slideA.addEventListener('click', sliderHideL)
slideP.addEventListener('click', sliderHideP)

function sliderHideP() {
    hide.style.display = 'none'
    slideP.style.transform = slideP.style.transform === 'translateX(-50%) scaleY(1)' ? 'translateX(-50%)' +
        ' scaleY(0)' : 'translateX(-50%) scaleY(1)'
    rev.style.transform = slideP.style.transform === 'translateX(-50%) scaleY(1)' ? 'rotateX(-50deg)' : 'rotateX(0deg)'
}
function sliderHideR() {
    hide.style.display = 'none'
    slideT.style.transform = slideT.style.transform === 'scaleX(0)' ? 'scaleX(1)' : 'scaleX(0)'
    rev.style.transform = slideT.style.transform === 'scaleX(1)' ? 'rotateY(30deg)' : 'rotateY(0deg)'
}
function sliderHideL() {
    hide.style.display = 'none'
    slideA.style.transform = slideA.style.transform === 'scaleX(0)' ? 'scaleX(1)' : 'scaleX(0)'
    rev.style.transform = slideA.style.transform === 'scaleX(1)' ? 'rotateY(30deg)' : 'rotateY(0deg)'
}