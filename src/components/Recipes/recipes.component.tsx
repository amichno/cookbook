import { SectionWraper,
         Recipe,
         Paragraph } from "./recipes.styles";
import Tools from "../Tools/tools.components";

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
    del:(ide:number)=>void
}

const Section:React.FC<SectionProps> = ({recipes, del})=>{
    return(
        <SectionWraper>
                {recipes.map(({id, name, ingredients, description}:SectionItem) =>{
                    return(<Recipe key={id}> 
                        <> 
                                <Paragraph isFirst={true}>{name}</Paragraph>
                                <Paragraph>{ingredients.map((key:string)=> {return (<p>{key}</p>)} )}</Paragraph>
                                <Paragraph>{description}</Paragraph>
                                
                     </>
                            <Tools del={del} id={id}/>
                            </Recipe> 
                    )}

                )}
                
                <Recipe>

                </Recipe>
        </SectionWraper>
    )
}

export default Section;