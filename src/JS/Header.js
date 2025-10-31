import logo from '../imgs/logo.png';
import Button from './Button';
import '../CSS/Header.css'

export default function Header() {
    return (
        <div className='header'>
            <img className="logo" src={logo} alt='logo'></img>
            <nav className='headerButtons'>
                <Button type='headerButton' caption={'Обувь'} />
                <Button type='headerButton' caption={'Одежда'} />
                <Button type='headerButton' caption={'Распродажа'} />
            </nav>
            <Button type='headerSearch' caption={'Поиск'} />
        </div>
    )
}