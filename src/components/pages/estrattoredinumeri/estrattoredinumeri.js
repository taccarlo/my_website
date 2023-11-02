import { Helmet } from 'react-helmet-async';
import MyWheelComponent from './myWheelComponent';
import {useState} from 'react';

export default function EstrattoreDiNumeri(){
    const[numbers, setNumbers]= useState(["1","2","3","4"]);
    const[removeLast, setRemoveLast]=useState(true);
    const[versionWheel,setVersionWheel]=useState(0);
    const[upperNumber,setUpperNumber]=useState(0);
    const[winner,setWinner]=useState(null);
    const segColors = ["#3DA5E0"];
    const onFinished = (winner) => {
        console.log(winner);
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
                console.log((i+1).toString());
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
            <div className="row gx-4 gx-lg-1 align-items-center my-2">
            
            <label>
                Numero di caselle:
                <input type="number" defaultValue={4} onChange={e=>setUpperNumber(e.target.value)}/>
            </label>
            <label>
                Rimuovi ultimo numero estratto dalla lista:
                <input type="checkbox" checked={removeLast} onChange={e => setRemoveLast(e.target.checked)} />
            </label>

                </div>
            <button  className="btn btn-primary btn-sm" onClick={updateWheel}>Aggiorna</button>
             
            {winner!=null ? <h1>Numero estratto: {winner}</h1>:<h1>Gira la ruota!</h1>}
         
                <MyWheelComponent
                segments={numbers}
                segColors={segColors}
                key={versionWheel}
                onFinished={(winner) => onFinished(winner)}
                primaryColor="black"
                contrastColor="white"
                buttonText="Gira"
                isOnlyOnce={false}
                size={140}
                upDuration={500}
                downDuration={600}
                fontFamily="Arial"
                />
            </div>
        </>;
}
/*

            <label>
                Numeri da escludere (es. 2,5,7):
                <input type="text" onChange={e=>setNumbersToExclude(e.target.value)}/>
            </label>
*/