import dayjs from 'dayjs'
import { Appointment } from '../../types/types'

export type AppointmentDateMap = Record<string, Appointment[]>

export interface MonthYear {
  startDate: dayjs.Dayjs
  firstDOW: number
  lastDate: number
  monthName: string
  month: string
  year: string
}
