import { useState, useEffect } from 'react';
import '../styles/navbar.css';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Scroll effect to apply "scrolled" class
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Smooth scroll behavior for anchor links
    useEffect(() => {
        const handleSmoothScroll = (e) => {
            const target = document.querySelector(e.currentTarget.getAttribute("href"));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        };

        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => link.addEventListener("click", handleSmoothScroll));

        return () => {
            links.forEach(link => link.removeEventListener("click", handleSmoothScroll));
        };
    }, []);

    // Toggle menu handler
    const handleMenuToggle = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <header>
            <nav className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
                <a href="/" className="logo">SAM</a>

                <button
                    className="menu-toggle"
                    aria-label="Toggle Nav Bar"
                    onClick={handleMenuToggle}
                >
                    <span className="toggle-bar"></span>
                    <span className="toggle-bar"></span>
                    <span className="toggle-bar"></span>
                </button>

                <ul className={`navbar-nav ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href="#hero" className="navbar-item"><span className="link-text">Home</span></a></li>
                    <li><a href="#projects" className="navbar-item"><span className="link-text">Project</span></a></li>
                    <li><a href="#contact" className="navbar-item"><span className="link-text">Contact</span></a></li>
                    <li>
                        <a
                            href="/Samrakshan-Sitaula-cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="navbar-item"
                        >
                            <span className="link-text">Resume</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}