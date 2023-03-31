import './styles.css';

import Button from '../../atoms/Button';
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";


const Footer = () => {
    return (
        <footer className="Footer">
            <section>
                <Button
                    href="https://github.com/ShamanthOP"
                    icon={GoMarkGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Footer__Link"
                />
            </section>

            <section>
                <Button
                    href="https://www.linkedin.com/in/shamanth-u-b9b332204/"
                    icon={BsLinkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Footer__Link"
                />
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
                href="https://github.com/ShamanthOP/Array-nger"
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