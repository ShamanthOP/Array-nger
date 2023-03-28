import BackDrop from "../../atoms/BackDrop";
import Button from "../../atoms/Button";
import './styles.css';

import {
  MdExpandMore as AngleDown,
  MdExpandLess as AngleUp
} from 'react-icons/md';
import { useState } from "react";

const MenuList = ({ open, items, onSelect }) => {
    return open ? (
        <ul className="Menu__List">
            {items.map((item, i) => {
                return <li 
                    key={`${item}_${i}`}
                    className="Menu__Item"
                    onClick={(event => {
                        onSelect(event, item);
                    })}
                >{item}</li>
            })}
        </ul>
    ) : null;
}

const Menu = ({ className, selected, onSelect, placeholder, items, noDropIcon }) => {
    const [open, setOpen] = useState(false);

    const closeMenu = (event) => {
        event.preventDefault();
        setOpen(false);
    }

    const toggleMenu = (event) => {
        event.preventDefault();
        setOpen(!open);
    }

    const onItemSelect = (event, item) => {
        onSelect(item);
        closeMenu(event);
    }

    return (
        <div>
            <BackDrop show={open} onClick={closeMenu} />
            <div className={`Menu ${className}`}>
                <header className="Menu__Header">
                    {noDropIcon ? (
                        <Button
                            onClick={toggleMenu}
                            notCased
                            className={selected ? null : 'Menu__Placeholder'}
                        >
                            {selected ? selected : placeholder}
                        </Button>
                        ) : (
                        <div className={selected ? 'Menu__SelectedItem' : 'Menu__Placeholder'}>
                            {selected ? selected : placeholder}
                        </div>
                    )}
                    {noDropIcon ? null : (
                        <Button
                            icon={open ? AngleUp : AngleDown}
                            onClick={toggleMenu}
                        />
                    )}
                </header>
                <MenuList open={open} items={items} onSelect={onItemSelect} />
            </div>
        </div>
    );
}

export default Menu;