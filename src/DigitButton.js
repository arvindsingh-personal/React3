import { ACTIONS } from "./Buttons"

export default function DigitButton({dispatch, digit}) {
    return(
     <button onClick={() => dispatch({ type: ACTIONS.Add_Digit, payload:{digit} }) }> {digit}
    </button>
    )
}