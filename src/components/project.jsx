import { useEffect } from 'react';
import '../styles/project.css'

export default function Project() {
    const projectData = [
        {
            title: "Tic Tac Toe Game",
            description: `A simple, interactive web-based Tic Tac Toe game built using HTML, CSS, and JavaScript. 
                      The game features a dynamic 3x3 grid, real-time win/draw detection, and a reset button 
                      for replayability. Designed with modular JavaScript logic and responsive UI for an engaging 
                      user experience.`,
            image:  `${import.meta.env.BASE_URL}tic-tac-toe.png`,
            link: "https://samrakshan158.github.io/tic-tac-toe/"
        },
        {
            title: "Calculator",
            description: `A functional and responsive calculator built with HTML, CSS, and JavaScript. 
                      It supports basic arithmetic operations including addition, subtraction, multiplication, 
                      division, modulus and decimal input. The interface dynamically updates in real-time and handles 
                      edge cases with simple validation and playful error messages.`,
            image: `${import.meta.env.BASE_URL}calculator.png`,
            link: "https://samrakshan158.github.io/calculator/"
        },
        {
            title: "To-do List",
            description: `A responsive and interactive to-do list application built with HTML, CSS, and JavaScript. 
                      Features include task creation with priority and deadline, local storage persistence, 
                      filtering by status and priority, and real-time task management with visual cues.`,
            image: `${import.meta.env.BASE_URL}to-do-list.png`,
            link: "https://samrakshan158.github.io/To-Do-List/"
        },
        {
            title: "Book Recommendation System",
            description: `A frontend for a book recommendation system that currently fetches book data from a public API due to the absence of backend components. The app allows users to search and browse books, providing a clean and responsive UI. Plans are in place to integrate a custom backend soon, enabling personalized recommendations and enhanced features for a complete recommendation experience.`,
            image: `${import.meta.env.BASE_URL}book-catalog.png`,
            link: "https://samrakshan158.github.io/book-recommendation-system/"
        }
    ];

    const viewProject = (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
    );

    useEffect(() => {
        // Reveal elements on scroll
        const revealElements = document.querySelectorAll(".project-card");

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


    return (
        <section id="projects">
            <h2>My Projects</h2>

            <div className="projects">
                {
                    projectData.map((project, index) => (
                        <div className="project-card" key={index}>
                            <img src={project.image} alt={project.title} className='project-image' />
                            <h3 className='project-title'>{project.title}</h3>
                            <p className='project-description'>{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="view-project"
                            >View Project {viewProject}</a>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}