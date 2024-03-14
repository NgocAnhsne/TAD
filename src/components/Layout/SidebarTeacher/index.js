import SidebarTeacher from "./Sidebar";

function Sidebar({children}) {
    return ( 
        <div>
      <div className="container">
        <SidebarTeacher/>
        <div className="content">{children}</div>
      </div>
    </div>
     );
}

export default Sidebar;