import SidebarStudent from "~/components/Layout/DefaultLayout/SidebarStudent";
import './style.scss'
import "~/components/GlobalStyles/GlobalStyles.scss";

function DefaultLayout({ children }) {
  return (
    <div>
      <div className="container">
        <SidebarStudent/>
        <div className="content">{children}</div>
      </div>
    </div>
  );

}

export default DefaultLayout;
