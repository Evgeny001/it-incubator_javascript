import {addmoneyToBudget, createMessage, repairHouse, toFireStaff, toHireStaff} from "./03";

export type StreetType = {
    title: string
}
export type AddressType= {
    number?: number
    street: StreetType
}
export type HousesType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}
export type AddressType_2 = {
    staffCount: number
    street: StreetType
}
export type GovermentBuildingsType = {
    type:  "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount : number
    address: AddressType
}
export type CityType = {
    title: string
    houses: Array<HousesType>
    govermentBuildings: Array<GovermentBuildingsType>
    citizensNumber: number
}
let city: CityType
beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: "White street"}}
            },
            {
                buildedAt: 2008, repaired: false,
                address: {number: 100, street: {title: "Happy street"}}
            },
            {
                buildedAt: 2020, repaired: false,
                address: {number: 101, street: {title: "Happy street"}}
            }
        ],
        govermentBuildings: [
            {
            type: "HOSPITAL", budget: 200000,
            staffCount: 200, address: {street: {title: "Central street"}}},
            {
            type: "FIRE-STATION", budget: 500000,
            staffCount: 1000, address: {street: {title: "South street"}}}
        ],
        citizensNumber: 1000000
    }
})
//01. Функция, которая берет здание, и добавляет(отнимает) в бюджет к тому что есть 100000
//Надо четко понимать исходный массив данных - объект, что бы четко помнить что мы тестируем
// и что проверяем
test("Budget should be changed for HOSPITAL", () => {
    addmoneyToBudget(city.govermentBuildings[0], 100000);
    expect(city.govermentBuildings[0].budget).toBe(300000)
})
test("Budget should be changed for FIRE-STATION", () => {
    addmoneyToBudget(city.govermentBuildings[1], -100000);
    expect(city.govermentBuildings[1].budget).toBe(400000)
})
//02. Нужно починить дом
test('House should be repaired', () => {
    repairHouse(city.houses[1])
    expect(city.houses[1].repaired).toBe(true)
    expect(city.houses[1].repaired).toBeTruthy()
})
//toBe(true) и toBeTruthy() одно и тоже 

//03. Создать функцию, которая удалит какое-то количество людей
test('staff should be increased' , () => {
    toFireStaff(city.govermentBuildings[0], 20)
    expect(city.govermentBuildings[0].staffCount).toBe(180)
})
//04. Создать функцию, которая добавит какое-то количество людей
test('staff should be added' , () => {
    toHireStaff(city.govermentBuildings[0], 20)
    expect(city.govermentBuildings[0].staffCount).toBe(220)
})

//05. Поприветствовать жителей New Your
// (добавить в title строку "Hello New York. I want you be happy")
 test('Greeting message should be correct for city', () => {
     // const message = createMessage(city)
     // expect(message).toBe("Hello New York. I want you be happy. All 1000000 men")
     expect(createMessage(city)).toBe("Hello New York citizens. I want you be happy. All 1000000 men")
 })
//Вызов функции createMessage можно не записывать в переменную, а сразу передать в expect
