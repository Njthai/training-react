import './Rocketcount.css';
import {useEffect, useState} from "react";

function Rocketcount(props) {  
const Rocket = () => <span className='button'>{props.children}All engines runing. Lift Off!</span>;
const seconds= (10, 9, 8, 7, 6, 5, 4, 3, 2, 1)
    const [setCount,count]=useState(0);

    useEffect (()=>{
        setTimeout (()=>{
        setCount (count - 1);
    }, 1000);
      if (seconds) {
        return <Rocket />;
    };
});

  return (

<div>
<p className='count'>Rocket Launching - NASA Mars</p>
<p className='start'>Ignition Sequence Start</p>

</div>
  );
};
    
export default Rocketcount;
