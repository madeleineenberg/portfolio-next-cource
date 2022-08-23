import React from 'react';
import { useForm } from 'react-hook-form';

export default function PortfolioForm({ onSubmit }) {
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='form-group'>
        <label htmlFor='title'>Title</label>
        <input
          {...register('title', { required: true })}
          name='title'
          type='text'
          className='form-control'
          id='title'
        />
      </div>

      <div className='form-group'>
        <label htmlFor='city'>Company</label>
        <input
          {...register('company', { required: true })}
          name='company'
          type='text'
          className='form-control'
          id='company'
        />
      </div>

      <div className='form-group'>
        <label htmlFor='city'>Company Website</label>
        <input
          {...register('companyWebsite', { required: true })}
          name='companyWebsite'
          type='text'
          className='form-control'
          id='companyWebsite'
        />
      </div>

      <div className='form-group'>
        <label htmlFor='street'>Location</label>
        <input
          {...register('location', { required: true })}
          name='location'
          type='text'
          className='form-control'
          id='location'
        />
      </div>

      <div className='form-group'>
        <label htmlFor='street'>Job Title</label>
        <input
          {...register('jobTitle', { required: true })}
          name='jobTitle'
          type='text'
          className='form-control'
          id='jobTitle'
        />
      </div>

      <div className='form-group'>
        <label htmlFor='description'>Description</label>
        <textarea
          {...register('description', { required: true })}
          name='description'
          rows='5'
          type='text'
          className='form-control'
          id='description'
        ></textarea>
      </div>

      <div className='form-group'>
        <label htmlFor='street'>Start Date</label>
        <div>{/* Date picker here */}</div>
      </div>

      <div className='form-group'>
        <label htmlFor='street'>End Date</label>
        <div>{/* Date picker here */}</div>
      </div>
      <button type='submit' className='btn btn-dark'>
        Create
      </button>
    </form>
  );
}
