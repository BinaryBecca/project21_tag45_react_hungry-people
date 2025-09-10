import React from "react"
import Images from "../../components/images/Images"
import Headlines from "../../components/headlines/Headlines"
import Buttons from "../../components/buttons/Buttons"

export default function Bookingpage() {
  return (
    <>
      <section
        id="buttonDownEndPoint"
        className="container mx-auto py-[10rem] px-[2rem] flex flex-row justify-center items-center gap-[3rem]">
        <div className="container mx-auto flex flex-col">
          <Headlines headline1="BOOK A TABLE" />
          <div className="grid grid-cols-2 grid-rows-3 gap-[1rem] p-[1rem]">
            <input type="text" placeholder="Name" className="p-[1rem] bg-gray-100" />
            <input type="text" placeholder="Email" className="p-[1rem] bg-gray-100" />
            <input type="text" placeholder="Phone" className="p-[1rem] bg-gray-100" />
            <input type="text" placeholder="People" className="p-[1rem] bg-gray-100" />
            <input type="text" placeholder="Date (yyyy/mm/dd)" className="p-[1rem] bg-gray-100" />
            <input type="text" placeholder="Time" className="p-[1rem] bg-gray-100" />
          </div>
          <Buttons
            to="booking"
            buttonText="BOOK TABLE"
            backgroundColor="var(--buttonYellow)"
            borderColor="var(--buttonYellow)"
          />
        </div>

        <div className="px-[3rem]">
          <Images imageSrc="/booking-picture.png" imageAlt="picture of a kitchen" sideOfRectangle="-right-[6.5rem]" />
        </div>
      </section>
    </>
  )
}
