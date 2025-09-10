// category: string
// name: string
// price: string
// description?: string

import type { IMenuItem } from "../../interfaces/IMenuItem"

interface MenuItemProps {
  menuItem: IMenuItem[]
}

export default function MenuItem({ menuItem }: MenuItemProps) {
  return (
    <>
      <ul className="flex flex-wrap items-center justify-center">
        {menuItem.map((item) => (
          <li key={item.name} className="flex flex-col w-[25rem] px-[2rem] py-[1rem]">
            <div className="banny-font text-xl">
              <p>
                {item.name} . . . . {item.price}
              </p>
            </div>
            <p className="text-gray-500">{item.description}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
