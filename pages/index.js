import { useState } from "react";
import Card from "../components/card";
import Image from "next/image";

export default function Home() {

  const [users, setUsers] = useState([])
  const [fullName, setFullName] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [dOB, setDob] = useState("")
  const [phone, setPhone] = useState("")
  const [picture, setPicture] = useState("")
  const [password, setPassword] = useState("")
  const [address, setAddress] = useState("")

  const getUsers = async () => {
    try {
      const res = await fetch(`https://randomuser.me/api`)
      const user = await res.json()
      const userdata = user.results[0]
      setUsers([{
        firstName: userdata?.name.first,
        fullName: `${userdata?.name.title}. ${userdata?.name.first} ${userdata?.name.last}`,
        emailAddress: userdata?.email,
        dOB: userdata?.dob.date,
        phone: userdata?.phone,
        password: userdata?.login.password,
        picture: userdata?.picture.medium,
        location: userdata?.location
      }, ...users])
    } catch (error) {
      console.error(error);
    }
  }

  const addNewUser = user => {
    setUsers([user, ...users])
  }

  return (
    <div className="max-w-screen-lg lg:mx-auto">

      <form className="text-gray-700 space-y-24 py-48">

        <div>
          <div className="text-18 text-gray-900 font-medium">
            Personal information
          </div>
          <div className="font-light text-gray-500">
            This information will be displayed publicly so be careful what you share.
          </div>
        </div>

        <div>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Your Name"
            onChange={e => setFullName(e.target.value)}
            maxLength={50}
            className="w-1/2 block form-input px-4 py-3 rounded-lg" />
        </div>
        <div>
          <label>Email address</label>
          <input
            type="email"
            placeholder="yourmail@mail.com"
            onChange={e => setEmailAddress(e.target.value)}
            className="w-1/2 block form-input px-4 py-3 rounded-lg" />
        </div>
        <div>
          <label>Date of Birth</label>
          <input
            type="date"
            onChange={e => setDob(e.target.value)}
            className="w-1/2 block form-input px-4 py-3 rounded-lg" />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            placeholder="Street Address"
            onChange={e => setAddress(e.target.value)}
            maxLength={255}
            className="w-full block form-input px-4 py-3 rounded-lg" />
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="text"
            pattern="[+62][0-9]{13}"
            placeholder="e.g +6285243322433"
            onChange={e => setPhone(e.target.value)}
            className="w-1/2 block form-input px-4 py-3 rounded-lg" />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            onChange={e => setPassword(e.target.value)}
            // pattern="^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$"
            required
            className="w-1/2 block form-input px-4 py-3 rounded-lg" />
          <span className="text-gray-500 text-14">
            Minimum of 6 characters, with upper & lower case, a number and a symbol.
          </span>
        </div>

        <div className="justify-between flex">
          <div className="space-x-12">
            <button
              type="reset"
              className="font-medium px-16 py-8 rounded-lg border border-gray-300">
              Cancel
            </button>
            <button
              onClick={(e) => {
                e.preventDefault()
                addNewUser({
                  firstName: fullName,
                  fullName,
                  emailAddress,
                  dOB,
                  phone,
                  password,
                  picture,
                  phone,
                  location: {
                    city: address
                  }
                })
              }}
              className="font-medium px-16 py-8 rounded-lg border border-gray-300 bg-indigo-600 text-white">
              Submit
            </button>
          </div>
          <button
            onClick={getUsers}
            className="font-medium px-16 py-8 rounded-lg border border-gray-300 bg-indigo-100 text-indigo-700">
            Auto Generate
          </button>
        </div>

      </form>

      <div className="text-center cursor-pointer text-red-500 font-medium" onClick={() => setUsers([])}>
        Clear All List User
      </div>
      {
        !users.length >= 1 &&
        <div className="flex items-center justify-center">
          <Image
            width={300}
            height={300}
            src="/assets/no-content-backup.svg" />
        </div>
      }
      <div className="grid grid-cols-4 gap-24 py-48">

        {
          users?.map((item, index) =>
            <div key={index}>
              <Card item={item} />
            </div>
          )
        }
      </div>
    </div>
  )
}