import { HeaderWraper,
        ThemeSwitcher } from "./header.styles";
import { ReactComponent as CookBookLogo } from "../../assets/images/CookBook.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

const Header:React.FC = ()=>{
    return(
        <HeaderWraper>
            <CookBookLogo />
            <ThemeSwitcher>
                <FontAwesomeIcon icon={faMoon}/>
                Dark mood
            </ThemeSwitcher>
        </HeaderWraper>
    )
}

export default Header;