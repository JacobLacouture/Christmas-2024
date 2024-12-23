function App(){

    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState("");
    const [color, setColor] = React.useState("#fff")

    React.useEffect(() => {
        async function fetchData(){
            const response = await fetch("facts.json")
            const data = await response.json();

            setQuotes(data);
            let randIndex = Math.floor(Math.random() * data.length);
            setRandomQuote(data[randIndex])
        }
        fetchData()
    }, [])

    const getNewQuote = () => {

        const colors = [
            "#16a085",
            "#27ae60",
            "#2c3e50",
            "#f39c12",
            "#e74c3c",
            "#9b59b6",
            "#FB6964",
            "#342224",
            "#472E32",
            "#BDBB99",
            "#77B1A9",
            "#73A857",
        ];

        let randIndex = Math.floor(Math.random() * quotes.length);
        let randColorIndex = Math.floor(Math.random() * colors.length);
        setRandomQuote(quotes[randIndex])
        setColor(colors[randColorIndex])
    }



    return (
        <div  style={{backgroundColor: color, minHeight: "100vh"}}>


<div className="container pt-5"> 
    <div className="jumbotron">
        <div className="card">
            <div className="card-header">Wildlife Fact!</div>
            <div className="card-body">
                {randomQuote ? (
                    <>
                    <p className="card-text">{randomQuote.text}</p>
                    </>
                ) : (
                    <h2>Loading</h2>
                )}

                <div className="column">
                    <button onClick={getNewQuote} className="btn btn-primary">New Fact</button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    );
}

ReactDOM.render(<App/>, document.getElementById('app'))