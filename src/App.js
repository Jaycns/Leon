import "./App.scss";
import Image from "./images/lion.svg";
import { MdArrowDropDown } from "react-icons/md";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { MdMenuOpen } from "react-icons/md";
import Phone from "./images/leon_phone.svg";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="App">
      <div className="top">
        <div className="left">
          <img src={Image} alt="A lion was here" />
          <p>Leon</p>
        </div>
        <div className="right">
          <div className="menu" style={{}} onClick={handleOpen}>
            {open ? <MdMenuOpen /> : <MdMenu />}
          </div>
          <div className={open? "nav" : "links"}>
            <a href="/">Article</a>
            <a href="/">Features</a>
            <a href="/">Pricing</a>
            <a href="/" className="ad">
              <p>Drop</p>
              <MdArrowDropDown />
            </a>
            <a href="/">Contact</a>
            <button>Download</button>
          </div>
        </div>
      </div>
      <div className="center">
        <main className="main">
          <h1>
            Mobile app site <br />
            for <span> developers</span>
          </h1>
          <p>
            Start focusing on your goals and get more things done with Leon the
            first social connection powered mobile app
          </p>
          <div className="buttons">
            <button>
              <FaApple className="apple" /> Download
            </button>
            <button>
              <FaGooglePlay className="play" /> Download
            </button>
          </div>
        </main>
        <aside className="aside">
          <img src={Phone} alt="A big phone " />
        </aside>
      </div>
    </div>
  );
}

export default App;
