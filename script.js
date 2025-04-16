// async function fetchTask(params) {
//   try {
//     const response = await fetch(
//         `https://jsonplaceholder.typicode.com/users/?_limit=5&_=${new Date().getTime()}`
        
//     );
//     if (!response.ok){
//         throw new Error(`ошибка:${response.status}`);
//     }
//     const tasks = await response.json();
//     displayTasks(tasks);
//   } catch (error) {
//     console.error("Ошибка загруски:",error);
//   } 
// }
// function displayTasks(tasks){
//     const tasksList = document.getElementById("taskList");
//     tasksList.innerHTML = "";
//     tasks.forEach((task) => {
//         const li = document.createElement("li");
//         li.textContent = `${task.name} - Email: ${task.email}`;
//         tasksList.appendChild(li);
//     });
// }
// document.addEventListener("DOMContentLoaded",
// fetchTask);
// const para=document.createElement("p");
// para.innerText="до оответа сервера";
// document.body.appendChild(para);

//  СРС 
// Объявляем переменные
// let count = 0; // переменная для хранения счётчика
// const maxCount = 10; // максимальное значение, на которое может увеличиться счётчик
// var buttonClicked = false; // флаг для отслеживания состояния кнопки

// // Получаем элемент, который будет отображать счётчик
// const counterDisplay = document.getElementById('counter');
// const incrementButton = document.getElementById('incrementButton');

// // Функция для увеличения счётчика
// function incrementCounter() {
//     if (count < maxCount) {
//         count++;
//         counterDisplay.textContent = count;
//     } else {
//         alert('Максимальное значение счётчика достигнуто!');
//     }
// }

// // Добавляем обработчик события на кнопку
// incrementButton.addEventListener('click', function() {
//     buttonClicked = true; // ставим флаг, что кнопка была нажата
//     incrementCounter(); // увеличиваем счётчик
// });

// лаб 8
const container = document.getElementById('characters-container');
const pageCounter = document.getElementById('page-counter');
let currentPage = 1;
const totalPages = 42;
function updatePageCounter() {
  pageCounter.textContent = `Страница: ${currentPage} из ${totalPages}`;
}
function loadCharacters(page) {
  container.innerHTML = ''; 
  fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then(res => res.json())
    .then(data => {
      data.results.forEach(character => {
        const card = document.createElement('div');
        card.classList.add('character-card');
        card.innerHTML = `
          <h3>${character.name}</h3>
          <img src="${character.image}" alt="${character.name}" />
          <p>Status: ${character.status}</p>
          <p>Species: ${character.species}</p>
        `;
        container.appendChild(card);
      });

      updatePageCounter();
    });
}
document.getElementById('prev-btn').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    loadCharacters(currentPage);
  }
});
document.getElementById('next-btn').addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    loadCharacters(currentPage);
  }
});
loadCharacters(currentPage);


  

//  function getRandomDog() {
//      const dogImage = document.getElementById('dogImage');
//      dogImage.style.display = 'none';
    
//     fetch('https://dog.ceo/api/breeds/image/random')
//         .then(response => response.json())
//         .then(data => {
//             dogImage.src = data.message;
//             dogImage.style.display = 'block';
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             alert('Failed to load dog image. Please try again.');
//         });
// } 