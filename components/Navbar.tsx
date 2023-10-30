import Link from "next/link"


const Navbar = () => {
  return (
    <nav className=" flex-between max-container padding-container relative z-30 py-5 bg-blue-70">
      <Link href={"/"}>
        <p className="text-2xl font-semibold text-slate-100">

          Férias<span className="text-yellow-50">Indo</span>.
        </p>

        <ul className="hidden h-full gap-12 lg:flex"></ul>
      </Link>
    </nav>
  )
}

export default Navbar