//Стартовая переменная city, с которой будут работать тесты, и она соответствует типу CityType
//перед каждым тестом city будем инициализировать, стандартным объектом со свойствами:
//после слова test точка skip --- test.skip ==> тест проходить не будет
//если пытаемся взять свойство у объекта, но его не существует, то будет undefined
//Так как address.number ==> address - это объект для него надо создать отдельный тип.
//Так как street.title  ==>  street - это объект для него надо создать отдельный тип.
//Заполнить тестовый набор данных, которые требует тест. В реальной жизни тест не проверяет набор тестовых данных,
//тест: ожидаем, что у города есть houses - это массив длиной 3 элемента, и далее ожидает набор свойств объектов элементов
//Когда используем само значение строки как тип указать их через или: title: "HOSPITAL" | "FIRE-STATION"-примитивные типы
//маленькие типы как type AddressType можно переиспользовать при описании других типов.
//Создать тип CityType:
export type StreetType = {
    title: string
}
export type AddressType= {
    number?: number
    street: StreetType
}
export type housesType = {
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
    houses: Array<housesType>
    govermentBuildings: Array<GovermentBuildingsType>
    citizensNumber: number
}
let city: CityType
beforeEach(() => {
    city = {
        title: "New Your",
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
//01. создать тип CityType
//02. заполнить объект city, чтобы тесты ниже прошли 
test("city should countains 3 houses", () => {
    expect(city.houses.length).toBe(3)

    expect(city.houses[0].buildedAt).toBe(2012)
    expect(city.houses[0].repaired).toBe(false)
    expect(city.houses[0].address.number).toBe(100)
    expect(city.houses[0].address.street.title).toBe("White street")

    expect(city.houses[1].buildedAt).toBe(2008)
    expect(city.houses[1].repaired).toBe(false)
    expect(city.houses[1].address.number).toBe(100)
    expect(city.houses[1].address.street.title).toBe("Happy street")

    expect(city.houses[2].buildedAt).toBe(2020)
    expect(city.houses[2].repaired).toBe(false)
    expect(city.houses[2].address.number).toBe(101)
    expect(city.houses[2].address.street.title).toBe("Happy street")
})
//03. создать тип CityType
//04. заполнить объект city, чтобы тесты ниже прошли
test("city should hospital and fire station", () => {
    expect(city.govermentBuildings.length).toBe(2)

    expect(city.govermentBuildings[0].type).toBe("HOSPITAL")
    expect(city.govermentBuildings[0].budget).toBe(200000)
    expect(city.govermentBuildings[0].staffCount).toBe(200)
    expect(city.govermentBuildings[0].address.street.title).toBe("Central street")

    expect(city.govermentBuildings[1].type).toBe("FIRE-STATION")
    expect(city.govermentBuildings[1].budget).toBe(500000)
    expect(city.govermentBuildings[1].staffCount).toBe(1000)
    expect(city.govermentBuildings[1].address.street.title).toBe("South street")
})
