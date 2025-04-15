// task.js
const tasks = [];

export function addTask(task) {
    tasks.push(task);
    console.log(`Задача "${task}" добавлена.`);
}

export function removeTask(task) {
    const index = tasks.indexOf(task);
    if (index !== -1) {
        tasks.splice(index, 1);
        console.log(`Задача "${task}" удалена.`);
    } else {
        console.log(`Задача "${task}" не найдена.`);
    }
}

export function showTasks() {
    console.log("Список задач:", tasks.length > 0 ? tasks.join(", ") : "пусто");
}

import user from './user.js';

console.log('User data:', user);
