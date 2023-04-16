import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  function handleClick() {
    setAlertVisible(true);
  }

  return (
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          WHOOP WHOOP! Bazinga!
        </Alert>
      )}
      <Button color="primary" onClick={handleClick}>
        My Button
      </Button>
    </>
  );
}

export default App;
