import react from 'react';
import { useState } from 'react';
import Add_card_hide from './Add_card_hide';
function Add(){ 
    const [clicked,setClicked]=useState(true);
    function clicking()
    {
        setClicked(false);
    }
    return (
        <>{
            clicked==true?<div><button className="btn btn-primary" onClick={clicking}>Add</button></div>:<Add_card_hide status={[clicked,setClicked]}></Add_card_hide>
        }
        </>
    )

} export default Add;