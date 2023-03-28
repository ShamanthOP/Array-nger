import { CSS_CLASSES } from './constants';
import './styles.css';

const buildClassNames = (rootClass, ClassMappings, userClassName) => {
    let classNames = `${rootClass}`;
    Object.keys(ClassMappings).forEach((className) => {
    if (ClassMappings[className]) {
        classNames += ` ${className}`;
    }
    });
    classNames += ` ${userClassName}`;
    return classNames;
}

const BackDrop = ({ className, show, opaque, dark, onClick }) => {
    const classNames = buildClassNames(
        CSS_CLASSES.ROOT,
        {
            [CSS_CLASSES.OPAQUE]: opaque,
            [CSS_CLASSES.DARK]: dark,
            [CSS_CLASSES.CLICKABLE]: onClick !== undefined
        },
        className
    );
    return show ? <div className={classNames} onClick={onClick}></div> : null;
}

export default BackDrop;