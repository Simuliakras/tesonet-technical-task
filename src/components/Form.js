import React from 'react'

const Form = ({ error, value, submit, onChange }) => {
  return (
    <form onSubmit={submit}>
      <div className='form-group row align-items-center'>
        <div className='col-9 pr-0'>
          <input
            type='text'
            className='form-control-plaintext'
            placeholder='Enter your task'
            required
            value={value}
            onChange={onChange}
          />
          {error && <h4 className='form-text text-danger'>{error}</h4>}
        </div>
        <div className='col-3 text-right'>
          <button type='submit' className='btn btn-primary'>
            add task
          </button>
        </div>
      </div>
    </form>
  )
}

export default Form