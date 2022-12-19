import React from 'react'
import axios from 'axios'

class Chatbot extends React.Component {

  state = {
    chat:[],
    msg:''
  }
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({msg:e.target.value})
  }
  handleSend = () => {
    if(this.state.msg !== ''){
      axios.post('http://127.0.0.1:5000/chat', {'msg':this.state.msg})
      .then(res=>{
        let ch = this.state.chat;
        ch.push({from:'our',msag:this.state.msg});
        ch.push({from: 'cb', msag:res.data});
        this.setState({chat:ch, msg:''});
        console.log(this.state);
      })
      .catch(err=>{
        console.log(err); 
      })
    }
  }
  render()
  {
    return(
       <div className="p-4 flex flex-col justify-between h-full overflow-y-scroll">
         <div className="h-12 flex justify-between items-center">
          {
            this.state.chat.map((msg) => {
              if(msg.from === 'cd') {
                return <div style={{height:'30px', width:'30%', padding:'30px', marginRight:'500px', borderRadius: '100px', marginBottom:'50px',backgroundColor:'#0474ea', float:'left', display: 'block'}}>{msg.msag}</div>
              } else {
                return <div style={{height:'30px',width:'30%', padding:'30px', marginLeft:'500px', borderRadius: '100px', marginTop:'5 0px', backgroundColor: 'grey', float: 'right', display: 'block'}}>{msg.msag}</div>
              }
            })
          }
         </div>
          <div className="h-8 flex justify-between items-center">
            <input className="w-full py-2 px-4 rounded-lg shadow-lg outline-none focus:shadow-outline-blue"
                   type="text"
                   placeholder="Type your message here..."
                   name='msg'
                   onChange={(e)=>this.handleChange(e)}
                   value={this.state.msg} 
                />

            <button
             onClick={() => this.handleSend()}
             type="submit"
             className="py-2 px-4 rounded-lg bg-blue-500 text-white font-bold">
              Send
            </button>
          </div>
       </div>
    )
  }
  
}

export default Chatbot