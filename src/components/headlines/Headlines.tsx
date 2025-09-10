interface HeadlinesProps {
  headline1: string
  headline2: string
  headline3?: string
}

export default function Headlines({ headline1, headline2, headline3 }: HeadlinesProps) {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center gap-[1rem]">
        <h1 className="banny-font text-[2rem]">{headline1}</h1>
        <img className="w-20 object-contain" src="/yellow-line.png" alt="yellow line" />
        <h3 className="font-bold">{headline2}</h3>
        <h3>{headline3}</h3>
      </div>
    </>
  )
}
