

function DropDown({setImageSize}) {
    return (
        <select className="dropdown" onChange={(e)=>setImageSize(e.target.value)}>
            <option value="256x256" >small</option>
            <option value="512x512">medium</option>
            <option value="1024x1024">large</option>
        </select>
    )
}

export default DropDown