function Buttom({ imageSize, imageUrl, loading, error }) {
    let size = "";
    switch (imageSize) {
        case "256x256":
            size = "30%";
            break;
        case "512x512":
            size = "50%";
            break;
        default:
            size = "70%";
            break;

    }
    // {console.log(error)}

    return (

        <div className="buttom">
            <div className="imageDiv">
                {error &&  <div style={{color:"red"}}>{error.error.message}</div>}
                {loading ? <div>Loading......</div> : <img style={{ size }} src={imageUrl} alt="" />}
            </div>

        </div>

    )
}

export default Buttom;