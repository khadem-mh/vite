import './style.css'
import Button from '../Button/Button'

const Header = () => {

    return (
        <header className='header__main'>

            <div className='header__right'>
                <div className='header__bg-logo'></div>
                <img src="/Images/Logos/vite.png" className='header__logo' alt="vite" />
            </div>

            <div className='header__left'>
                <h1 className='header__title'><span>Vite</span> <br /> Next Generation <br /> Frontend Tooling</h1>
                <p className='header__desc'>Get ready for a development environment that can finally catch up with you.</p>
                <div className='header__parent-btn'>
                    <Button bgColor='#747BFF' color='white' text="Get Started" />
                    <Button text="Why Vite?" />
                    <Button text="View On Github" />
                    <Button bgColor='#747BFF' color='white' text="⚡viteConf 24!" />
                </div>
            </div>

        </header>
    )
}

export default Header