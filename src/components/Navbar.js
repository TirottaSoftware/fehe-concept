import logo from '../assets/img/fehe-logo.png'
import ImageWrapper from './ImageWrapper'

function Navbar() {
    return (
        <nav className='w-full backdrop-blur-md p-8 flex fixed top-0 items-center justify-center z-[99]'>
            <ImageWrapper src={logo} alt="Logo" />
        </nav>
    )
}

export default Navbar