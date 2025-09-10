interface ImagesProps {
  imageSrc: string
  imageAlt: string
  sideOfRectangle: string
}

export default function Images({ imageSrc, imageAlt, sideOfRectangle }: ImagesProps) {
  return (
    <>
      <div className="relative">
        <img className="relative object-contain w-[80rem]" src={imageSrc} alt={imageAlt} />
        <img
          className={`object-contain absolute top-[3rem] w-[20rem] ${sideOfRectangle}`}
          src="/yellow-rectangle.png"
          alt="yellow rectangle"
        />
      </div>
    </>
  )
}
