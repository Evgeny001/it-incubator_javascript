//Создать тест для метод массива filter
//1. Передаем исходный массив в тест.
//2. Создать новую переменную и передать ей старый массив
//3. В expect в toBe(1) прописать ожидаемую длину массива и его значение должно быть 100
//4. для массива ages применить метод массива filter, на месте вызова метода filter появится новый массив,
//результат которого присвоим переменной oldAges. Внутрь метода filter, (в аргументы) передадим функцию predicate,
//в которой указаны правила фильтрации. Функцию predicate сами не вызываем, а только отдаем методу filter.
//Метод filter вызовет функцию predicate на каждый элемент массива, для которого вызван filter и predicate
//вернет true or false. Если true, то filter вернет элемент в исходный массив.

import {CityType, GovermentBuildingsType} from "../03-functions/03_02.test";

test('should take old men older then 90', ()=> {
    const ages = [18, 20, 22, 1, 100, 90, 14]
    const predicate = (age: number) => {
        return age > 90
    }
    // const oldAges1 = ages.filter(predicate)
    const oldAges2 = ages.filter(age => age > 90)
    expect(oldAges2.length).toBe(1)
    expect(oldAges2[0]).toBe(100)
})

test('should take courses chipper 160', ()=> {
    const courses: CourseType[] = [
        {title: 'css', price: 110},
        {title: 'JS', price: 200},
        {title: 'React', price: 150}
    ]
    // const cheapPredicate = (course: CourseType) => {
    //     return course.price < 160
    // }
    // const cheapCourses = courses.filter(cheapPredicate)
    const cheapCourses = courses.filter(course => course.price < 160)
     expect(cheapCourses.length).toBe(2)
     expect(cheapCourses[0].title).toBe('css')
     expect(cheapCourses[1].title).toBe('React')
})
test('get only completed tasks',()=>{
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 1, title: 'Milk', isDone: true},
        {id: 1, title: 'Solt', isDone: false},
        {id: 1, title: 'Sugar', isDone: true},
    ]
    // const competedTasks = tasks.filter(task=>task.isDone === true)
    // const competedTasks = tasks.filter(task=>task.isDone)
    const competedTasks = tasks.filter(function (task){
        return task.isDone === true
    })

    expect(competedTasks.length).toBe(2)
    expect(competedTasks[0].title).toBe('Milk')
    expect(competedTasks[1].title).toBe('Sugar')
})
//Внутри метода filter вызывается и запускается функция столько раз сколько элементов в массиве который фильтруем, после
//стрелки функция возвращает результат описанный с помощью условия, если в условии true, то результат возвращается если
//false, то нет.
//Я хочу взять только те task, у которых isDone - true.
//Я хочу взять только те course цена которых меньше < 160 (course => course.price < 160).
//Внутрь метода filter всегда передается функция-предикат, которая на входе получает каждый элемент массива по очереди.
//Это логика описана внутри filter - пробегание по элементам массива, и передача каждого элемента массива в параметры
//функции-предикат, ее вызова и возврата значения в зависимости от условий, которое пишется внутри функции-предиката.
//В стрелочной функции если после стрелки нет фигурных скобок, происходит возврат результата который после стрелки.
//Короткий синтаксис task=>task.isDone вернет task в которых значение равно true === task=>task.isDone === true.
//task=>!task.isDone === task=>task.isDone === false.
//В реальной жизни пишется такой синтаксис: task=>task.isDone / task=>!task.isDone.

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(house => house.address.street.title !== street)
}
//Важно результат возврата функции надо присвоить какой-то переменной,
//т.е результат city.houses.filter(house => house.address.street.title !== street) будет висеть в воздухе пока
//не сделаем city.houses = city.houses.filter(house => house.address.street.title !== street)

export const getBuildingsWithStaffCountGreaterThan = (buildings:GovermentBuildingsType[], number: number) => {
   return  buildings.filter(staff => staff.staffCount > number)
}
//Функция getBuildingsWithStaffCountGreaterThan не меняет внутренность объекта, а в результате фильтрации возвращает
//здания, которые соответствуют условию, и результат возврата записывается в переменную buildings. Это чистая функция
//у которой есть return. Вызов метода filter вернет новый массив, результат которого потом надо куда-то записать.
//У массива вызываем метод, внутрь передаем callback функцию и если callback возвращает true, то в результирующий массив
// это возвращается.
