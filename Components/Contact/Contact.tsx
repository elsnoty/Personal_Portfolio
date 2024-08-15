"use client"
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
  email: yup.string().email().required(),
  message: yup.string().required(),
});

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    window.open(`mailto:mostafashawky399@gmail.com?subject=New Contact&body=${data.message}`)
  };

  return (
    <div className="w-full flex flex-col gap-y-8 items-center justify-center h-screen bg-[rgb(28,29,32)] px-5 lg:px-36 ">
      <h1 className='font-BlackOps text-4xl text-white text-start w-[50%] max-md:w-full pb-10'>Let&apos;s start a project together</h1>
      <div className="relative h-2 w-[50%] max-md:w-full bg-[#00eeff]">
        <div className={`absolute top-2 left-[-1px] bg-[#00eeff] w-20 h-3 ${styles.clipCustom}`}></div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='w-[50%] max-md:w-full flex flex-col justify-center'>
      <div className=" relative h-[90px] overflow-hidden">
        <input
        {...register('email')}
          type="email"
          required
          className="w-full h-full pt-7 text-white bg-transparent border-none outline-none"
        />
        <label htmlFor="text" className={styles.labelName}>
          <span className={styles.contentName}>Your E-mail</span>
        </label>
        <p className="text-red-500">{errors.email?.message}</p>
      </div>

      <div className=" relative h-[90px] overflow-hidden">
        <input
        {...register('message')}
          type="text"
          required
          className="w-full h-full pt-5 text-white bg-transparent border-none outline-none"
        />
        <label htmlFor="text" className={styles.labelName}>
          <span className={styles.contentName}>Your Text</span>
        </label>
      </div>
      <Magnetics>
      <button type="submit" className="bg-[#00eeff] w-[200px] text-black py-5 px-5 mt-5">
          Send Message
        </button>
        </Magnetics>
      </form>

    </div>
  );
};

export default Contact;
