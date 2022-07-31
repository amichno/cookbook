import { SectionWraper,
         Recipe,
         Paragraph,
         Button} from "./recipes.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan,  faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import AddRecipe from "../addRecipe/addRecipe.component";

export interface SectionItem{
    id:number,
    name: string,
    ingredients: string[],
    description: string,
}

export interface SectionProps{
    recipes:{
        id:number,
        name: string,
        ingredients: string[],
        description: string,
    }[],
    del:(event:React.MouseEvent<HTMLButtonElement>)=>any;
    mod?:(id:number)=>any
}

const Section:React.FC<SectionProps> = ({recipes, del, mod}):JSX.Element=>{
    return(
        <SectionWraper>
                {recipes.map(({id, name, ingredients, description}:SectionItem) =>{
                    return(<Recipe key={id}> 
                        <> 
                                <Paragraph isFirst={true}>{name}</Paragraph>
                                <Paragraph>{ingredients.map((key:string)=> {return (<span key={key}>{key}<br/></span>)} )}</Paragraph>
                                
                                <Paragraph>{description}</Paragraph>
                                
                         </>
                               <Paragraph><Button onClick={del}  name={name}>
                                <div><FontAwesomeIcon icon={faTrashCan} color={'orange'}/></div></Button>

                                <Button name={name} >
                                <FontAwesomeIcon icon={faPenToSquare} color={'orange'}/></Button></Paragraph>
                              
                            </Recipe> 
                    )}
                   
                )}
              
        </SectionWraper>
    )
}

export default Section;