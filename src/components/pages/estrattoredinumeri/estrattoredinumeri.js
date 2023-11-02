import { Helmet } from 'react-helmet-async';
import WheelComponent from './WheelComponent';
import {useState} from 'react';

export default function EstrattoreDiNumeri(){
    const[numbers, setNumbers]= useState(["1","2","3","4","5","6","7","8","9","10"]);
    const[removeLast, setRemoveLast]=useState(true);
    const[versionWheel,setVersionWheel]=useState(0);
    const[upperNumber,setUpperNumber]=useState(0);
    const[winner,setWinner]=useState(null);
    const segColors = ["#3DA5E0"];
    const onFinished = (winner) => {
        setWinner(winner);
        if(removeLast&&numbers.length>2){
            setNumbers(numbers.filter(a=>a!==winner));
            setTimeout(function() {setVersionWheel(versionWheel+1)}, 2000); 
        }
    };
    function updateWheel(){
        if(upperNumber>1){
            let i;
            let array=[];
            for(i=0;i<upperNumber;i++){
                array.push((i+1).toString())
            }
            setNumbers(array);
            setVersionWheel(versionWheel+1);
        }
    }
    return <>
        <Helmet>
            <title>Estrattore di numeri casuali</title>
            <meta name="description" content="Parte relativa alla didattica"/>
            <link rel = "canonical" href = "/didattica/estrattoredinumeri" />
        </Helmet>
            <div className="container px-4 px-lg-5">
            <div style={{textAlign:'center'}}> 
            <WheelComponent
                segments={numbers}
                segColors={segColors}
                key={versionWheel}
                onFinished={(winner) => onFinished(winner)}
                primaryColor="black"
                contrastColor="white"
                buttonText="Gira"
                isOnlyOnce={false}
                size={140}
                upDuration={numbers>15?250:500}
                downDuration={numbers>15?300:600}
                fontFamily="Arial"  
                /></div>
              
            </div>
            

      
      <div className="container px-4 px-lg-5">
                  <div className="card h-100">
                      <div className="card-body">
                      {winner!=null ? <h2 className="card-title">Numero estratto: {winner}</h2>:<h1>Gira la ruota!</h1>}
            
           
                        </div>
                      <div className="card-footer">
                        <label>
                Numero di caselle:<br/>
                <input type="number" defaultValue={10} onChange={e=>setUpperNumber(e.target.value)}/>
                </label><br/>
                <label>Rimuovi numero estratto{' '}
                <input type="checkbox" checked={removeLast} onChange={e => setRemoveLast(e.target.checked)} />
                </label><br/>
                <button  className="btn btn-primary btn-sm" onClick={updateWheel}>Aggiorna</button>
             
                </div>
                  </div>
              </div>
        </>;
}
/*

            <label>
                Numeri da escludere (es. 2,5,7):
                <input type="text" onChange={e=>setNumbersToExclude(e.target.value)}/>
            </label>
*/