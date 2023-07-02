import { useReducer } from "react";
import "./app.css";
const initialState = {
  score: 0,
};
function App() {
  function reducer(state, action) {
    switch (action.type) {
      case "fléchette":
        const { points, zone } = action.payload;
        let flechPoints = 0;
        if (zone === "simple") {
          flechPoints = points;
        } else if (zone === "anneau extérieur") {
          flechPoints = points;
        } else if (zone === "anneau intérieur") {
          flechPoints = points;
        } else if (zone === "anneau central") {
          flechPoints = 25;
        } else if (zone === "Bull's eye") {
          flechPoints = 50;
        }

        const newScore = state.score + flechPoints;
        if (newScore <= 501) {
          return { score: newScore };
        } else {
          alert("Dépassement du score de 501 points !");
          return state;
        }

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  function handleFlech(points, zone) {
    dispatch({ type: "fléchette", payload: { points, zone } });
  }

  return (
    <div>
      <div class="body">
        <button onClick={() => handleFlech(5, "simple")}>5 (Simple)</button>
        <button onClick={() => handleFlech(20 * 2, "anneau extérieur")}>
          *2 (anneau extérieur)
        </button>
        <button onClick={() => handleFlech(20 * 3, "anneau intérieur")}>
          *3 (anneau intérieur)
        </button>
        <button onClick={() => handleFlech(25, "anneau central")}>
          25 (anneau central)
        </button>
        <button onClick={() => handleFlech(50, "Bull's eye")}>
          50 (Bull's eye)
        </button>
      </div>

      <div class="score">
        {" "}
        <h2>Score: {state.score}</h2>
      </div>
    </div>
  );
}
export default App;
