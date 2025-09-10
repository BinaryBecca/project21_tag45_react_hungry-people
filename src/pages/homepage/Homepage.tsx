import React from "react"
import Headlines from "../../components/headlines/Headlines"
import Images from "../../components/images/Images"

export default function Homepage() {
  return (
    <>
      <section
        id="buttonDownEndPoint"
        className="container mx-auto py-[10rem] px-[2rem] flex flex-row justify-center items-center gap-[3rem]">
        <div>
          <Headlines
            headline1="ABOUT US"
            headline2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna."
            headline3="Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet."
          />
        </div>

        <div className="px-[3rem]">
          <Images imageSrc="/home-picture.png" imageAlt="picture of a kitchen" sideOfRectangle="-right-[6.5rem]" />
        </div>
      </section>
    </>
  )
}
