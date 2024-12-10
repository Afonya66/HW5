const tasks = [{ name: "Приготовить обед", completed: false }, { name: "Выучить JS", completed: false }, { name: "Сходить за продуктами", completed: false }, { name: "Сходить в тренажерный зал", completed: false }]
console.log(tasks);

function addNewTask(task) {
    tasks.push({ name: task, completed: false });
    if (task == '') {
        console.log("Название задачи не может быть пустым");
    }
}
addNewTask('Выпить пиво')
addNewTask('')
addNewTask('Погладить кошку')

function completeTask(task) {
    tasks.forEach((item) => {
        if (task === item.name) {
            item.completed = true
        }
        else {
            console.log('Задачи с таким названием нет в списке');
        }
    })
}

completeTask("Сходить за продуктами")
completeTask('Сходить в тренажерный зал')

const deleteTask = (taskName) => {
    const index = tasks.findIndex(task => task.name === taskName)
    if (index != -1) {
        tasks.splice(index, 1)
        console.log(`Задача "${taskName}" успешно удалена`);
    } else {
        console.log(`Задача с названием "${taskName}" не найдена`);
    }
}

deleteTask('Сходить в тренажерный зал')

function showList() {
    tasks.forEach((item) => {
        console.log(`Задача "${item.name}" - ${item.completed === true ? 'выполнена' : 'не выполнена'}`);
    })
}
showList()