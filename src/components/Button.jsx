// node modules 
import PropTypes from "prop-types";

// Prime Button
const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    classes = ""
}) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                download
                className={`btn btn-primary ${classes}`}
            >
                {label}
                {icon && (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                )}
            </a>
        )
    } else {
        return (
            <button className={`btn btn-primary ${classes}`}>
                {label}
                {icon && (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                )}
            </button>
        )
    }
}

ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}




// Outline Button
const ButtonOutline = ({
    href,
    target = '_self',
    label,
    icon,
    classes = ""
}) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={`btn btn-outline ${classes}`}
            >
                {label}
                {icon && (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                )}
            </a>
        )
    } else {
        return (
            <button className={`btn btn-outline ${classes}`}>
                {label}
                {icon && (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                )}
            </button>
        )
    }
}

ButtonOutline.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}
export {
    ButtonPrimary,
    ButtonOutline
}
