import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="h2">
            Hecho con <span role="img" aria-label="love">❤️</span> por <Link to={{ pathname: "https://www.mercedesmulet.com/" }} target="_blank" className="a"><strong>Mercedes Mulet</strong></Link>
            </div>
            <div className="p">® 2021 Raise México. Todos los derechos reservados.</div>
        </div>
    )
}
