let firstPage = document.querySelector('.first-page'),
    phone = document.querySelector('.phone'),
    phone2 = document.querySelector('.phone-2'),
    phon = document.querySelector('.phon'),
    phon2 = document.querySelector('.phon-2'),
    tg2 = document.querySelector('.tg-2'),
    tg = document.querySelector('.tg'),
    clock = document.querySelector('.time'),
    clock2 = document.querySelector('.clock-2'),
    qiut10 = document.querySelector('.quit-10'),
    qiut11 = document.querySelector('.quit-11'),
    qiut12 = document.querySelector('.quit-12'),
    qiut13 = document.querySelector('.quit-13'),
    qiut14 = document.querySelector('.quit-14'),
    qiut15 = document.querySelector('.quit-15'),
    qiut16 = document.querySelector('.quit-16'),
    qiut17 = document.querySelector('.quit-17'),
    qiut18 = document.querySelector('.quit-18'),
    qiut19 = document.querySelector('.quit-19'),
    qiut20 = document.querySelector('.quit-20'),
    qiut21 = document.querySelector('.quit-21');

    
function time() {
    const newDate = new Date();

let topLeft = document.querySelector('.left span'),
    topLeft2 = document.querySelector('.left-2 span'),
    topLeft3 = document.querySelector('.left-3 span'),
    topLeft4 = document.querySelector('.left-4 span'),
    topLeft5 = document.querySelector('.left-5 span'),
    topLeft6 = document.querySelector('.left-6 span')

let hour = newDate.getHours(),
    minute = newDate.getMinutes();

if(hour < 10) {
    hour = '0' + hour
}

if(minute < 10) {
    minute = '0' + minute
}

topLeft.innerHTML = `${hour} : ${minute}`
topLeft2.innerHTML = `${hour} : ${minute}`
topLeft3.innerHTML = `${hour} : ${minute}`
topLeft4.innerHTML = `${hour} : ${minute}`
topLeft5.innerHTML = `${hour} : ${minute}`
topLeft6.innerHTML = `${hour} : ${minute}`


    setInterval(time, 1000);
}

time()

tg2.style.display = 'none'
phon.style.display = 'none'
phon2.style.display = 'none'
firstPage.style.display = 'none'
clock2.style.display = 'none'




let input = document.querySelector('.input'),
    show = document.querySelector('.show'),
    enter = document.querySelector('.enter'),
    come = document.querySelector('.come')

show.addEventListener('click', () => {
    if(input.type == "password"){
        input.type = "text"
    }else {
        input.type = 'password'
    }
})

enter.addEventListener('click', () => {
    if(input.value == "12345678") {
        firstPage.style.display = 'block'
        come.style.display = 'none'
        input.value = ''
        input.type = 'password'
    }else {
        alert("Parol xato, iltimos qaytadan urunib ko'ring")
        input.value = ''
        input.type = 'password'
    }
})

let off = document.querySelector('.off')

off.addEventListener('click', () => {
    tg2.style.display = 'none'
    phon.style.display = 'none'
    phon2.style.display = 'none'
    firstPage.style.display = 'none'
    clock2.style.display = 'none'
    come.style.display = 'block'
})


let timer2 = document.querySelector('.timer2'),
    secundnomer2 = document.querySelector('.secundnomer2')

secundnomer2.style.display = 'none'

let p = document.querySelector('.secundnomer'),
    p2 = document.querySelector('.timer')

p.classList.add('active')


p.addEventListener('click', () => {
    p.classList.add('active')
    p2.classList.remove('active')

    timer2.style.display = 'block'
    secundnomer2.style.display = 'none'

})

p2.addEventListener('click', () => {
    p.classList.remove('active')
    p2.classList.add('active')

    timer2.style.display = 'none'
    secundnomer2.style.display = 'block'
})

const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
let h1 = document.querySelector('.h2')
let count = 0;
let intervalId;

start.addEventListener('click', () => {
    intervalId = setInterval(() => {
        h1.innerHTML = count;
        count++;
    }, 100);

})

stop.addEventListener('click', () => {
    clearInterval(intervalId)
})



phone.addEventListener('click', () => {
    phon.style.display = 'block'
    firstPage.style.display = 'none'
})

phone2.addEventListener('click', () => {
    phon2.style.display = 'block'
    firstPage.style.display = 'none'
})

tg.addEventListener('click', () => {
    tg2.style.display = 'block'
    firstPage.style.display = 'none'
})

clock.addEventListener('click', () => {
    clock2.style.display = 'block'
    firstPage.style.display = 'none'
})


qiut10.addEventListener('click', () => {
    firstPage.style.display = 'block'
    phon.style.display = 'none'
})

qiut11.addEventListener('click', () => {
    firstPage.style.display = 'block'
    phon.style.display = 'none'
})

qiut12.addEventListener('click', () => {
    firstPage.style.display = 'block'
    phon.style.display = 'none'
})

qiut13.addEventListener('click', () => {
    firstPage.style.display = 'block'
    phon2.style.display = 'none'
})

qiut14.addEventListener('click', () => {
    firstPage.style.display = 'block'
    phon2.style.display = 'none'
})

qiut15.addEventListener('click', () => {
    firstPage.style.display = 'block'
    phon2.style.display = 'none'
})

qiut16.addEventListener('click', () => {
    firstPage.style.display = 'block'
    tg2.style.display = 'none'
})

qiut17.addEventListener('click', () => {
    firstPage.style.display = 'block'
    tg2.style.display = 'none'
})

qiut18.addEventListener('click', () => {
    firstPage.style.display = 'block'
    tg2.style.display = 'none'
})

qiut19.addEventListener('click', () => {
    firstPage.style.display = 'block'
    clock2.style.display = 'none'
})

qiut20.addEventListener('click', () => {
    firstPage.style.display = 'block'
    clock2.style.display = 'none'
})

qiut21.addEventListener('click', () => {
    firstPage.style.display = 'block'
    clock2.style.display = 'none'
})



function clocks() {
    const newDate2 = new Date()

    let hour2 = newDate2.getHours(),
        minute2 = newDate2.getMinutes(),
        second2 = newDate2.getSeconds();


        if(hour2 < 10) {
            hour2 = '0' + hour2
        }
        
        if(minute2 < 10) {
            minute2 = '0' + minute2
        }

        if(second2 < 10) {
            second2 = '0' + second2
        }

    let nowTime = document.querySelector('.nowTime')
    

    nowTime.innerHTML = `${hour2} : ${minute2} : ${second2}`



    setInterval(clocks ,1000);
}

clocks()


