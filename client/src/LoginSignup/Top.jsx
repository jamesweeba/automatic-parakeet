
// import Header from './Header';
// 
import Headerone from "./Headerone";
import Form from './form';


function Top({ imageDescription, setImageDescription, setImageSize, setImageUrl,imageSize,setLoading,setError}) {

    return (
        <div className="top">
            <div className="inner">
                <Headerone />
                <Form setImageDescription={setImageDescription}
                    imageDescription={imageDescription} 
                    setImageSize={setImageSize}
                    setImageUrl={setImageUrl}
                    imageSize={imageSize}
                    setLoading={setLoading}
                    setError={setError}
                />
            </div>
        </div>

    )
}

export default Top;