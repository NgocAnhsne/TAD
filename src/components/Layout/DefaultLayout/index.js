import Sidebar from "./Sidebar/index";

function DefaultLayout({children}) {
    return ( 
        <div>
            <div className="container">
                {/* <Sidebar/> */}
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;