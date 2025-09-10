import { useState } from "react"
import Headlines from "../../components/headlines/Headlines"
import type { IMenuItem } from "../../interfaces/IMenuItem"
import hungryData from "../../data"
import MenuItem from "../../components/menuItem/MenuItem"
export default function Menupage() {
  const [menu, setMenu] = useState<IMenuItem[]>([])

  // const menuCategories2: IMenuItem[] = hungryData.filter((menucategory) => console.log(menucategory.category))

  const menuCategories = (category: string) => {
    const filteredMenu = hungryData.filter((item) => item.category === category)
    setMenu(filteredMenu)
  }

  return (
    <>
      <section
        id="buttonDownEndPoint"
        className="container mx-auto py-[10rem] px-[2rem] flex flex-col justify-center items-center gap-[3rem]">
        <Headlines
          headline1="DELICIOUS MENU"
          headline2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna."
        />

        <div className="flex flex-row">
          <button className="p-[2rem] font-bold" onClick={() => menuCategories("pizza")}>
            PIZZA
          </button>
          <span className="text-gray-500 p-[2rem]">|</span>
          <button className="p-[2rem] font-bold" onClick={() => menuCategories("pasta")}>
            PASTA
          </button>
          <span className="text-gray-500 p-[2rem]">|</span>
          <button className="p-[2rem] font-bold" onClick={() => menuCategories("dessert")}>
            DESSERT
          </button>
          <span className="text-gray-500 p-[2rem]">|</span>
          <button className="p-[2rem] font-bold" onClick={() => menuCategories("getränke")}>
            DRINKS
          </button>
        </div>

        {/* <div>
            {menuCategories.map((category, index) => (
              <p key={index}>{category.category}</p>
            ))}
          </div> */}

        <MenuItem menuItem={menu} />

        <div></div>
      </section>
    </>
  )
}
