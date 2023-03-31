import './styles.css';

const Footer = () => {
    return (
        <footer className="Footer">
            <section>
                <span className="Footer__Heart">&hearts;</span>
                <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Footer__Link"
                >
                    Shamanth
                </a>
            </section>
    
            <section className="Footer__Items">
            <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="Footer__Link"
            >
                Demo
            </a>
            <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="Footer__Link"
            >
                Code
            </a>
            </section>
        </footer>
    );
}

export default Footer;