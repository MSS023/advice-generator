import "./App.css";
import { Card, Button, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import dividerDesktop from "./assets/pattern-divider-desktop.svg";
import dividerMobile from "./assets/pattern-divider-mobile.svg";
import dice from "./assets/icon-dice.svg";
import { getAdvice } from "./services/Services";

function App() {
  const [number, setNumber] = useState();
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleRandomise();
  }, []);

  function handleRandomise() {
    getAdvice(setNumber, setQuote, setLoading);
  }

  return (
    <div className="App d-flex justify-content-center align-items-center h-100 w-100">
      {!loading ? (
        <Card className="main-card">
          <Card.Body className="position-relative pt-0 d-flex justify-content-center align-items-center flex-column">
            <div className="advice-number text-center py-4">
              ADVICE #{number}
            </div>
            <Card.Text className="text-center quote">"{quote}"</Card.Text>
            <Card.Img
              src={dividerDesktop}
              className="d-none d-sm-block desktop"
            />
            <Card.Img src={dividerMobile} className="d-block d-sm-none" />
            <Button
              className="dice-button d-flex justify-content-center align-items-center position-absolute"
              onClick={handleRandomise}
            >
              <Image src={dice} />
            </Button>
          </Card.Body>
        </Card>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
