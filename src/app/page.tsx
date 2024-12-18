import React from 'react'
import Content from './components/content'
import Category from './components/category'
import DetailCar from './components/detailcar'
import RentalForm from './components/RentalForm'


const page = () => {
  return (
    <div>
      <Content/>
      <Category/>
      <DetailCar/>
      <RentalForm/>
    </div>
  )
}

export default page
