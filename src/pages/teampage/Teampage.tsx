import React from "react"
import Images from "../../components/images/Images"
import Headlines from "../../components/headlines/Headlines"

export default function Teampage() {
  return (
    <>
      <section
        id="buttonDownEndPoint"
        className="container mx-auto py-[10rem] px-[2rem] flex flex-col justify-center items-center gap-[3rem] bg-[url('/team-bg.png')] text-white">
        <div>
          <p className="banny-font">OUR TEAM</p>
        </div>

        <div className="container mx-autopx-[2rem] flex flex-row justify-center items-center gap-[3rem]">
          <div className="px-[3rem]">
            <Images imageSrc="/team-picture.png" imageAlt="picture of a kitchen" sideOfRectangle="-left-[6.5rem]" />
          </div>

          <div>
            <Headlines
              headline1="MASTER CHEF"
              headline2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna."
              headline3="Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet."
            />
          </div>
        </div>
      </section>
    </>
  )
}
