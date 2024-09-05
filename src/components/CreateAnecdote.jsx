import { useNavigate } from "react-router-dom";
import { useField } from "../hooks";

const CreateAnecdote = (props) => {
    const content = useField("text");
    const author = useField("text");
    const info = useField("text");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addNew({
            content: content.value,
            author: author.value,
            info: info.value,
            votes: 0,
        });

        navigate("/");
    };

    // Clean the form inputs using the reset function from useField
    const cleanInputs = (e) => {
        e.preventDefault();
        content.reset();
        author.reset();
        info.reset();
        console.log("Cleaned the inputs");
    };

    return (
        <div>
            <h2>Create a new anecdote</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    Content
                    <input type={content.type} value={content.value} onChange={content.onChange} />
                </div>
                <div>
                    Author
                    <input type={author.type} value={author.value} onChange={author.onChange} />
                </div>
                <div>
                    URL for more info
                    <input type={info.type} value={info.value} onChange={info.onChange} />
                </div>
                <button type="submit">Create</button>
                <button type="button" onClick={cleanInputs} style={{ marginLeft: "5px" }}>
                    Reset
                </button>
            </form>
        </div>
    );
};

export default CreateAnecdote;
