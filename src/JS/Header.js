import logo from '../imgs/logo.png';
import Button from './Button';
import '../CSS/Header.css'

export default function Header({ handleMenuClick }) {
    return (
        <div className='header'>
            <img className="logo" src={logo} alt='logo'></img>
            <nav className='headerButtons'>
                <Button type='headerButton' caption={'Обувь'} handler={handleMenuClick} id={'shoes'}/>
                <Button type='headerButton' caption={'Одежда'} handler={handleMenuClick} id={'clothes'}/>
                <Button type='headerButton' caption={'Распродажа'} handler={handleMenuClick} id={'sale'}/>
            </nav>
            <Button type='headerSearch' caption={'Поиск'} />
        </div>
    )
}