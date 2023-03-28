import { CSS_CLASSES } from "./constants";
import './styles.css';

const buildClassNames = (rootClass, classMappings, userClassName) => {
    let classNames = `${rootClass}`;
    Object.keys(classMappings).forEach((className) => {
        if(classMappings[className]) {
            classNames += ` ${className}`;
        }
    })
    classNames += ` ${userClassName}`;
    return classNames;
}

const renderIcon = (icon, iconClass) => {
    const ICON = icon;
    return <ICON className={`${CSS_CLASSES.ICON} ${iconClass}`} />
}

const Button = ({
    className,
    raised,
    unelevated,
    outlined,
    dense,
    notCased,
    disabled,
    icon,
    iconClass,
    href,
    onClick,
    children
}) => {

    const classNames = buildClassNames(
    CSS_CLASSES.ROOT, 
    {
        [CSS_CLASSES.DENSE]: dense,
        [CSS_CLASSES.RAISED]: raised,
        [CSS_CLASSES.OUTLINED]: outlined,
        [CSS_CLASSES.UNELEVATED]: unelevated,
        [CSS_CLASSES.UPPERCASE]: !notCased
    }, 
    className);

    if(href) {
        return (
            <a href={href} className={classNames} disabled={disabled}>
                {icon ? renderIcon(icon, iconClass) : null}
                <span className="Button__Label">{children}</span>
            </a>
        )
    }

    return (
        <button onClick={onClick} className={classNames} disabled={disabled}>
            {icon ? renderIcon(icon, iconClass) : null}
            <span className="Button__Label">{children}</span>
        </button>
    );
}

export default Button;