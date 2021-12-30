function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercício 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function daysOfTheMonth() {
  let daysList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayItem = document.createElement('li');

    if (day === 24 || day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      daysList.appendChild(dayItem);
    } else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      daysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
      daysList.appendChild(dayItem);
    } else {
      dayItem.className = 'day';
      dayItem.innerHTML = day;
      daysList.appendChild(dayItem);
    }
  }
}
daysOfTheMonth();

// Exercício 2
function createBtnHoliday(nameBtn) {
  const buttonContainer = document.querySelector('.buttons-container');
  const newButton = document.createElement('button');
  const newButtonId = 'btn-holiday';

  newButton.innerHTML = nameBtn;
  newButton.id = newButtonId;
  buttonContainer.appendChild(newButton);
}
createBtnHoliday('Feriados');

// Exercício 3
function backgroundColor () {
  const holidayBtn = document.querySelector('#btn-holiday');

  holidayBtn.addEventListener('click', function() {
    const holidays = document.querySelectorAll('.holiday');

    for (let index = 0; index < holidays.length; index += 1) {
      if (holidays[index].style.backgroundColor ==='white') {
        holidays[index].style.backgroundColor === 'rgb(238,238,238)';
      } else {
        holidays[index].style.backgroundColor = 'white';
      }
    }
  })
}
backgroundColor();

// Exercício 4
