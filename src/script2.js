const botoes = document.querySelectorAll('.menu_toogle');
const lMainCard = document.querySelector('.main_card');
const cards = lMainCard.querySelectorAll('.card');
botoes.forEach((botao, card) => {    

    botao.addEventListener('click', () =>{
        const botaoActive = document.querySelector('.is-active');   
        botaoActive.classList.remove('is-active');
        botao.classList.add('is-active');

        const cardActive = document.querySelector('.card-active');
        cardActive.classList.remove('card-active');
        cards[card].classList.add('card-active');
    })
})