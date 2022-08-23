import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';

export default function PortfolioForm({ onSubmit }) {
  const { register, handleSubmit, setValue } = useForm();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    register('startDate');
    register('endDate');
  }, [register]);

  const handleDateChange = (dateType, setDate) => (date) => {
    setValue(dateType, date);
    setDate(date);
  };

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
        <label htmlFor='startDate'>Start Date</label>
        <div>
          <DatePicker
            showYearDropdown
            selected={startDate}
            onChange={handleDateChange('startDate', setStartDate)}
          />
        </div>
      </div>

      <div className='form-group'>
        <label htmlFor='endDate'>End Date</label>
        <div>
          <DatePicker
            showYearDropdown
            disabled={!endDate}
            selected={endDate}
            onChange={handleDateChange('endDate', setEndDate)}
          />
        </div>
      </div>
      <div className='form-group'>
        {endDate && (
          <button
            type='button'
            className='btn btn-danger'
            onClick={() => handleDateChange('endDate', setEndDate(null))}
          >
            No end date
          </button>
        )}
        {!endDate && (
          <button
            type='button'
            className='btn btn-success'
            onClick={() =>
              handleDateChange(
                'endDate',
                setEndDate
              )(new Date(new Date().setHours(0, 0, 0, 0)))
            }
          >
            Set end date
          </button>
        )}
      </div>
      <button type='submit' className='btn btn-dark'>
        Create
      </button>
    </form>
  );
}
