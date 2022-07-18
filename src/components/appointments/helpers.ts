import dayjs from 'dayjs'
import { MonthYear } from './types'

export const getMonthYearDetails = (initialDate: dayjs.Dayjs): MonthYear => {
  const month = initialDate.format('MM')
  const year = initialDate.format('YYYY')
  const startDate = dayjs(`${year}${month}01`)
  const firstDOW = Number(startDate.format('d'))
  const lastDate = Number(startDate.clone().endOf('month').format('DD'))
  const monthName = startDate.format('MMMM')

  return { month, year, startDate, firstDOW, lastDate, monthName }
}
