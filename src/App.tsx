import React from 'react'
import RegistrationWizard from './components/RegistrationWizard'

export default function App() {
  return (
    <div style={{ maxWidth: 720, margin: '40px auto', padding: 20 }}>
      <h1>Registration Wizard</h1>
      <RegistrationWizard />
    </div>
  )
}
