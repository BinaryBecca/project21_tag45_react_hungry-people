import React from "react"
import Headlines from "../../components/headlines/Headlines"

export default function Menupage() {
  return (
    <>
      <section
        id="buttonDownEndPoint"
        className="container mx-auto py-[10rem] px-[2rem] flex flex-col justify-center items-center gap-[3rem]">
        <Headlines
          headline1="DELICIOUS MENU"
          headline2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna."
        />
      </section>
    </>
  )
}
