import {Outlet} from 'react-router-dom';
import Footer from "../mainLayout/footer/footer"
import Header from "../mainLayout/header/header"

function RootLayout(){
    return(
        <>
            <Header/>
            <Outlet/>
            <br/>
            <br/>
            <Footer/>
        </>
    )
}
export default RootLayout;