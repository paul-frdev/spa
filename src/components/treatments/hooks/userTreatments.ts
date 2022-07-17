import { axiosInstance } from '../../../axiosInstance/index'
import { TreatmentsProps } from '../../../types/types'
import { useQuery } from 'react-query'
import { queryKeys } from '../../../reactQuery/constants'

async function getTreatments(): Promise<TreatmentsProps[]> {
  const { data } = await axiosInstance.get('/treatments')
  return data
}

export const useTreatments = (): TreatmentsProps[] => {
  const fallback: TreatmentsProps[] | undefined = []
  const { data = fallback } = useQuery(queryKeys.treatments, getTreatments)

  return data
}