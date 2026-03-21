import {Outlet} from 'react-router-dom';
import Footer from "../mainLayout/footer/footer"
import Header from "../mainLayout/header/header"
import Breadcrumbs from "../Breadcrumbs"

function RootLayout(){
    return(
        <div className="d-flex flex-column min-vh-100">
            <Header/>
            <Breadcrumbs/>
            <main className="flex-grow-1">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}
export default RootLayout;