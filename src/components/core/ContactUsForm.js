import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import {VscSend} from "react-icons/vsc"
import CountryCode from "../../data/countrycode.json"
import { apiConnector } from "../../services/apiConnector"
import { contactusEndpoint } from "../../services/api"
import { toast } from "react-hot-toast"
 
 
export function ContactUsForm(){
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm()

  const submitContactForm = async (data) => {
    
    try {
      setLoading(true)
      const res = await apiConnector(
        "POST",
        contactusEndpoint.CONTACT_US_API,
        data
      )
       toast.success("Your message was Recieved. Thank you for contacting!");
      setLoading(false)
    } catch (error) {
      console.log("Error Message ", error.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        name: "",
        message: "",
        phoneNo: "",
      })
    }
  }, [reset, isSubmitSuccessful])

  return (
    <form
      className=" w-full mx-auto mt-16 "
      onSubmit={handleSubmit(submitContactForm)}
    >
      <div className="flex  gap-12 mb-10 items-center justify-between">
        <div className="">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className=" mt-1 block w-full form-style px-5 py-7  border border-slate-300 rounded-md text-sm shadow-sm placeholder-richblack-800 text-richblack-900
    focus:outline-none focus:border-sky-800 focus:ring-1 focus:ring-sky-500
    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    invalid:border-pink-500 invalid:text-pink-600
    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="-mt-1 text-[12px] text-[#b91c1c] dark:text-yellow-100">
              Please enter your name.
            </span>
          )}
        </div>
        <div className="">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className=" mt-1 block w-full px-5 py-7 form-style border   border-slate-300 rounded-md text-sm shadow-sm placeholder-richblack-800 text-richblack-900
    focus:outline-none focus:border-sky-800 focus:ring-1 focus:ring-sky-500
    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    invalid:border-pink-500 invalid:text-pink-600
    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="-mt-1 text-[12px] text-[#b91c1c] dark:text-yellow-100">
            Please enter your Email address.
          </span>
        )}
      </div>
      </div>

       

      <div className="flex flex-col gap-2 mb-10">
        <div className="flex gap-5">
          <div className="flex w-[81px] flex-col gap-2">
            <select
              type="text"
              name="phonenumber"
              id="phonenumber"
              placeholder=""
              className="mt-1 block w-full px-4 py-4 form-style border border-slate-300 rounded-md text-sm shadow-sm placeholder-richblack-800 text-richblack-900
    focus:outline-none focus:border-sky-800 focus:ring-1 focus:ring-sky-500
    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    invalid:border-pink-500 invalid:text-pink-600
    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              {...register("countrycode")}
            >
              {CountryCode.map((ele, i) => {
                return (
                  <option key={i} value={ele.code}>
                    {ele.code} -{ele.country}
                  </option>
                )
              })}
            </select>
          </div>
          <div className="flex w-[calc(100%-90px)] flex-col gap-2">
            <input
              type="number"
              name="phonenumber"
              id="phonenumber"
              placeholder="12345 67890(optional)"
              className="mt-1 block w-full px-4 py-4 form-style border border-slate-300 rounded-md text-sm shadow-sm placeholder-richblack-800 text-richblack-900
    focus:outline-none focus:border-sky-800 focus:ring-1 focus:ring-sky-500
    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    invalid:border-pink-500 invalid:text-pink-600
    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              {...register("phoneNo")}
            />
          </div>
        </div>
         
      </div>

      <div className="flex flex-col gap-2">
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="7"
          placeholder="Message"
           className=" mt-1 block w-full px-3 py-2 form-style border border-slate-300 rounded-md text-sm shadow-sm placeholder-richblack-800 text-richblack-900
    focus:outline-none focus:border-sky-800 focus:ring-1 focus:ring-sky-500
    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    invalid:border-pink-500 invalid:text-pink-600
    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <span className="-mt-1 text-[12px] text-[#b91c1c] dark:text-yellow-100">
            Please enter your Message.
          </span>
        )}
      </div>

      <button
        disabled={loading}
        type="submit"
        className={`rounded-md bg-[#60a5fa] mt-8 px-6 py-5 flex sm:mx-auto items-center gap-4 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
         ${
           !loading &&
           "transition-all duration-200 hover:scale-95 hover:shadow-none"
         }  disabled:bg-richblack-500 sm:text-[16px] `}
      >
        Send Message <VscSend/>
      </button>
    </form>
  )
}

 
