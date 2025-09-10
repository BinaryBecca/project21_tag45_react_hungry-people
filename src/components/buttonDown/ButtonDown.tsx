interface ButtonDownProps {
  IDButtonDown: string
}

export default function ButtonDown({ IDButtonDown }: ButtonDownProps) {
  return (
    <>
      <a href={`#${IDButtonDown}`}>
        <img className="max-w-[3rem] object-contain" src="/header_arrow.png" alt="arrow" />
      </a>
    </>
  )
}
