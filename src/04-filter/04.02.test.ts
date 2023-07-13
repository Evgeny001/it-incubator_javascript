import {CityType} from "../03-functions/03_02.test";
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThan} from "./04.test";

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

test('Houses should be destroyed', ()=> {
    demolishHousesOnTheStreet(city, 'Happy street')

    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)
})
test('buildings with correct staff count', ()=>{
    let buildings = getBuildingsWithStaffCountGreaterThan(city.govermentBuildings, 500)

    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe("FIRE-STATION")

})
