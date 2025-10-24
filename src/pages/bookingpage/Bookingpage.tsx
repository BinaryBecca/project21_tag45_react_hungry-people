import React, { useState } from "react"
import Images from "../../components/images/Images"
import Headlines from "../../components/headlines/Headlines"
import Buttons from "../../components/buttons/Buttons"

interface IBooking {
  name: string
  email: string
  phone: string
  people: string
  date: string
  time: string
}

export default function Bookingpage() {
  const [formInput, setFormInput] = useState<IBooking>({
    name: "",
    email: "",
    phone: "",
    people: "",
    date: "",
    time: "",
  })

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false)

  const nameFunc = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormInput({ ...formInput, name: event.target.value })
  }

  const emailFunc = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormInput({ ...formInput, email: event.target.value })
  }

  const phoneFunc = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormInput({ ...formInput, phone: event.target.value })
  }

  const peopleFunc = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormInput({ ...formInput, people: event.target.value })
  }

  const dateFunc = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormInput({ ...formInput, date: event.target.value })
  }

  const timeFunc = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormInput({ ...formInput, time: event.target.value })
  }

  const loginFunc = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formInput, "wurde erfolgreich eingeloggt")
    setFormSubmitted(true)
  }

  return (
    <>
      <section
        id="buttonDownEndPoint"
        className="container mx-auto py-[10rem] px-[2rem] flex flex-row justify-center items-center gap-[3rem]">
        {!formSubmitted ? (
          <form className="container mx-auto flex flex-col" onSubmit={loginFunc}>
            <Headlines headline1="BOOK A TABLE" />
            <div className="grid grid-cols-2 grid-rows-3 gap-[1rem] p-[1rem]">
              <input
                type="text"
                placeholder="Name"
                className="p-[1rem] bg-gray-100"
                value={formInput.name}
                onChange={nameFunc}
                required
              />
              <input
                type="text"
                placeholder="Email"
                className="p-[1rem] bg-gray-100"
                value={formInput.email}
                onChange={emailFunc}
                required
              />
              <input
                type="number"
                placeholder="Phone"
                className="p-[1rem] bg-gray-100"
                value={formInput.phone}
                onChange={phoneFunc}
                required
              />

              <select className="p-[1rem] bg-gray-100" value={formInput.people} onChange={peopleFunc} required>
                <option value="" disabled>
                  People
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <input
                type="text"
                placeholder="Date (yyyy/mm/dd)"
                className="p-[1rem] bg-gray-100"
                value={formInput.date}
                onChange={dateFunc}
                required
              />
              <input
                type="text"
                placeholder="Time"
                className="p-[1rem] bg-gray-100"
                value={formInput.time}
                onChange={timeFunc}
                required
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center text-nowrap p-[1.5rem] text-white text-sm border rounded-[1rem] min-w-[10rem] bg-[var(--buttonYellow)] border-[var(--buttonYellow)]">
              BOOK TABLE
            </button>
          </form>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <Headlines headline1="BOOK A TABLE" />
            <p className="text-2xl font-bold">Thanks for dining with us.</p>
          </div>
        )}

        <div className="px-[3rem] w-full">
          <Images imageSrc="/booking-picture.png" imageAlt="picture of a kitchen" sideOfRectangle="-right-[6.5rem]" />
        </div>
      </section>
      <p className="text-center">Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM</p>
    </>
  )
}
