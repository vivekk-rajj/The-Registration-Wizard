import React, { useState } from 'react'

type Props = {
  formData: {
    email: string
    password: string
    confirmPassword: string
    [k: string]: any
  }
  setFormData: (upd: any) => void
  next: () => void
  back: () => void
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function StepTwo({ formData, setFormData, next, back }: Props) {
  const [showPassword, setShowPassword] = useState(false)

  const emailValid = emailRegex.test(formData.email)
  const passwordValid = formData.password.length >= 8
  const confirmMatch = formData.password === formData.confirmPassword

  const localValid = emailValid && passwordValid && confirmMatch

  return (
    <div>
      <h2>Account Details</h2>

      <div className="field">
        <label className="small">Email</label>
        <input
          value={formData.email}
          onChange={e => setFormData((f: any) => ({ ...f, email: e.target.value }))}
          placeholder="you@example.com"
        />
        {!emailValid && formData.email !== '' && <div className="error">Please enter a valid email (missing @ or domain)</div>}
      </div>

      <div className="field">
        <label className="small">Password</label>
        <div style={{ position: 'relative' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={e => setFormData((f: any) => ({ ...f, password: e.target.value }))}
            placeholder="At least 8 characters"
          />
          <button
            type="button"
            onClick={() => setShowPassword(s => !s)}
            style={{ position: 'absolute', right: 6, top: 6 }}
            aria-label="Toggle password visibility"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        {!passwordValid && formData.password !== '' && <div className="error">Password must be at least 8 characters</div>}
      </div>

      <div className="field">
        <label className="small">Confirm Password</label>
        <input
          type={showPassword ? 'text' : 'password'}
          value={formData.confirmPassword}
          onChange={e => setFormData((f: any) => ({ ...f, confirmPassword: e.target.value }))}
          placeholder="Repeat password"
        />
        {!confirmMatch && formData.confirmPassword !== '' && <div className="error">Passwords do not match</div>}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
        <button type="button" onClick={back}>Back</button>
        <button type="button" disabled={!localValid} onClick={next}>Next</button>
      </div>
    </div>
  )
}
