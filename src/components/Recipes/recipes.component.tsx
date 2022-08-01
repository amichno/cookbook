import { SectionWraper,
         Recipe,
         Paragraph,
         Button} from "./recipes.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan,  faPenToSquare, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

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
    edit:(event:React.MouseEvent<HTMLButtonElement>)=>any;
    modify?:number;
    update:(event:React.MouseEvent<HTMLButtonElement>)=>any;
}

const Section:React.FC<SectionProps> = ({recipes, del, modify, edit, update}):JSX.Element=>{
    return(
        <SectionWraper>
                {recipes.map(({id, name, ingredients, description}:SectionItem) =>{
                    return(<Recipe key={id}> 
                        
                                <Paragraph id={`name ${name}`} 
                                           isFirst={true} 
                                           contentEditable={modify===id?true:false}
                                           isModifiable={modify===id?true:false}>
                                                                                    {name}
                                </Paragraph>
                                <Paragraph id={`ingredients ${name}`}
                                           contentEditable={modify===id?true:false}
                                           isModifiable={modify===id?true:false}>
                                                                        {ingredients.map((key:string)=> 
                                                                                 {return (<span className={`Ingr ${name}`} 
                                                                                             key={key}>{key}<br/>
                                                                                        </span>)} 
                                                                        )}
                                </Paragraph>
                                
                                <Paragraph contentEditable={modify===id?true:false}
                                            isModifiable={modify===id?true:false}
                                            id={`descr ${name}`}>
                                                                                    {description}
                                </Paragraph>
                                
                         
                               <Paragraph><Button onClick={del}  name={name}>
                                <div><FontAwesomeIcon icon={faTrashCan} color={'orange'}/></div></Button>

                                <Button onClick={modify===id?update:edit} name={name} >
                                <FontAwesomeIcon icon={modify===id?faFloppyDisk:faPenToSquare} color={'orange'}/></Button></Paragraph>
                              
                            </Recipe> 
                    )}
                   
                )}
              
        </SectionWraper>
    )
}

export default Section;