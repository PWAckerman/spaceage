import React from "react";
import {
    TouchableOpacity
} from "react-native";

const NavLink = ({to, children, handler}, context) => {
    const pressHandler = handler ? handler : () => {
        console.log(context);
        context.router.history.push(to);
        console.log(context);
    } 
    return (
        <TouchableOpacity onPress={pressHandler}>
          {children}
        </TouchableOpacity>
    )
}

NavLink.contextTypes = {router: React.PropTypes.object}

export default NavLink;
