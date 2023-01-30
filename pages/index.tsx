
import { url } from "inspector";
import React from "react";
import Header from "../components/Header";
import Dropdown from '../components/Dropdown'
import {AbsLogo} from '../styles/images'

export default function Home() {


  return (
    <div>
   <section className="w3-content" >
      <Dropdown/>
      <img className="w3-image w3-content" src={AbsLogo} style={{width:'300px'}} />
   </section>
   </div>
  )
}
