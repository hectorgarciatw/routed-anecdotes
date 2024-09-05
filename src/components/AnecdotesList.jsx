import { Link } from "react-router-dom";
const padding = {
    paddingRight: 5,
};

const AnecdoteList = ({ anecdotes }) => (
    <div>
        <h2>Anecdotes</h2>
        <ul>
            {anecdotes.map((anecdote) => (
                <li key={anecdote.id}>
                    <Link to={`/anecdotes/${anecdote.id}`} style={padding}>
                        {anecdote.content}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

export default AnecdoteList;
