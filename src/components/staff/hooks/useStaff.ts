import React, { Dispatch, SetStateAction } from 'react'
import { useQuery } from 'react-query'
import { axiosInstance } from '../../../axiosInstance'
import { queryKeys } from '../../../reactQuery/constants'
import { IStaff } from '../../../types/types'

interface UseStaffProps {
  staff: IStaff[]
  filter: string
  setFilter?: Dispatch<SetStateAction<string>>
}

async function getStaff(): Promise<IStaff[]> {
  const { data } = await axiosInstance.get('/staff')
  return data
}

export const useStaff = (): UseStaffProps => {
  const fallback = []
  const [filter, setFilter] = React.useState('all')

  const { data: staff = fallback } = useQuery(queryKeys.staff, getStaff)

  return { staff, filter, setFilter }
}
