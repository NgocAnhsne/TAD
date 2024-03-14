import SidebarAdmin from "./Sidebar/SidebarAdmin";
import SidebarStudent from "./Sidebar/SidebarStudent";
import SidebarTeacher from "./Sidebar/SidebarTeacher/index";
import "~/components/GlobalStyles/GlobalStyles.scss"

function DefaultLayout({children}) {
    return ( 
        <div>
           <div className="container">



<div className="content">
    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;