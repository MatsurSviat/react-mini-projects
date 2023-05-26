import Modal from "./Modal.jsx";
import { useState } from "react";
import "./index.scss";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <button className="open-modal-btn" onClick={() => setOpen(true)}>
        ✨ Открыть окно
      </button>

      <Modal open={open} setOpen={setOpen}>
        <img
          src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif"
          alt="gif"
        />
      </Modal>
    </div>
  );
}

export default App;
