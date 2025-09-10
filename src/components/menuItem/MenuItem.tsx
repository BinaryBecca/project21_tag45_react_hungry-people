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
      <ul>
        {menuItem.map((item) => (
          <li key={item.name} className="flex flex-row gap-[1rem]">
            <div className="flex flex-col">
              <p className="banny-font text-l">{item.name}</p>
              <p className="text-gray-200">{item.description}</p>
            </div>
            <div>
              <p className="banny-font text-l">{item.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
