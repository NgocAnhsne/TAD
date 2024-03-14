import SidebarAdmin from "./Sidebar/SidebarAdmin";
import SidebarStudent from "./Sidebar/SidebarStudent";
import SidebarTeacher from "./Sidebar/SidebarTeacher/index";
import "~/components/GlobalStyles/GlobalStyles.scss"
import "./style.scss"
function DefaultLayout({ children }) {
    return (
        <div className="container">
        <SidebarTeacher/>
        <div className="content">
            <h2>sadsadasdad</h2>
        </div>
    </div>
    );
}

export default DefaultLayout;