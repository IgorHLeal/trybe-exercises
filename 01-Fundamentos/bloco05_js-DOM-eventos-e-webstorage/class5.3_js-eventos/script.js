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
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonId = 'btn-holiday';

  newButton.innerHTML = nameBtn;
  newButton.id = newButtonId;
  buttonContainer.appendChild(newButton);
}
createBtnHoliday('Feriados');

// Exercício 3
function backgroundColor () {
  let holidayBtn = document.querySelector('#btn-holiday');

  holidayBtn.addEventListener('click', function() {
    let holidays = document.querySelectorAll('.holiday');

    for (let day of holidays) {
      if (day.style.backgroundColor ==='lightgreen') {
        day.style.backgroundColor === 'rgb(238,238,238)';
      } else {
        day.style.backgroundColor = 'lightgreen';
      }
      console.log(holidays);
    }
  })
}
backgroundColor();

// Exercício 4
function createFridayButton (buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonId = 'btn-friday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonId;
  buttonContainer.appendChild(newButton);
}
createFridayButton('Sexta-feira');

// Exercício 5
