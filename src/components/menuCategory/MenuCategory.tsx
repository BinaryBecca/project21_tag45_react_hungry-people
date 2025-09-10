import type { IMenuItem } from "../../interfaces/IMenuItem"

interface MenuCategoryProps {
  menuCategory: IMenuItem[]
  onClick: () => void
}

export default function MenuCategory({ menuCategory, onClick }: MenuCategoryProps) {
  return (
    <>
      <div>
        {menuCategory.map((category, index) => (
          <p key={index}>{category.category}</p>
        ))}
      </div>
    </>
  )
}
