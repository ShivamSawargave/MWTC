
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL


function Contactus() {
    const location=useLocation();
    const from= location.state?.pathname || "/"
    const navigate=useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit =async (data) => {
        const userInfo = {
            fullname: data.fullname,
            mobilenumber: data.mobilenumber,
            email: data.email,
           
        }
        await axios.post(`${BACKEND_URL}/user/contactus`,userInfo).then((res)=>{
            console.log(res.data)
            if(res.data){
                toast.success('We will contact you soon');
                navigate(from,{replace:true});
            }
            localStorage.setItem("Users",JSON.stringify(res.data.user))
        }).catch((err)=>{
           if(err.response){
            console.log(err);
            toast.error("Error: " + err.response.data.message);
           }
        })
    };
  return (
    <>
     <div className='flex h-screen items-center justify-center'>
                <div id="my_modal_3" className="w-[600px] bg-sky-200 rounded-3xl pl-2 py-10 shadow-2xl ml-10 flex justify-center">
                    <div className="">
                       
                        <h3 className="font-bold text-sky-600 text-4xl">Contact Us</h3>
                        {/*name */}
                        <div className='mt-4 space-y-2'>
                            <span>Name</span>
                            <br />
                            <input  {...register("fullname", { required: true })} type="text" placeholder='Enter your Fullname' className='w-72 px-3 py-1 border rounded-md outline-none' />
                            <br />
                            {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        {/*number */}
                        <div className='mt-4 space-y-2'>
                            <span>Mobile Number</span>
                            <br />
                            <input  {...register("mobilenumber", { required: true })} type="Number" placeholder='Enter your Mobile Number' className='w-72 px-3 py-1 border rounded-md outline-none' />
                            <br />
                            {errors.mobilenumber && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        {/*email*/}
                        <div className='mt-4 space-y-2'>
                            <span>Email</span>
                            <br />
                            <input  {...register("email", { required: true })} type="Email" placeholder='Enter your Email' className='w-72 px-3 py-1 border rounded-md outline-none' />
                            <br />
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        {/*button */}
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            <div className='flex items-center mt-4'>
                                <button className='bg-sky-400 text-white rounded-md p-4 hover:bg-sky-600 duration-200'>Let's Talk</button>
                     
                            </div>
                        </form>
                    </div>
                </div>
            </div>

    </>
  )
}

export default Contactus