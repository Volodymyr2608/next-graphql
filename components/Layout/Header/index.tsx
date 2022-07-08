import Link from "next/link";
import { links } from "../../../constants";

const Header = () => {
  return (
    <header className="px-5 py-3 flex items-center justify-between">
      <div>Logo</div>
      <nav>
        <ul className="flex items-center justify-between pr-3">
          {links.map((link) => (
            <Link href={link.url} key={link.title}>
            <li className="pr-3 cursor-pointer hover:text-green-500 transition-all">
              <a>{link.title}</a>
            </li>
          </Link>
          ))}
        </ul>
      </nav>    
    </header>
  )
}

export default Header;