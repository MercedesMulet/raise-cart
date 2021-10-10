import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
    return(
        <>
        <nav className='nav'>
        <div className='container-title'>
            <h2>CORTADORES RAISE</h2>
        </div>
        <ul className='nav-ul'>
            <li className='nav-li'><a href="/#" className='a'>Inicio</a></li>
            <li className='nav-li'><a href="/#" className='a'>Tienda</a></li>
            <li className='nav-li'><a href="/#" className='a'>Cómo comprar</a></li>
            <li className='nav-li'><a href="/#" className='a'>Contacto</a></li>

            <CartWidget />
        </ul>
    </nav>
    </>
    )
}
