import type { IMenuItem } from "../../interfaces/IMenuItem"

interface MenuCategoryProps {
  menuCategory: string[]
  onClick: () => void
}

export default function MenuCategory({ menuCategory, onClick }: MenuCategoryProps) {
  return (
    <>
      <div>
        {menuCategory.map((category, index) => (
          <button key={index} onClick={onClick}>
            {category.toUpperCase()}
          </button>
        ))}
      </div>
    </>
  )
}
