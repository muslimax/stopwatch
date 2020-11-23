// document -это вся html страница
// document.querySelector('selector') - подключается к одному тегу по имени селектору;
// возврается тег в виде объекта

// console.dir(document.querySelector(".s"));

const sec = document.querySelector('.s');// подключаемся к секундным стрелкам
const min = document.querySelector('.m');// подключаемся к минутным стрелкам
const hour = document.querySelector('.h');// подключаемся к часовым стрелкам
const hourNum = document.querySelector('.hours');// подключаемся к цифровым часам
const minutNum = document.querySelector('.minutes');// подключаемся к цифровым минутам

function clock() {
    // new Date - создает экземпляр Date, который возвращвет текущую дату и время
    let time = new Date;
    // .getSeconds()- возвращает секунды
    // .getMinutes()- возвращает минуты
    // .getHours()- возвращает часы
    // console.log(time.getSeconds());
    let seconds = time.getSeconds() * 6;
    let minutes = time.getMinutes() * 6;
    let hours = time.getHours() * 30;
    // console.dir(sec);
    sec.style.transform = `rotate(${seconds}deg)`
    min.style.transform = `rotate(${minutes}deg)`
    hour.style.transform = `rotate(${hours}deg)`
    hourNum.innerHTML = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    minutNum.innerHTML = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    setTimeout(() => { clock() }, 1000);
}
clock()


// рекурсия - это вызов самого себя, когда функция начинает саму себя вызывать

/*  let i = 0
function rec() {

    console.log(i++);
    if (i < 10) {
         rec()
    }

}
rec() */
// document.querySelectorAll('selector') подключается ко всем тегам по указанному селектору;
const links = document.querySelectorAll('.tabsItem'); // подключаемся к тегам li
const tabs = document.querySelectorAll('.tabsContentItem');// подключаемся к табам
for (let i = 0; i < links.length; i++) {
    //    console.dir(links[i]);

    // HTMLelement.addEventListener("событие", функция) - привязывает функцию (слушателя) к событию
    links[i].addEventListener("click", function (e) {
        e.preventDefault()// метод отменяет событию по умолчанию
        // console.log(e);
        // HTMLelement.classList.add("класс") - добавляет класс к тегу
        // HTMLelement.classList.contain("класс") - проверяет наличие класса у тега
        // HTMLelement.classList.remove("класс") - удаляет класс у тега
        for (let x = 0; x < links.length; x++) {
            links[x].classList.remove("active")
            tabs[x].classList.remove("active")
        }
        // this - возвращает тег на который нажал пользователь
        tab(this, tabs[i])


    })

    function tab(lins, tab) {
        lins.classList.add("active");
        tab.classList.add("active");
    }

}
//----------------------Секундомер-----------//

const stopH = document.querySelector('.stopwatch__hours');// подключаемся к часам секундомера
const stopM = document.querySelector('.stopwatch__minutes');// подключаемся к минутам секундомера
const stopS = document.querySelector('.stopwatch__seconds');// подключаемся к секундам секундомера
const btn = document.querySelector('.stopwatch__btn'); // подключаемся к кнопке секундомера
const span = document.querySelector('.tabsLink__span');

btn.addEventListener("click", function () {
    if (btn.innerHTML == "start") {
        btn.innerHTML = "stop";
        span.classList.add("active");
        timer();
    } else if (btn.innerHTML == "stop") {
        btn.innerHTML = "clear";
        span.classList.remove("active");
        span.classList.add("active_clear");
    } else if (btn.innerHTML == "clear") {
        btn.innerHTML = "start";
        span.classList.remove("active_clear");
        stopS.innerHTML = 0;
        stopM.innerHTML = 0;
        stopH.innerHTML = 0;
    }

})

function timer() {

    if (btn.innerHTML == "stop") {
        stopS.innerHTML++;
        if (stopS.innerHTML == 60) {
            stopS.innerHTML = 0;
            stopM.innerHTML++;
        }
        if (stopM.innerHTML == 60) {
            stopM.innerHTML = 0;
            stopH.innerHTML++;

        }
        if (stopH.innerHTML == 24) {
            stopS.innerHTM = 0;
            stopM.innerHTML = 0;
            stopH.innerHTML = 0;
        }
        setTimeout(() => { timer() }, 1000);
    }


}
