import React from "react";

export function FunctionComponentINSIDE() {
    let theInput = React.createRef();
    function setFocus() {
        theInput.current.focus();
    }
    return(
        <div>
            <input type="text" placeholder="Typing....." ref={theInput} />
            <button value="set focus" onClick={setFocus}>Function Inside</button>
        </div>
    );
}

