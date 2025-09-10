import Buttons from "../buttons/Buttons"
import Nav from "../nav/Nav"

export default function Header() {
  return (
    <header className="bg-[url('/header-bg.jpg')] bg-cover bg-center text-white">
      <Nav />

      <section className="container mx-auto grid grid-cols-3 gap-[2.5rem] items-center justify-around py-[6rem] px-[2rem]">
        <div className="flex justify-center items-start max-w-[3rem]">
          <p className="-rotate-90 text-nowrap">Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM</p>
        </div>

        <div className="flex flex-col items-center gap-[1rem] text-center">
          <h5>RESTAURANT</h5>
          <h1 className="banny-font text-[6rem]">HUNGRY PEOPLE</h1>
          <img className="w-20 object-contain" src="/yellow-line.png" alt="yellow line" />
          <div className="flex flex-row gap-[2rem] mb-[3rem]">
            <Buttons
              to="booking"
              buttonText="BOOK TABLE"
              backgroundColor="var(--buttonYellow)"
              borderColor="var(--buttonYellow)"
            />
            <Buttons to="booking" buttonText="BOOK TABLE" backgroundColor="transparent" borderColor="white" />
          </div>
          <img className="max-w-[3rem] object-contain" src="/header_clock.png" alt="clock" />
        </div>

        <div className="flex flex-col items-end justify-between gap-[1.5rem] ">
          <a href="https://www.facebook.com" target="_blank">
            <img className="max-w-[3rem] object-contain" src="/icon_facebook.png" alt="facebook" />
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <img className="max-w-[3rem] object-contain" src="/icon_twitter.png" alt="twitter" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img className="max-w-[3rem] object-contain" src="/icon_instagram.png" alt="instagram" />
          </a>
        </div>
      </section>
    </header>
  )
}
