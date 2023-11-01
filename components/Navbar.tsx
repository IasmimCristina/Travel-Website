import { NAV_LINKS } from "@/constants"
import Link from "next/link"


const Navbar = () => {
  return (
    <nav className="   padding-container  relative z-30 py-5  bg-blue-70">

      <div className="flexBetween max-container ">
        <Link href={"/"} >
          <p className="text-2xl font-semibold text-slate-100">

            Férias<span className="text-yellow-50">Indo</span>.
          </p>

        </Link>
        <ul className="hidden h-full gap-12 lg:flex text-yellow-50">

          {NAV_LINKS.map(link => (
            <Link href={link.href} key={link.key} className="regular-16 cursor-pointer pb-1.5 transition-all hover:font-bold ">
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="lg:flexCenter hidden">
          <button>CLIQUE AQUI</button>
        </div>
      </div>

    </nav>
  )
}

export default Navbar