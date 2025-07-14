import '../styles/hero.css';

export default function Hero() {

    return (
        <section className="hero-container" id="hero">
            <div className="hero-image">
                <img src={`${import.meta.env.BASE_URL}Samrakshan.jpeg`} alt="My Photo" />
            </div>

            <div className="hero-text" id="hero-text">
                <h2 className="hero-title">Hi! I am Samrakshan Sitaula</h2>
                <p className="hero-description">I'm passionate about creating responsive, accessible, and visually appealing web
                    interfaces using HTML, CSS and JavaScript. I enjoy bringing ideas to life as interactive digital
                    experiences and always upgrading my abilities through practical development and the learning of new
                    technologies.</p>
            </div>
        </section>
    )
}