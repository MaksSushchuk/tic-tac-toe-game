const gameParent = document.querySelector('.game'),
 gameBlock = document.querySelectorAll('.game__block'),
 winBlock = document.querySelector('.game__win'),
 btnReset = document.querySelector('.game__reset')


let k = 0,
i = 0;

function showCrossOrCircle(i){

    if(k%2 === 0){
        gameBlock[i].classList.add('game__block__cross')
    }
    else{
        gameBlock[i].classList.add('game__block__circle')
    }
    k++;

}


function hideCross(){
    gameBlock.forEach(item =>{
        item.classList.remove('game__block__cross')
        item.classList.remove('game__block__circle')
    })
}

function showWinBlockCross(){
    winBlock.style.display = 'flex';
    winBlock.textContent = 'Хрестики перемогли';

    gameParent.removeEventListener('click', show);
}

function showWinBlockСircle(){
    winBlock.style.display = 'flex';
    winBlock.textContent = 'Нолики перемогли';

    gameParent.removeEventListener('click', show);
}
function checkWin(){

    i++;
    console.log(i)
     if(i === 9){
        winBlock.style.display = 'flex';
        winBlock.textContent = 'Нічия';
        gameParent.removeEventListener('click', show);
    }

    //cross
    if(gameBlock[0].classList.contains('game__block__cross') && gameBlock[1].classList.contains('game__block__cross') && gameBlock[2].classList.contains('game__block__cross')){
        showWinBlockCross()
    }
    if(gameBlock[3].classList.contains('game__block__cross') && gameBlock[4].classList.contains('game__block__cross') && gameBlock[5].classList.contains('game__block__cross')){
        showWinBlockCross()
    }
    if(gameBlock[6].classList.contains('game__block__cross') && gameBlock[7].classList.contains('game__block__cross') && gameBlock[8].classList.contains('game__block__cross')){
        showWinBlockCross()
    }
    if(gameBlock[0].classList.contains('game__block__cross') && gameBlock[3].classList.contains('game__block__cross') && gameBlock[6].classList.contains('game__block__cross')){
        showWinBlockCross()
    }
    if(gameBlock[1].classList.contains('game__block__cross') && gameBlock[4].classList.contains('game__block__cross') && gameBlock[7].classList.contains('game__block__cross')){
        showWinBlockCross()
    }
    if(gameBlock[2].classList.contains('game__block__cross') && gameBlock[5].classList.contains('game__block__cross') && gameBlock[8].classList.contains('game__block__cross')){
        showWinBlockCross()
    }
    if(gameBlock[0].classList.contains('game__block__cross') && gameBlock[4].classList.contains('game__block__cross') && gameBlock[8].classList.contains('game__block__cross')){
        showWinBlockCross()
    }
    if(gameBlock[2].classList.contains('game__block__cross') && gameBlock[4].classList.contains('game__block__cross') && gameBlock[6].classList.contains('game__block__cross')){
        showWinBlockCross()
    }

    //circle
    if(gameBlock[0].classList.contains('game__block__circle') && gameBlock[1].classList.contains('game__block__circle') && gameBlock[2].classList.contains('game__block__circle')){
        showWinBlockСircle()
    }
    if(gameBlock[3].classList.contains('game__block__circle') && gameBlock[4].classList.contains('game__block__circle') && gameBlock[5].classList.contains('game__block__circle')){
        showWinBlockСircle()
    }
    if(gameBlock[6].classList.contains('game__block__circle') && gameBlock[7].classList.contains('game__block__circle') && gameBlock[8].classList.contains('game__block__circle')){
        showWinBlockСircle()
    }
    if(gameBlock[0].classList.contains('game__block__circle') && gameBlock[3].classList.contains('game__block__circle') && gameBlock[6].classList.contains('game__block__circle')){
        showWinBlockСircle()
    }
    if(gameBlock[1].classList.contains('game__block__circle') && gameBlock[4].classList.contains('game__block__circle') && gameBlock[7].classList.contains('game__block__circle'))
    {
        showWinBlockСircle()
    }
    if(gameBlock[2].classList.contains('game__block__circle') && gameBlock[5].classList.contains('game__block__circle') && gameBlock[8].classList.contains('game__block__circle')){
        showWinBlockСircle()
    }
    if(gameBlock[0].classList.contains('game__block__circle') && gameBlock[4].classList.contains('game__block__circle') && gameBlock[8].classList.contains('game__block__circle')){
        showWinBlockСircle()
    }
    if(gameBlock[2].classList.contains('game__block__circle') && gameBlock[4].classList.contains('game__block__circle') && gameBlock[6].classList.contains('game__block__circle')){
        showWinBlockСircle()
    }



}
const show = (e) =>{
    const target = e.target;

    if(target && !target.classList.contains('game__block__circle') &&
      !target.classList.contains('game__block__cross'))
      {

        gameBlock.forEach((item,i) =>{
            if(target == item ){
                showCrossOrCircle(i)
            }

        })

    }

    checkWin()
}

gameParent.addEventListener('click', show)


btnReset.addEventListener('click', (e)=>{
    hideCross()
    winBlock.style.display = 'none';
    gameParent.addEventListener('click', show);
    k = 0;
    i = 0;
})
