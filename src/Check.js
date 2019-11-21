import React from 'react';

  class Check extends React.Component{
   
 constructor(){
     super()
     this.state={
         isLoggedIn: false
     }
     this.handleClick=this.handleClick.bind(this)
 }


handleClick(){
 
    this.setState(prevState=>{
        return{
            isLoggedIn: !prevState.isLoggedIn
        }
    })
}


 render(){
     let buttonText=this.state.isLoggedIn ? "LOG OUT": "LOG IN"
     let dipsplayText=this.state.isLoggedIn? "LOgged In ": "Logged out"
     return(
         <div>
          <h1>{displayText}</h1>
        <button onClick={this.handleClick}>{buttonText}</button>
         </div>
     )
 }


  }




export default Check