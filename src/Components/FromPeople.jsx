import "./Frompeople.css";
import {useState} from "react"

import image2 from "../assets/image2.jpg"
import image1 from "../assets/image1.jpg"
import image3 from "../assets/image3.jpg"
function App({ setDark }) {

  return (

        <div>

      <h1 className="cards__title">Great Words From People</h1>

      <p className="cards__subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore lacus vel facilisis.
      </p>

      <div className="cards">

        <div className="card1">
          <img src={image1} alt="" />
          <h4>Co Founder</h4>
          <h2>Stephen Smith</h2>
          <p>"eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmodtem lacus vel facilisis."</p>
        </div>

        <div className="card2">
          <img src={image2} alt="" />
          <h4>Manager</h4>
          <h2>Lorem Robinson</h2>
          <p>"eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmodtem lacus vel facilisis."</p>
        </div>

        <div className="card3">
          <img src={image3} alt="" />
          <h4>Team Leader</h4>
          <h2>Saddika Alard</h2>
          <p> "eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmodtem lacus vel facilisis."</p>
          <button onClick={() => setDark("")}>light</button>
          <button onClick={() => setDark("dark")}>Dark</button>

        </div>

      </div>
    </div>
  );
}

export default App;