
import TextInput from './Input';
import DropDown from "./size";
import Button from "./button";
import axios from "axios";
// import Buttom from './buttom';

// import data from "../data"

function Form({ setImageDescription, imageDescription, setImageSize, setImageUrl, imageSize, setLoading, setError }) {


    async function handleSubmit(e) {
        e.preventDefault();

        if (!imageDescription.trim()) {
            setError("please provide image description")
            return;

        }

        setLoading(true)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify({ prompt: imageDescription }),
            url: 'https://pic-morper.onrender.com/generate-images'
        };

        try {
            let response = await axios(requestOptions);
            let imagefin = response;
            setImageUrl(imagefin.data.image);
        } catch (err) {
            console.log(err);
            setError("daily limit reached");
        } finally {
            setLoading(false)
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <TextInput setImageDescription={setImageDescription} imageDescription={imageDescription} />
            <DropDown setImageSize={setImageSize} />
            <Button />
        </form>


    )

}

export default Form