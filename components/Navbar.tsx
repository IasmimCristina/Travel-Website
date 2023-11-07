
import { NAV_LINKS } from "@/constants"
import Link from "next/link"
import Button from "./Button"
import Image from "next/image"






const Navbar = () => {


  return (
    <nav className="  padding-container   relative z-30 py-3  bg-blue-70  ">

      <div className=" flexBetween max-container  ">
        <Link href={"/"} >
          <p className="text-2xl font-semibold text-slate-100">

            Férias<span className="text-yellow-50">Indo</span>.
          </p>

        </Link>
        <ul className="hidden gap-12  lg:flex h-full   text-yellow-50 items-center ">

          {NAV_LINKS.map(link => (
            <Link href={link.href} key={link.key} className="regular-16 cursor-pointer pb-1.5 transition-all hover:font-bold ">
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="lg:flexCenter hidden">
          <Button icon="user.svg" type="button" title="Entrar" variant="btn_dark_yellow" />
        </div>
        <Image src={"/menu.svg"} alt="Menu" width={32} height={32} className="inline-block cursor-pointer lg:hidden" />

      </div>


      {/* Hamburger menu missing fix. Stopped at 31:13 */}

    </nav>
  )
}

export default Navbar