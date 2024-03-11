import Sidebar from "../components/Sidebar.jsx";
import styles from "../pages/AppLayout.module.css";
import Map from "../components/Map.jsx";

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}
