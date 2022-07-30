import { HeaderWraper,
        ThemeSwitcher } from "./header.styles";
import { ReactComponent as CookBookLogo } from "../../assets/images/CookBook.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";


export interface HeaderProps{
    onClick: ()=>void;
}

const Header:React.FC<HeaderProps> = ({onClick})=>{
    return(
        <HeaderWraper>
                 <CookBookLogo />
            <ThemeSwitcher onClick={onClick}>
                <FontAwesomeIcon icon={faMoon}/>
                Dark mood
            </ThemeSwitcher>
        </HeaderWraper>
    )
}

export default Header;