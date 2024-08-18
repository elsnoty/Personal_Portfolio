"use client";
import React from 'react';
import styles from './style.module.css';
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Magnetics from '../../util/testMagntic';

interface IFormInput {
  email: string;
  message: string;
}

const schema = yup.object().shape({
  email: yup.string()
    .email('Invalid email address')
    .matches(/^[^\s]+[^\s]+[^\s]+$/, 'Email must contain "@"')
    .required('Email is required')
    .test('injection', 'Invalid characters detected', (value) => {
      const injectionPattern = /[`~!#$%^&*()|+=?;:'",<>{}[\]\\\/]/;
      return value ? !injectionPattern.test(value) : true;
    }),
  message: yup.string()
    .required('Message is required')
});

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    window.open(`mailto:mostafashawky399@gmail.com?subject=New Contact&body=${data.message}`);
  };
  
  return (
    <div className="w-full flex flex-col gap-y-8 items-center justify-center h-screen bg-gradient-to-b from-black to-[#021526] px-5 lg:px-32" id='Contact'>
      <div className='flex justify-between items-center w-[60%] max-md:w-full max-sm:flex-wrap'>
        <h1 className='font-BlackOps text-4xl text-white text-start pb-10'>Let&apos;s start a project together</h1>
        <Magnetics>
          <div className={`relative text-center overflow-hidden bg-white font-bold py-24 rounded-full min-w-[13rem] ${styles.hoverBg}`}>
            Get in touch
          </div>
        </Magnetics>
      </div>
      <div className="relative h-2 w-[60%] max-md:w-full bg-[#00eeff]">
        <div className={`absolute top-2 left-[-1px] bg-[#00eeff] w-20 h-3 ${styles.clipCustom}`}></div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='w-[60%] max-md:w-full flex flex-col justify-center'>
        <div className='relative'>
        <div className="relative h-[90px] overflow-hidden">
          <input
            {...register('email')}
            type="text"
            id="email" 
            required
            className="input w-full h-full pt-5 text-white bg-transparent border-none outline-none"
          />
          <label htmlFor="email" className={styles.labelName}>
            <span className={styles.contentName}>Your E-mail</span>
          </label>
          {/* Render error message if the email is not valid */}
        </div>
          {errors.email && <p className="text-red-500 absolute left-0 bottom-[-23px]">{errors.email.message}</p>}
        </div>

        <div className='relative'>
        <div className="relative h-[90px] overflow-hidden">
          <input
            {...register('message')}
            type="text"
            id="message" 
            required
            className="input w-full h-full pt-10 text-white bg-transparent border-none outline-none"
          />
          <label htmlFor="message" className={styles.labelName}>
            <span className={styles.contentName}>Your Message</span>
          </label>
          {/* Render error message for message field */}
        </div>
          {errors.message && <p className="text-red-500 absolute left-0 bottom-[-23px]">{errors.message?.message}</p>}
        </div>
        <Magnetics>
          <button type="submit" className={`bg-transparent shadow-2xl border w-[200px] text-white font-bold py-5 px-5 mt-7 ${styles.hoverBg}`}>
            Send Message
          </button>
        </Magnetics>
      </form>
    </div>
  );
};

export default Contact;
