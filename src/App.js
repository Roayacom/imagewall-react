import Form from './components/Form'
import Gallery from './components/Gallery'
import Nav from './components/Nav'
import Modal from './components/Modal'
import { Component } from 'react';



class App extends Component {
  constructor(props) {
    super(props);
  
 this.state={
  modalImgID:'',
  isShow:false,
    photosArray:[]
   
  };
  this.handleSubmit=photo=>{
    this.setState({photosArray:[...this.state.photosArray,photo]})
  
  }
   this.openModal =imgID =>{
       
    this.setState({
           modalImgID:imgID,
           isShow:!this.state.isShow
           
    })
         console.log(this.state.modalImgID); 
     }
    }

  render(){
    const {photosArray}=this.state;
  return (
   
    <div className="App  ">
      <Nav photoData={photosArray} />
      <Form handleSubmit={this.handleSubmit}/>
      <Gallery photoData={photosArray} openModal={this.openModal}/>
      <Modal className="" modalImgID={this.state.modalImgID} photoData={photosArray} closeModal={this.openModal} isShow={this.state.isShow}/>
   
     
      

    <div>
    
</div>
    
      
    </div>
  );
}
}


export default App;
