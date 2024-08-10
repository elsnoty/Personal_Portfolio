"use client"
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        reset(); // Reset the form
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('There was an error sending the message.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
      <div className="relative mb-6">
        <input
          {...register('name')}
          type="text"
          placeholder=" "
          className={`w-full px-4 py-2 border-b-2 transition-all duration-300 ease-out ${
            errors.name ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
          }`}
        />
        <label
          className="absolute left-0 top-0 px-4 py-2 transition-all duration-300 ease-out 
                    transform -translate-y-1/2 scale-75 origin-left text-gray-500 focus:text-blue-500 
                    focus:-translate-y-6 focus:scale-75">
          Name
        </label>
        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
      </div>

      <div className="relative mb-6">
        <input
          {...register('email')}
          type="email"
          placeholder=" "
          className={`w-full px-4 py-2 border-b-2 transition-all duration-300 ease-out ${
            errors.email ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
          }`}
        />
        <label
          className="absolute left-0 top-0 px-4 py-2 transition-all duration-300 ease-out 
                    transform -translate-y-1/2 scale-75 origin-left text-gray-500 focus:text-blue-500 
                    focus:-translate-y-6 focus:scale-75">
          Email
        </label>
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
      </div>

      <div className="relative mb-6">
        <textarea
          {...register('message')}
          placeholder=" "
          className={`w-full px-4 py-2 border-b-2 transition-all duration-300 ease-out resize-none h-32 ${
            errors.message ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
          }`}
        />
        <label
          className="absolute left-0 top-0 px-4 py-2 transition-all duration-300 ease-out 
                    transform -translate-y-1/2 scale-75 origin-left text-gray-500 focus:text-blue-500 
                    focus:-translate-y-6 focus:scale-75">
          Message
        </label>
        {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
      </div>

      <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
