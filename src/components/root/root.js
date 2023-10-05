import {Outlet} from 'react-router-dom';
import Navigation from "../navigation/navigation";
import Footer from "../mainLayout/footer/footer"
import Header from "../mainLayout/header/header"

function RootLayout(){
    return(
        <>
            <Header/>
            <Navigation/>
            <Outlet/>
            <Footer/>
        </>
    )
}
export default RootLayout;