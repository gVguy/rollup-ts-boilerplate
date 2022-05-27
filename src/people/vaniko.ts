import { Person } from "@/types/person"

export const v: Vaniko = {
  name: 'Vaniko',
  age: 28,
  sex: 'boy'
}

interface Vaniko extends Person {
  name: 'Vaniko'
}
