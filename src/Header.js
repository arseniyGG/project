import logo from './imgs/logo.png';
import Button from './Button';

export default function Header() {
    return (
        <div className='header'>
            <img className="logo" src={logo} alt='logo'></img>
            <nav className='headerButtons'>
                <Button caption={'Обувь'}/>
                <Button caption={'Одежда'}/>
                <Button caption={'Распродажа'}/>
            </nav>
            <button className='headerSearch'>Поиск</button>
        </div>
    )
}