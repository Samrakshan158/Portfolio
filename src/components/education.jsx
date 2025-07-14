import { useEffect } from 'react';
import '../styles/education.css';

export default function Education() {
    useEffect(() => {
        // Reveal elements on scroll
        const revealElements = document.querySelectorAll(".education-entry");

        const revealOnScroll = () => {
            const triggerBottom = window.innerHeight * 0.80;

            revealElements.forEach(el => {
                const rectTop = el.getBoundingClientRect().top;
                const rectBottom = el.getBoundingClientRect().bottom;

                if (rectTop < triggerBottom && rectBottom > 0) {
                    el.classList.add("visible");
                } else {
                    el.classList.remove("visible");
                }
            });
        };

        window.addEventListener("scroll", revealOnScroll);

        return () => {
            window.removeEventListener("scroll", revealOnScroll);
        }
    }, []);
    
    const educations = [
        {
            institution: "Kabhre Secondary School",
            degree: "Secondary Education Examination (SEE)",
            address: "Banepa-6, Kavrepalanchok",
            graduationDate: "2075 B.S. (2019 A.D.)"
        },
        {
            institution: "Banepa Nist",
            degree: "+2 in Science",
            address: "Nayabasti-9, Banepa",
            graduationDate: "2078 B.S. (2021 A.D.)"
        },
        {
            institution: "Bhaktapur Multiple Campus",
            degree: "B.Sc.CSIT",
            address: "Doodhpati, Bhaktapur",
            graduationDate: "Expected Graduation: Chaitra 2082 B.S. (April 2026 A.D.)"
        }
    ];

    return (
        <section id="education">
            <h2>Education</h2>

            {educations.map((edu, index) => (
                <div className="education-entry" key={index}>
                    <h3>{edu.institution}</h3>
                    <p className="degree">{edu.degree}</p>
                    <p className="address">{edu.address}</p>
                    <p className="graduation-date">{edu.graduationDate}</p>
                </div>
            ))}
        </section>
    )
}