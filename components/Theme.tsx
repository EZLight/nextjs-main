import React, {useState} from "react";

function Theme(){

const [toggleTheme, setToggleTheme] = useState(Light);
const onClick = () => setToggleTheme(Dark);

return (
    <div>
        {toggleTheme ? Light : Dark}
    </div>
)

}

const Dark = 'w3-black'
const Light = 'w3-white'

export default Theme