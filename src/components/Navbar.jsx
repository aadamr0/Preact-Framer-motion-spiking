import { Menu } from "preact-feather"
import { X } from "preact-feather"

import { useRef } from "preact/hooks";

export function Navbar() {
const navRef = useRef()
const showNavbar = () => {
    navRef.current.classList.toggle("responsive-navbar")
}

    return (
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Portfolio</a>
                <a href="/">Blog</a>
                <button className={"nav-btn nav-close-btn"} onClick={showNavbar}>
                    <X />
                </button>
            </nav>
            <button className={"nav-btn nav-open -btn"} onClick={showNavbar}>
                <Menu />
            </button>
        </header>
    )
}