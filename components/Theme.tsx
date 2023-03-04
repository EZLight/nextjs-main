import React from "react"
import Mobile from "./Themes/Mobile"
import Tablet from "./Themes/Tablet"

function Theme(props){

return (
    <div>
        <Mobile title={props.title}>
            <div className="w3-container w3-cell" ><p >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p> 
            </div>
        </Mobile>

        <Tablet />

   </div>
)

}

export default Theme