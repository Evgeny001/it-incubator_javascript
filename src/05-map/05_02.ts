import {GovermentBuildingsType, HousesType} from "../03-functions/03_02.test";


//map возвращает новый массив в таким же количеством элементов как и было в старом массиве
export const getStreetsTitlesOfGovernmentsBuildings = (govermentBuildings: GovermentBuildingsType[]) => {
   return govermentBuildings.map((buildings)=> buildings.address.street.title)}

export const getStreetsTitlesHouses = (houses:HousesType[] ) => {
    return houses.map(house=> house.address.street.title)
}

export const createMessages = (houses: HousesType[]) => houses.map(house => `Hello guys from ${house.address.street.title}`)
export function createMessages2 (houses: HousesType[]) {
  return houses.map(house => `Hello guys from ${house.address.street.title}`)
}
