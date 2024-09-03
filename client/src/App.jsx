import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import Left from "./components/Left.jsx";
import Right from "./components/Right.jsx";

function App() {
    const [prediction, setPrediction] = useState(null);
    const [loading, setLoading] = useState(false);

    const handlePrediction = (data) => {
        setPrediction(data);
        setLoading(false);
    };
  return (
    <>
        <div className="header-container">
            <Header/>
        </div>
        <div className="main-container">
            <div className="left-container">
                <Left setPrediction={handlePrediction} setLoading={setLoading} />
            </div>
            <div className="right-container">
                <Right prediction={prediction} loading={loading} />
            </div>
        </div>

    </>
  )
}

export default App
