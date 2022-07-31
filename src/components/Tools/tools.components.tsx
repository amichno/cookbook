import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToolsWraper,
         Delete,
         Edit } from "./tools.styles";

export interface ToolsProps{
    del:(ide:number)=>any,
    id:number
}

const Tools:React.FC<ToolsProps> = ({del, id}) =>{
    return(
        <ToolsWraper>
            <Edit><FontAwesomeIcon icon={faPenToSquare} /></Edit>
            <Delete onClick={del(id)} ><FontAwesomeIcon icon={faTrashCan} /></Delete>
        </ToolsWraper>
    )
}

export default Tools;