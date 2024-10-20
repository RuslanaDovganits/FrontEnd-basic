
const heightElement = document.querySelector('.height');
const weightElement = document.querySelector('.weight');
const buttonElement = document.querySelector('.result');
const bmiElement = document.querySelector('.bmi-description');
buttonElement.addEventListener('click', buttonClickHandler);

function buttonClickHandler(evt) {
evt.preventDefault();
    const height = +heightElement.value / 100;
    const weight = +weightElement.value;
    const bmi = weight / (height * height);
    buttonElement.textContent = ("Ваш BMI = " + bmi.toFixed(1));

    if (height < 0 || weight < 0) {
        alert("Пожалуйста введите корректные данные для роста и веса!")
       
    }
    

    let bmiCategory;

    if (bmi > 0 && bmi < 16) {
        bmiCategory = ('Недостаточный вес (сильная худоба). Обратитесь к врачу для диагностики. Необходимо увеличивать калорийность питания и проконсультироваться с диетологом.');
    } else if (bmi <= 16.9) {
        bmiCategory = ('Недостаточный вес (умеренная худоба). Рекомендуется увеличить потребление питательных веществ и проконсультироваться с врачом или диетологом.');
    } else if (bmi <= 18.4) {
        bmiCategory = ('Недостаточный вес (лёгкая худоба). Небольшой дефицит массы тела. Попробуйте увеличить калорийность рациона и следите за динамикой веса.');
    } else if (bmi <= 24.9) {
        bmiCategory = ('Нормальный диапазон.У вас нормальный вес. Поддерживайте активный образ жизни и сбалансированное питание. ');
    } else if (bmi <= 29.9) {
        bmiCategory = ('Избыточный вес (предожирение). Рекомендуется умеренно снизить вес для улучшения здоровья. Увеличьте физическую активность и следите за рационом.')
    } else if (bmi <= 34.5) {
        bmiCategory = ('Ожирение (I класс). Рекомендуется начать программу снижения веса под наблюдением врача. Увеличьте физическую активность и уменьшите калорийность пищи')
    } else if (bmi <= 39.9) {
        bmiCategory = ('Ожирение (II класс). Требуется более серьезное снижение веса для предотвращения рисков для здоровья. Проконсультируйтесь с врачом и начните программу снижения веса.')
    } else if (bmi > 39.9) {
        bmiCategory = ('Ожирение (III класс). Обратитесь к врачу для разработки комплексной программы по снижению веса, возможно, потребуется медикаментозное лечение или хирургическое вмешательство.')

    }
    bmiElement.textContent = bmiCategory;

}


