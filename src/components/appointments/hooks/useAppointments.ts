import { getMonthYearDetails } from './../helpers'
import { MonthYear } from './../types'
import { AppointmentDateMap } from '../types'
import { axiosInstance } from './../../../axiosInstance/index'
import React, { Dispatch, SetStateAction } from 'react'
import dayjs from 'dayjs'
import { userUser } from '../../user/hooks/useUser'
import { useQueryClient } from 'react-query'

export const getAppointments = async (year: string, month: string): Promise<AppointmentDateMap> => {
  const { data } = await axiosInstance.get(`/appointments/${year}/${month}`)

  return data
}

export interface UseAppointmentsProps {
  appointments: AppointmentDateMap
  monthYear: MonthYear
  updateMonthYear: (monthIncrement: number) => void
  showAll: boolean
  setShowAll: Dispatch<SetStateAction<boolean>>
}

const commonOptions = {
  staleTime: 0,
  cacheTime: 30000,
}

export const useAppointments = (): UseAppointmentsProps => {
  const currentMonthYear = getMonthYearDetails(dayjs())
  const [monthYear, setMonthYear] = React.useState(currentMonthYear)
  const [showAll, setShowAll] = React.useState(false)

  const { user } = userUser()
  const queryClien = useQueryClient()

  return { monthYear, showAll, user }
}
