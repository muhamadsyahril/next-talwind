import Link from "next/dist/client/link";
import Image from "next/image";
import logoImage from '../images/logo.png';

export default function Navbar() {
    const menuList = [
        { text: "Our Services", href: "/services" },
        { text: "Projects", href: "/projects" },
        { text: "Our Team", href: "/teams" },
        { text: "Contact", href: "/contact" },
    ]
    return (
        <nav className="text-primary">
            <div className="container mx-auto">
                <div className="py-8 flex">
                    <div className="w-6/12 space-x-2 text-xl">
                        <Link href="/">
                            <a>
                                <Image src={logoImage} width={150} height={36} />
                            </a>
                        </Link>
                    </div>
                    <div className="w-6/12">
                        <ul className="space-x-14 flex text-xl item-center">
                            {menuList.map(({ text, href }) => (
                                <li>
                                    <Link href={href}>
                                        <a className="hover:underline">{text}</a>
                                    </Link>
                                </li>
                            ))} 
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}