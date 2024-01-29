function Buttom({ imageSize, imageUrl, loading, error }) {

    // {console.log(error)}

    // console.log(imageUrl);
    // console.log("ccccccccccccccccccccczzzzzzzzzzzzzzz")

    return (
  

        <div className="buttom">
            <div className="imageDiv">
                {error &&  <div style={{color:"red"}}>{error}</div>}
                {loading ? <div>Loading......</div> : <img  className="image"src={imageUrl} alt="" />}
            </div>

        </div>

    )
}

export default Buttom;