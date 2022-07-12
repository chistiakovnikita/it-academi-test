



const yourSurname = prompt('Ваша фамилия')
const yourName = prompt('Ваше имя')
const yourPatronymic = prompt('Ваше отчество')
const yourAge = prompt('Ваш возраст')
const yourGender = confirm('Ваш пол-мужской?')

const yourAgeDay = yourAge * 365

const afterFiveYears = Number(yourAge) + Number(5)


if (yourGender) {
    alert(`
    Ваше фио: ${yourSurname} ${yourName} ${yourPatronymic}
    Ваш возраст в годах: ${yourAge}
    Ваш возраст в днях: ${yourAgeDay}
    Через 5 лет вам будет: ${afterFiveYears}
    Ваш пол: мужской
    Вы на пенсии: нет`)

} else {

}



/*const yourSurname = prompt('Ваша фамилия')
const yourName = prompt('Ваше имя')
const yourPatronymic = prompt('Ваше отчество')
const yourAge = prompt('Ваш возраст')
const yourGender = confirm('Ваш пол-мужской?')

const yourAgeDay = yourAge * 365

const afterFiveYears = Number(yourAge) + Number(5)


yourGender ? alert (`Ваше фио: ${yourSurname} ${yourName} ${yourPatronymic}
    Ваш возраст в годах: ${yourAge}
    Ваш возраст в днях: ${yourAgeDay}
    Через 5 лет вам будет: ${afterFiveYears}
    Ваш пол: мужской
    Вы на пенсии: нет`) : ('')*/




