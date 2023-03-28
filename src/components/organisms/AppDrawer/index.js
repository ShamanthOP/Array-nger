import BackDrop from "../../atoms/BackDrop";
import "./styles.css";

const AppDrawer = ({ drawerOpen, toggleDrawer, children }) => {
    let className = "AppDrawer";
    className += drawerOpen ? ` AppDrawer_open` : ` AppDrawer_closed`;

    return (
        <>
            <div className={className}>
                <div className="AppDrawer__Content">{children}</div>
            </div>
            <BackDrop show={drawerOpen} onClick={toggleDrawer} />
        </>
    );
}

export default AppDrawer;