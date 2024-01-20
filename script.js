console.log('welcome to javascript')
let music = new Audio("")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("ting.mp3")
let turn = "X"
let Isgameover = false;

const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

const checkWin = () => {
    let box = document.getElementsByClassName('box');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
    ]
    wins.forEach(e => {
        if ((box[e[0]].innerText === box[e[1]].innerText) && (box[e[2]].innerText === box[e[1]].innerText) && (box[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = box[e[0]].innerText + "won"
            Isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '200px'
            document.querySelector('.line').getElementsByTagName('img')[0].style.width = '200px'

        }

    })
}

let boxes = document.getElementsByClassName("gamebox");
Array.from(boxes).forEach(element => {
    let box = element.querySelector('.box');
    element.addEventListener('click', () => {
        if (box.innerText === '') {
            box.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!Isgameover) {
                document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
            }
        }

    })
})
reset.addEventListener('click', () => {
    let box = document.querySelectorAll('.box');
    Array.from(box).forEach(element => {
        element.innertext = ""

    });
    turn = "X";
    Isgameover = false
    document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px'

})
