import React from 'react'

type Props = {
  formData: {
    firstName: string
    lastName: string
    dob: string
    [k: string]: any
  }
  setFormData: (upd: any) => void
  next: () => void
}

export default function StepOne({ formData, setFormData, next }: Props) {
  const localValid = formData.firstName.trim() !== '' && formData.lastName.trim() !== '' && formData.dob.trim() !== ''

  return (
    <div>
      <h2>Personal Info</h2>
      <div className="field">
        <label className="small">First Name</label>
        <input
          value={formData.firstName}
          onChange={e => setFormData((f: any) => ({ ...f, firstName: e.target.value }))}
          placeholder="Jane"
        />
      </div>

      <div className="field">
        <label className="small">Last Name</label>
        <input
          value={formData.lastName}
          onChange={e => setFormData((f: any) => ({ ...f, lastName: e.target.value }))}
          placeholder="Doe"
        />
      </div>

      <div className="field">
        <label className="small">Date of Birth</label>
        <input
          type="date"
          value={formData.dob}
          onChange={e => setFormData((f: any) => ({ ...f, dob: e.target.value }))}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
        <button type="button" disabled={!localValid} onClick={next}>
          Next
        </button>
      </div>
    </div>
  )
}
