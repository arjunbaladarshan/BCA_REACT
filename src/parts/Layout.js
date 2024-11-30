import { Outlet } from "react-router-dom";
import Menu from "./Menu";

function Layout(){
    return(
        <>
            <Menu />
            <h1>This is some rendom data</h1>
            <Outlet />
        </>
    );
}

export default Layout;