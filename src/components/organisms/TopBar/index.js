import Button from '../../atoms/Button';
import { MdMenu as Hamburger, MdClose as Close } from 'react-icons/md';
import './styles.css';

const TopBar = ({drawerOpen, toggleDrawer, children}) => {
    return (
        <header className='TopBar'>
            <div className='TopBar__Row'>
                <section className='TopBar__Section'>
                    <Button 
                        className="TopBar__MenuButton"
                        icon={drawerOpen ? Close : Hamburger}
                        iconClass="TopBar__Icon"
                        onClick={toggleDrawer}
                    />
                    <span className='TopBar__Title'>Array-nger</span>
                </section>
                <section className='TopBar__Section TopBar__Section_align_end'>
                    {children}
                </section>
            </div>
        </header>
    );
}

export default TopBar;