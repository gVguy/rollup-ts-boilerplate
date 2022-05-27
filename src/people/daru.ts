import { Person } from "@/types/person"

export const d: Daru = {
  name: 'Daru',
  age: 28,
  sex: 'gal'
}

interface Daru extends Person {
  name: 'Daru'
}
