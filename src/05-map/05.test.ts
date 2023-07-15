import {createGreetingMessage, ManType} from "./05";
//1. Создать переменную - это пустой массив. 2. В beforeEach передать функцию внутри которой массив элементов people
//3. Написать тесты

let people: Array<ManType> = []
beforeEach(() => {
    people = [
        {name: 'Andrey Ivanov', age: 33},
        {name: 'Alexander Petrov', age: 24},
        {name: 'Dmitry Sidorov', age: 18},
    ]
})
test('should get array of greeting messages', ()=> {
    // const messages = people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to IT-Incubator`)
    const messages = createGreetingMessage(people)
    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello Andrey. Welcome to IT-Incubator')
    expect(messages[1]).toBe('Hello Alexander. Welcome to IT-Incubator')
})
