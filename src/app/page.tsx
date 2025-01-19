import React from 'react'
import Content from './components/content'
import DetailCar from './components/detailcar'
import RentalForm from './components/RentalForm'
import Dashboard from './components/dashboard'


const page = () => {
  return (
    <div>
      <Content/>
      <DetailCar/>
      <Dashboard/>
      <RentalForm/>
    </div>
  )
}
export default page ;
