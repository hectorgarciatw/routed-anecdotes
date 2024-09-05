import { useParams } from "react-router-dom";

const AnecdoteDetails = ({ anecdotes }) => {
    const { id } = useParams();
    const anecdote = anecdotes.find((a) => a.id === Number(id));

    if (!anecdote) {
        return <div>Anecdote not found</div>;
    }

    return (
        <div>
            <h1>{anecdote.content}</h1>
            <p>has {anecdote.votes} votes</p>
            <p>{anecdote.author}</p>
            <p>
                for more info see <a href={anecdote.info}>{anecdote.info}</a>
            </p>
        </div>
    );
};

export default AnecdoteDetails;
