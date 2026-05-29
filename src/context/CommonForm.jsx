import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import CommonInput from '../utils/CommonInput'

const CommonForm = ({ fields, onSubmit }) => {
  const InputRef = useRef([])
 

  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onFormSubmit = async (data) => {
    await onSubmit(data);
    reset();
  }; 


  return (
    <div
      className="flex items-center p-2">
      <form
        autoComplete='off'
        onSubmit={handleSubmit(onFormSubmit)}
      >
        {fields.map((f,index) => ( <CommonInput
          ref={(el) => (InputRef.current[index] = el)}
          key={f.name}
          name={f.name}
          type={f.type}
          register={register}
          error={errors[f.name]?.message}
        />))}


        <button
          type="submit"
          className="mt-2 w-full p-2 bg-indigo-500 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-600 transition duration-300"
        >
          Submit
        </button>
      </form>

    </div>
  )
}

export default CommonForm
