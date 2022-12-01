import React from "react";
import twitter from '../img/Twitter Icon.png'
import facebook from '../img/Facebook Icon.png'
import instagram from '../img/Instagram Icon.png'
import github from '../img/GitHub Icon.png'

export default function Footer() {
    return (
        <footer>
            <a href="#"><img src={twitter} alt="" /></a>
            <a href="#"><img src={facebook} alt="" /></a>
            <a href="#"><img src={instagram} alt="" /></a>
            <a href="#"><img src={github} alt="" /></a>
        </footer>
    )
}