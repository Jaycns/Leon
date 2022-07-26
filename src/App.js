import "./App.scss";
import Image from "./images/lion.svg";
import { MdArrowDropDown } from "react-icons/md";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { MdMenuOpen } from "react-icons/md";
import Phone from "./images/leon_phone.svg";
import { useState } from "react";
import { states } from "./Naija";

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const [names, setNames] = useState("");
  const [areas, setAreas] = useState([]);

  const handleChange = (e) => {
    setNames(e.target.value);
    const index = states.findIndex((item) =>
      item.state.toLowerCase().includes(e.target.value.toLowerCase())
    );
    e.preventDefault();
    const Lgas = states[index].lgas;
    setAreas(Lgas);
    console.log({ state: Lgas });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  try {
    console.log({
      abia: states.filter((item) =>
        item.state.toLowerCase().includes(names.toLowerCase())
      ),
    });
  } catch (e) {
    console.log(e);
  }
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
          <div className={open ? "nav" : "links"}>
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
          <h1 className="head">Select your region</h1>
          <form className="" onSubmit={handleSubmit}>
            <div>
              <label>State:</label>
              <select id="" value={names} className="" onChange={handleChange}>
                {states.map((item) => {
                  return <option>{item.state}</option>;
                })}
              </select>
            </div>
            {names !== "" ? (
              <div>
                <label>LGA:</label>
                <select id="" className="">
                  {areas.map((item) => {
                    return <option>{item}</option>;
                  })}
                </select>
              </div>
            ) : null}
          </form>
        </main>
        <aside className="aside">
          <img src={Phone} alt="A big phone " />
        </aside>
      </div>
    </div>
  );
}

export default App;
