
import TextInput from './Input';
import DropDown from "./size";
import Button from "./button";

function Form({ setImageDescription, imageDescription, setImageSize, setImageUrl, imageSize, setLoading, setError }) {

    async function handleSubmit(e) {
        e.preventDefault()
        setImageUrl("")
        setError("")
        // setImageDescription("")
        setLoading(true)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: imageDescription, size: imageSize })
        };
        try {
            let response = await fetch(`http://localhost:1700/api/v1/generate-images`, requestOptions);
            let { data, error } = await response.json();
            if (error) {
                return setError(error)
            }
            // { console.log("lllllll", error) }
            setImageUrl(data)
        } catch (err) {

            setError(err)
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