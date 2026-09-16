import React from 'react'

type Props = {
  formData: {
    firstName: string
    lastName: string
    dob: string
    email: string
    [k: string]: any
  }
  back: () => void
  submit: () => void
}

export default function StepThree({ formData, back, submit }: Props) {
  return (
    <div>
      <h2>Review & Submit</h2>

      <div className="field"><strong>First Name:</strong> <div className="small">{formData.firstName || '—'}</div></div>
      <div className="field"><strong>Last Name:</strong> <div className="small">{formData.lastName || '—'}</div></div>
      <div className="field"><strong>Date of Birth:</strong> <div className="small">{formData.dob || '—'}</div></div>
      <div className="field"><strong>Email:</strong> <div className="small">{formData.email || '—'}</div></div>

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
        <button type="button" onClick={back}>Back</button>
        <button type="button" onClick={submit}>Submit</button>
      </div>
    </div>
  )
}
