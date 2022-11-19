export default function List({ image, title, desc }) {
 
  return (
    <div className="grid grid-cols-1">
      <img src={image} className="w-64 rounded-md aspect-[3/4]" />
      <h4 className="text-xl font-sans font-semibold text-black">{title}</h4>
      <h4 className="text-xl font-sans font-normal text-black">{desc}</h4>
    </div>
  )
}