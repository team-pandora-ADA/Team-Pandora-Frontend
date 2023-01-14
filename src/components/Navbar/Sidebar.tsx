import { FC } from "react";
import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import Icon from "../Icon/Icon";
import SearchBar from "../SearchBar/SearchBar";
import Typography from "../Typography/Typography";
import notifications from "../../assets/icons/notifications.svg";
import settlement from "../../assets/icons/settlements.svg";
import styles from "./Header.module.scss";

interface SidebarProps {
  open: boolean;
  close: () => void;
  logout: () => void;
}

const Sidebar: FC<SidebarProps> = (props) => {
  const { open, close, logout } = props;
  const handleLogout = () => {
    logout();
    close();
  };
  return (
    <>
      {open && <div className={styles.overlay} onClick={close} />}
      <aside
        className={`${styles.sidebar} ${open ? styles.open : ""}`}
        data-testid="side-navbar"
      >
        <AiFillCloseCircle onClick={close} data-testid="close-button" />
        <div className={styles.sidebarLinks}>
          <Link to="/docs" onClick={close}>
            <Icon src={settlement} />
            <Typography text="Docs" element="h5" />
          </Link>
          <Link to="/notifications" onClick={close}>
            <Icon src={notifications} />
            <Typography text="Notifications" element="h5" />
          </Link>
          <Link to="/profile" onClick={close}>
            <Icon src={settlement} />
            <Typography text="Profile" element="h5" />
          </Link>
          <Link to="/settings" onClick={close}>
            <Icon src={notifications} />
            <Typography text="Settings" element="h5" />
          </Link>
          <Link to="/login" onClick={handleLogout}>
            <Icon src={settlement} />
            <Typography text="Log Out" element="h5" />
          </Link>
        </div>
        <div className={styles.searchbar}>
          <SearchBar placeholder="Search for anything" data={[]} column />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
