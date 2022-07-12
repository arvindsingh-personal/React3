
import { useReducer } from 'react';
import DigitButton from './DigitButton';
import OperationButton from './OperationButton';

export const ACTIONS = {
  Add_Digit: 'add-digit',
  Clear: 'clear',
  Delete: 'delete_digit',
  Choose_Operation: 'operator',
  Evaluate: 'evaluate'
}

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.Add_Digit:
      if(state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit
        }
      }

      if (payload.digit === '0' && state.currentOperand === '0') return state;
      if (payload.digit === '.' && state.currentOperand.includes(".")) return state;
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      }

    case ACTIONS.Choose_Operation:

      if (state.currentOperand == null && state.previousOperand == null) {
        return {}
      }
      if (state.previousOperand == null) {
        return {
          ...state,
          operator: payload.operator,
          previousOperand: state.currentOperand,
          currentOperand: null
        }
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        operator: payload.operator,
        currentOperand: null
      }

    case ACTIONS.Clear:
      return {}
   
    case ACTIONS.Delete:
      if(state.overwrite) {
        return {
          ...state,
          currentOperand:null,
          overwrite:false
        }
      }
      if(state.currentOperand == null)
      return state

      if(state.currentOperand.length === 1) {
        return {
          ...state,
          currentOperand: null,
        }
      }

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1)
      }


    case ACTIONS.Evaluate:
      if(state.operator == null || state.currentOperand == null || state.previousOperand == null) {
    return state
      }

      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operator: null,
        currentOperand: evaluate(state)
       
      }
  }
}

function evaluate({currentOperand, previousOperand, operator}) {
  console.log("bhgjh");
  const current = parseFloat(currentOperand);
  const prev = parseFloat(previousOperand);
  if (isNaN(prev) || isNaN(current))
    return ""

  let result = ''
  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current
      break;
  }
 
  return result.toString();
}


export default function Buttons() {

  const [{ currentOperand, previousOperand, operator }, dispatch] = useReducer(reducer, {})


  return (
    <div className='calculator-grid'>
      <div className='output'>
        <div className='previous-operand'>{previousOperand} {operator}</div>
        <div className='current-operand'>{currentOperand}</div>
      </div>

      <button className='span-two' onClick={() => dispatch({ type: ACTIONS.Clear })}>AC</button>
      <button onClick={() => dispatch({ type: ACTIONS.Delete })}>DEL</button>
      <OperationButton operator="/" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton operator="*" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton operator="+" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton operator="-" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <button className='span-two' onClick={() => dispatch({ type: ACTIONS.Evaluate })} >=</button>

    </div>
  )
}

