import React from 'react'
import logo from '../images/codoacodo.png'

export default function Nav() {

    return (
        <div className="header" >
            <img src={logo} className="logo"/>
            <span className="logo_text">Conf Bs As</span>
            <div>
                <span className="H_text1">La conferencia</span>
                <span className="H_text2">Los oradores</span>
                <span className="H_text3">El lugar y la fecha</span>
                <span className="H_text4">Conviertete en orador</span>
                <span className="H_text5">Comprar tickets</span>
            </div>
        </div>
    )
}