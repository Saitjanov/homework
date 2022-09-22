let name = 'alex'
let money = 10000
let accaunt = 7777

let userName = prompt('Как вас зовут?').toLowerCase().trim()

if(userName === name.toLowerCase()); else{alert('Пользователь не найден')} {
    let userAcc = +prompt('Укажите ваш пороль')

    if(userAcc === accaunt) {
        let cashOut = +prompt('Сколько хотите снять?')

        if(cashOut <= money) {
            alert(`
            У вас было: ${money}
            У вас осталось: ${money - cashOut}
            `)
        } else{
            alert('У вас нет столько денег на счету')
        }
    }
}

let name2 = ''
let age = 22

if(name[0].toLowerCase() === 'a'); else if(age >= 20 && age <= 40){
    console.log('Заходи старина')
} else {
    console.log('МЫ тебя не звали')
}
