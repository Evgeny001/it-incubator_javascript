import {CityType} from "../03-functions/03_02.test";
import { createMessages2, getStreetsTitlesHouses, getStreetsTitlesOfGovernmentsBuildings} from "./05_02";

export let city: CityType
beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id: 1,
                buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: "White street"}}
            },
            {
                id: 2,
                buildedAt: 2008, repaired: false,
                address: {number: 100, street: {title: "Happy street"}}
            },
            {
                id: 3,
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

//01. Функция должна раскукожить и достать из массива объектов конкретные значения улиц и новый массив - будет
//массив строк
test('list of street title of giverments buildings', ()=>{
    let streetsNames = getStreetsTitlesOfGovernmentsBuildings(city.govermentBuildings)

    expect(streetsNames.length).toBe(2)
    expect(streetsNames[0]).toBe('Central street')
    expect(streetsNames[1]).toBe('South street')
})
//02
test('list of street titles', ()=> {
    let streets = getStreetsTitlesHouses(city.houses)

    expect(streets.length).toBe(3)
    expect(streets[0]).toBe("White street")
    expect(streets[1]).toBe("Happy street")
    expect(streets[2]).toBe("Happy street")
})
//03. На каждой улице создадим сообщение.
test ('create greening messages for streets', ()=> {
     // let messages = createMessages(city.houses)
     let messages = createMessages2(city.houses)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello guys from White street')
    expect(messages[1]).toBe('Hello guys from Happy street')
    expect(messages[2]).toBe('Hello guys from Happy street')
})
