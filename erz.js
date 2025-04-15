// Базовый класс User
class User {
    // Приватные поля для инкапсуляции данных
    #email;
    #role;
    #name;

    constructor(name, email, role = 'user') {
        this.#name = name;
        this.#email = email;
        this.#role = role;
    }

    // Геттеры для доступа к приватным полям
    get name() {
        return this.#name;
    }

    get email() {
        return this.#email;
    }

    get role() {
        return this.#role;
    }

    // Сеттер для роли (используется при бане пользователя)
    set role(newRole) {
        this.#role = newRole;
    }

    // Метод для получения информации о пользователе
    getInfo() {
        return `Name: ${this.#name}, Email: ${this.#email}, Role: ${this.#role}`;
    }

    // Метод для изменения email с валидацией
    changeEmail(newEmail) {
        if (this.#validateEmail(newEmail)) {
            this.#email = newEmail;
            return true;
        }
        console.log('Invalid email format');
        return false;
    }

    // Приватный метод для валидации email
    #validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

// Класс Admin, наследующийся от User
class Admin extends User {
    constructor(name, email) {
        super(name, email, 'admin');
    }

    // Метод для блокировки пользователя
    banUser(user) {
        if (user instanceof User && !(user instanceof Admin)) {
            user.role = 'banned';
            console.log(`User ${user.name} has been banned.`);
            return true;
        }
        console.log("Cannot ban this user (either not a valid user or is an admin)");
        return false;
    }
}

// Демонстрация работы классов
console.log('Creating users and admin...');
const user1 = new User('John Doe', 'john@example.com');
const user2 = new User('Jane Smith', 'jane@example.com');
const admin = new Admin('Admin User', 'admin@example.com');

console.log('\nInitial user information:');
console.log(user1.getInfo());
console.log(user2.getInfo());
console.log(admin.getInfo());

console.log('\nTrying to change email:');
console.log('Valid email:', user1.changeEmail('john.doe@example.com'));
console.log('Invalid email:', user1.changeEmail('invalid-email'));

console.log('\nBanning user:');
admin.banUser(user1);
console.log(user1.getInfo());

console.log('\nTrying to ban admin:');
admin.banUser(admin); // Попытка забанить админа
  

