import { useGetDashboardMetricsQuery } from '@/state/api'
import React from 'react'

const CardPopularProduct = () => {
    const {data:dashboardMetrics,isLoading} = useGetDashboardMetricsQuery();
  return (
    <div className='bg-gray-500 row-span-3 xl:row-span-6'>
      
    </div>
  )
}

export default CardPopularProduct
