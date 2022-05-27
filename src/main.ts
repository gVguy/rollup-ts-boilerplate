import { Person } from '@/types/person'
import { v } from '@/people/vaniko'
import { d } from '@/people/daru'

export const getCar = (seatAssignment?: Person[]): CarWithPeople => ({
  driverSeat: seatAssignment?.[0] || v,
  passengerSeat: seatAssignment?.[1] || d
})

interface CarWithPeople {
  driverSeat: Person
  passengerSeat: Person
}
