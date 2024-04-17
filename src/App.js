import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/routes/index";
import DefaultLayout from "~/components/Layout/DefaultLayout/index";
import { AuthProvider } from "./pages/Login/AuthContext";
import AdminUser from "./pages/Admin/User/User";
import privateRoutes from "./routes/privateRoutes";
import ProfileStudent from "./pages/Student/Profile";
import ProfileTeacher from "./pages/Teacher/ProfileTeacher";

function App() {
  return (
    <Router>
       <AuthProvider>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            
            const Page = route.component;
            let Layout = DefaultLayout;

            if(route.layout){
              Layout = route.layout
            } else if(route.layout === null){
              Layout = Fragment
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          <Route
            path="/admin"
            element={
              
              <privateRoutes>
                <AdminUser/>
                {/* <ProfileStudent/> */}
                {/* <ProfileTeacher/> */}
              </privateRoutes>
            }
            
          />
          
        </Routes>
      </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
