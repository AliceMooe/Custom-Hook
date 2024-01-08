import { useState } from "react";

const useToggle = (intialValue = false) => {
    const [state,setState] = useState(intialValue);
    // const [state,setState] = useState(false);


    const toggle = ()=>{
        setState((prev) => !prev);
    };
    return [state,toggle]
};

export default useToggle;