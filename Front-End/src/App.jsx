import { useState } from 'react'
import UserDataForm from './pages/UserDataForm' // foi importado o arquivo UserDataForm que está dentro do page
import PersonalDataForm from './pages/PersonalDataForm'
import PageTest from './pages/PageTest'


function App() {
  
  return (
    <>
      {/* <h1 className="text-3xl">Jesus te ama</h1> */}
      <UserDataForm/>
      <PersonalDataForm />
    </>
  )
}

export default App
