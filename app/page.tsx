import Image from "next/image";
import data from "../data.json";

export default function Home() {
  return (
    <div className="flex items-center">
      <Image 
        src={data.avatar}
        alt={data.name}
        width={48}
        height={48}
      />
    </div>
  )
}
