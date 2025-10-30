import logo from './imgs/logo.png';

export default function Header() {
    return (
        <div className='header'>
            <img className="logo" src={logo} alt='logo'></img>
            <nav className='headerButtons'>
                <button className='headerButton' id='f'><a href='#'>Обувь</a></button>
                <button className='headerButton' id='s'><a href='#'>Одежда</a></button>
                <button className='headerButton' id='t'><a href='#'>Распродажа</a></button>
            </nav>
            <button className='headerSearch'>Поиск</button>
        </div>
    )
}