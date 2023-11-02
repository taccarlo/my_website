import Countdown from "react-countdown";
import { useState } from "react";
export default function CountDown() {
  const [date, setDate] = useState(Date.now() + 60000*30);

  const change = (num) => {
    let delay = parseInt(num);
    if(!isNaN(delay)&&delay>0)
        setDate(Date.now() + delay * 60000);
  };

  return (
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-1 align-items-center my-2"></div>

      <div className="container">
            <div className="card h-100">
              <div className="card-body">
                <h1 className="card-title">
                  <Countdown date={date} />
                </h1>
              </div>
              <div className="card-footer">
                Numero di minuti: <br></br>
                <input
                  type="number"
                  defaultValue={30}
                  onChange={(e) => change(e.target.value)}
                />
              </div>
        </div>
      </div>
    </div>
  );
}
