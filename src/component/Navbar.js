import {NavLink} from "react-router-dom";

const Navbar = () => {

    const activateStyle ={
        backgroundColor:"black",
        color:"white"
    };

    return(
        <>
            <ul>
                <li>
                    <NavLink to="/" style={({isActive}) => isActive? activateStyle:null}>HOME</NavLink>
                    </li>
                    <li>
                    <NavLink to="/menuPage" style={({isActive}) => isActive? activateStyle:null}>MenuPage</NavLink>
                </li>
            </ul>
        </>
    )
    
};

export default Navbar;