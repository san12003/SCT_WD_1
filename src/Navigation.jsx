import styles from "./Navigation.module.css";
import React, {useState} from "react";
import {Link} from "react-router";

function Navigation() {
    const [isActive, setActive] = useState(false);
    return (
        <nav className={styles.navigation}>
            {/*<a href="/services">Services</a>*/}
            {/*<a href="/about">About</a>*/}
            {/*<a href="/contact">Contact</a>*/}
            <h6 className={styles.comp}><span className={styles.lK}>K</span>aia</h6>
            <Link to={"/Services"}>Services</Link>
            <Link to={"/Abouts"}>About</Link>
            <Link to={"/Contacts"}>Contact</Link>
            <Link to={"/"}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64"
                     color={"white"}>
                    <path
                        id="hoverable-path"
                        d="M 32 3 L 1 28 L 1.4921875 28.654297 C 2.8591875 30.477297 5.4694688 30.791703 7.2304688 29.345703 L 32 9 L 56.769531 29.345703 C 58.530531 30.791703 61.140812 30.477297 62.507812 28.654297 L 63 28 L 54 20.742188 L 54 8 L 45 8 L 45 13.484375 L 32 3 z M 32 13 L 8 32 L 8 56 L 56 56 L 56 35 L 32 13 z M 26 34 L 38 34 L 38 52 L 26 52 L 26 34 z"
                        onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}
                        fill={isActive ? "#ffa200" : "white"}></path>
                </svg>
            </Link>

        </nav>
    )
}

export default Navigation;