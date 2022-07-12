import { ACTIONS } from "./Buttons"
export default function OperationButton({dispatch, operator}) {
  return (
    <button onClick={() => dispatch({ type: ACTIONS.Choose_Operation, payload: {operator}}) }>{operator}</button>
 
  )
}