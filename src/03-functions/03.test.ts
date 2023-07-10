//Ключевое слово test, название test описывающая его суть, запятая функция, которая будет непосредственно нашим тестом
//1. Создать переменную let student: StydentType;
// 2. Сказать, что перед каждым тестом student приравнивать к определенному объекту, тест должен видеть у себя объект,
//мы не должны его ниоткуда импортировать
//3. Пишем сам тест: 1. Сказать, что до вызова функции у объекта student в массиве technologies было 3 объекта
// 2. Отдаем объект student функции addSkill. 3. После выполнения функции addSkill указываем, что ожидаем.
// 4. Уточним, что технология с индексом 3 в массиве, ее title должен быть равен JS
// 5. toBeDefined() - это значит, что он просто определен / существует.
import {StydentType} from "../02-Object/02";
import {addSkill, doesStudentLivesIn, makeStudentActive} from "./03";

let student: StydentType;
 beforeEach( ()=> {
    student = {
        name: "Dimych",
        age: 32,
        isActive: false,
        address: {
            streetTitle: "Surganova 2",
            city: {
                title: "Minsk",
                country: "Belarus"
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            }, {
                id: 2,
                title: "CSS"
            }, {
                id: 3,
                title: "React"
            }

        ]
    }
 })
test('new technologies should be added to student', ()=> {
     expect(student.technologies.length).toBe(3)

    addSkill(student, "JS");
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("JS")
    expect(student.technologies[3].id).toBeDefined()
})

test('student is active', ()=> {
    expect(student.isActive).toBe(false)
    makeStudentActive(student);
    expect(student.isActive).toBe(true)
})

test('Does student lives in city?', ()=> {

    let result1 = doesStudentLivesIn(student, "Moscow");
    let result2 = doesStudentLivesIn(student, "Minsk");

    expect(result1).toBe(false)
    expect(result2).toBe(true)
})
