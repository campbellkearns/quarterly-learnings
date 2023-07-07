import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-accent text-secondary px-4 py-2">
            <nav className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <Link href="/">
                        <a className="text-lg font-serif">
                            Quarterly Learnings
                        </a>
                    </Link>
                </div>

                <div className="flex items-center space-x-4">
                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex lg:space-x-4">
                        <Link href="/services">
                            <a className="hover:text-primary">Services</a>
                        </Link>
                        <Link href="/about">
                            <a className="hover:text-primary">About</a>
                        </Link>
                        <Link href="/contact">
                            <a className="hover:text-primary">Contact</a>
                        </Link>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="lg:hidden">
                        <button
                            className="text-lg text-white hover:text-primary focus:outline-none"
                            onClick={toggleMobileMenu}
                        >
                            {isMobileMenuOpen ? (
                                <i
                                    className={
                                        "fa-regular fa-circle-xmark fa-xl"
                                    }
                                />
                            ) : (
                                <i className={"fa-solid fa-bars"} />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden">
                    <Link href="/services">
                        <a className="block px-4 py-2 hover:bg-primary hover:text-black">
                            Services
                        </a>
                    </Link>
                    <Link href="/about">
                        <a className="block px-4 py-2 hover:bg-primary hover:text-black">
                            About
                        </a>
                    </Link>
                    <Link href="/contact">
                        <a className="block px-4 py-2 hover:bg-primary hover:text-black">
                            Contact
                        </a>
                    </Link>
                </div>
            )}
        </header>
    );
}
