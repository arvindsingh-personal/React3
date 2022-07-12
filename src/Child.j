import React from "react";
class EvenOdd extends React.Component{
    render(){
        return(
            <>
                {(this.props.number % 2 ===0) ? 
                (<div style={{backgroundColor: '#ee4832', padding:'10%', fontSize:'5vw'}}>{this.props.number}</div>) : 
                (<div style={{backgroundColor: '#2b6cee', padding:'10%', fontSize:'5vw'}}>{this.props.number}</div>)}
            </>
        )
    }
}
export default EvenOdd