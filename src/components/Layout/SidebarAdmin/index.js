import SidebarAdmin from "../SidebarAdmin/Sidebar/index";

function Sidebar({children}) {
    return ( 
        <div>
      <div className="container">
        <SidebarAdmin/>
        <div className="content">{children}</div>
      </div>
    </div>
     );
}

export default Sidebar;