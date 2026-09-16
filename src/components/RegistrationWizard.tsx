import React, { useState } from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

type FormData = {
  firstName: string
  lastName: string
  dob: string
  email: string
  password: string
  confirmPassword: string
}

export default function RegistrationWizard() {
  const [step, setStep] = useState<number>(1)
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const next = () => setStep(s => Math.min(3, s + 1))
  const back = () => setStep(s => Math.max(1, s - 1))

  const handleSubmit = () => {
    // Final submission - QA expects console.log of payload
    console.log('Final payload:', formData)
    setSubmitted(true)
  }

  return (
    <div className="card">
      <div className="progress">Step {step} of 3</div>

      {!submitted ? (
        <>
          {step === 1 && (
            <StepOne formData={formData} setFormData={setFormData} next={next} />
          )}
          {step === 2 && (
            <StepTwo formData={formData} setFormData={setFormData} next={next} back={back} />
          )}
          {step === 3 && (
            <StepThree formData={formData} back={back} submit={handleSubmit} />
          )}
        </>
      ) : (
        <div className="success">
          Success! Registration payload has been logged to the console.
        </div>
      )}
    </div>
  )
}
