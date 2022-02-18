//랜덤 숫자 함수 만들기
//input 숫자 받기
//버튼 활성화 (go, reset)
//go는 조건만들어주기/ 맞추면 정답!
//reset은 비우기 & 초기화!
//남은 기회 조건식
//유저가 1~100 범위 밖 벗어나면 알려준다. 이미 입력한 것 또 입력해도 알려주기, 기회깎지 않는다.

//go,down일 때 이미지 바꿔주기
let num = 0;
let inputBox = document.getElementById("input-box");
let buttonGo = document.getElementById("button-go");
let buttonReset = document.getElementById("button-reset");
let resultMessage = document.getElementById("result-message");
let remainOppor = document.getElementById("remain-oppor");
let mainImg = document.querySelector(".main-img")
let history = [];

remainOppor.textContent = `남은 기회 : 5`
let chance = 5

buttonGo.addEventListener("click", go);
buttonReset.addEventListener("click", reset);
inputBox.addEventListener("focus", function () {
    inputBox.value = ""
})



function randomNumber() {
    num = Math.floor(Math.random() * 50)+1;
    console.log(num)
}
randomNumber()


function reset() {
    inputBox.value = "";
    randomNumber();
    // chance;
    // console.log(chance)
    chance = 5;
    history = [];
    remainOppor.textContent = `남은 기회 : 5`;
    resultMessage.textContent = "죽기 싫다면 맞춰라";
    buttonGo.disabled = false;

}


function go() {
    let userValue = inputBox.value; //<-전역변수로 설정하면 왜 안될까?
    // console.log(userValue)
    if (userValue > 50 || userValue < 1) {
         resultMessage.textContent = "1부터 50 사이의 숫자를 입력해주세요"
         return
    }
    if (history.includes(userValue)) {
        resultMessage.textContent = "중복된 값입니다"
        return
    }

    chance--;
    remainOppor.textContent = `남은 기회 : ${chance}`
    history.push(userValue);
    if (chance < 1) {
        buttonGo.disabled = true;
        remainOppor.textContent = `정답은 : ${num}`
    }

    if (num > userValue) {
        resultMessage.textContent = "Up!!"
        mainImg.src="https://media0.giphy.com/media/3ov9jExd1Qbwecoqsg/200.gif";
        
    } else if (num < userValue) {
        resultMessage.textContent = "Down!!"
        mainImg.src="https://media.giphy.com/media/r2puuhrnjG7vy/giphy.gif";
    } else {
        resultMessage.textContent = "정답!!";
        buttonGo.disabled = true;
        mainImg.src="https://media.tenor.com/images/0a81b89954678ebe228e15e35044f7a5/tenor.gif";
    }

    console.log(history)
}
// go()


