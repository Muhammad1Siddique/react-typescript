import React, {useState} from "react";

function ToggleButton(){
    const [checked, setChecked] = useState(false);
    return(
        <div>
            <input
            type="checkbox"
            checked={checked}
            onClick={(event:any)=>setChecked(event.target.checked)}
            />
            I agree wity your Privacy Policy.
        </div>
    )
}
export default ToggleButton;