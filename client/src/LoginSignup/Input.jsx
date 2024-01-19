


function TextInput({setImageDescription,imageDescription}){
    return(
        <input type="text" placeholder="Describe an image here. eg Two dogs fighting"
         onChange={(e)=>setImageDescription(e.target.value)} value={imageDescription}/>
    )
}


export default TextInput;
// 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