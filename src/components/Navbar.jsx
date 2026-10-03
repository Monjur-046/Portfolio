import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#D5DDD5]">
            <div className="max-w-6xl mx-auto px-6 py-4">

                {/* Top Bar */}
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    {/*<a
                        href="#home"
                        className="text-2xl font-bold text-[#20251F]"
                        onClick={() => setMenuOpen(false)}
                    >
                        Monjur E Alahi
                    </a>*/}

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-8">
                        <li>
                            <a
                                href="#home"
                                className="text-[#3F6B4F] hover:text-[#3F6B4F] transition"
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                href="#about"
                                className="text-[#3F6B4F] hover:text-[#3F6B4F] transition"
                            >
                                About
                            </a>
                        </li>

                        <li>
                            <a
                                href="#skills"
                                className="text-[#3F6B4F] hover:text-[#3F6B4F] transition"
                            >
                                Skills
                            </a>
                        </li>

                        <li>
                            <a
                                href="#projects"
                                className="text-[#3F6B4F] hover:text-[#3F6B4F] transition"
                            >
                                Projects
                            </a>
                        </li>

                        <li>
                            <a
                                href="#contact"
                                className="text-[#3F6B4F] hover:text-[#3F6B4F] transition"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-[#20251F] text-2xl"
                        aria-label="Toggle menu"
                    >
                        ☰
                    </button>

                </div>

                {/* Mobile Navigation */}
                {menuOpen && (
                    <ul className="md:hidden mt-4 pb-2 space-y-4">

                        <li>
                            <a
                                href="#home"
                                onClick={() => setMenuOpen(false)}
                                className="block text-[#667066] hover:text-[#3F6B4F] transition"
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                href="#about"
                                onClick={() => setMenuOpen(false)}
                                className="block text-[#667066] hover:text-[#3F6B4F] transition"
                            >
                                About
                            </a>
                        </li>

                        <li>
                            <a
                                href="#skills"
                                onClick={() => setMenuOpen(false)}
                                className="block text-[#667066] hover:text-[#3F6B4F] transition"
                            >
                                Skills
                            </a>
                        </li>

                        <li>
                            <a
                                href="#projects"
                                onClick={() => setMenuOpen(false)}
                                className="block text-[#667066] hover:text-[#3F6B4F] transition"
                            >
                                Projects
                            </a>
                        </li>

                        <li>
                            <a
                                href="#contact"
                                onClick={() => setMenuOpen(false)}
                                className="block text-[#667066] hover:text-[#3F6B4F] transition"
                            >
                                Contact
                            </a>
                        </li>

                    </ul>
                )}

            </div>
        </nav>
    );
}

export default Navbar;