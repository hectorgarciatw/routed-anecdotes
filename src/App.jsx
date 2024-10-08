import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Footer from "./components/Footer";
import About from "./components/About";
import AnecdoteList from "./components/AnecdotesList";
import Menu from "./components/Menu";
import CreateAnecdote from "./components/CreateAnecdote";
import AnecdoteDetails from "./components/AnecdoteDetails";

const App = () => {
    const [anecdotes, setAnecdotes] = useState([
        {
            content: "If it hurts, do it more often",
            author: "Jez Humble",
            info: "https://martinfowler.com/bliki/FrequencyReducesDifficulty.html",
            votes: 0,
            id: 1,
        },
        {
            content: "Premature optimization is the root of all evil",
            author: "Donald Knuth",
            info: "http://wiki.c2.com/?PrematureOptimization",
            votes: 0,
            id: 2,
        },
    ]);

    const [notification, setNotification] = useState("");

    const addNew = (anecdote) => {
        anecdote.id = Math.round(Math.random() * 10000);
        setAnecdotes(anecdotes.concat(anecdote));
        setNotification(`Anecdote '${anecdote.content}' created successfully!`);

        // Clean the notification
        setTimeout(() => {
            setNotification("");
        }, 5000);
    };

    const anecdoteById = (id) => anecdotes.find((a) => a.id === id);

    const vote = (id) => {
        const anecdote = anecdoteById(id);

        const voted = {
            ...anecdote,
            votes: anecdote.votes + 1,
        };

        setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)));
    };

    return (
        <Router>
            <div>
                <h1>Software anecdotes</h1>
                <Menu />
                {notification && <div style={{ border: "solid", padding: 10, marginBottom: 10 }}>{notification}</div>}
                <Routes>
                    <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
                    <Route path="/create" element={<CreateAnecdote addNew={addNew} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/anecdotes/:id" element={<AnecdoteDetails anecdotes={anecdotes} />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
