
import React, {useState} from "react";
import Theme from '../components/Theme'



export default function Home() {

const Dark = 'w3-black'
const Light = 'w3-white'

const [toggleTheme, setToggleTheme] = useState(false);
const onClick = () => setToggleTheme(true);
  return (
    <div className={`${toggleTheme} ? ${Light} : ${Dark}`}>

<button className="w3-btn w3-yellow" onClick={onClick}>Theme</button>

<p>I'm going to hide</p>

    </div>
  )
}
