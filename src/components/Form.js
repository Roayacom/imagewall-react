
import React, { Component } from 'react'
import Button from './Button'

class Form extends Component {

    constructor(props) {
        super(props);
      
        this.state = { 
    
           imgID: '',
            inputImgTitle: '',
            inputImgDesc: '',
            inputImgUrl: '',
            imgCreated:''
        
                
  

        }
    }
 
    

handleChange=event=>{
    const{name,value}=event.target;
    let d= new Date();
    let imgCreated= d.getDate() + "/" + Number(d.getMonth()+1) + "/" + d.getFullYear();
    this.setState({
        imgID:Math.random().toString(36).slice(2),
      imgCreated: imgCreated,

        [name]: value
            
  

    });
}
addImage=(event)=>{
   
   event.preventDefault();

   if (!this.state.inputImgTitle||
    !this.state.inputImgUrl){
        alert('Please make sure to enter image title and URL')
   return;
     }
     this.setState({
       
      
    inputImgTitle:''  ,  
       inputImgDesc: '',
       inputImgUrl: ''  

    });
    
     console.log(this.state.imgID)
   this.props.handleSubmit(this.state);

        

    }

    render() {
        const {inputImgTitle,inputImgDesc,inputImgUrl}=this.state;
        return (
           
       
               
                <form id="formImgUpload" onSubmit={this.addImage} class=" bg-gray-600 max-w-screen-md mx-auto border border-yellow-100 shadow-lg rounded px-4 pt-2 pb-2 mb-4  flex flex-col my-6">
                    <div class=" tracking-wide text-pink-300 text-xl font-bold mx-auto mb-6">Upload a new photo </div>
                    <div class="-mx-3 md:flex mb-6">
                        <div class="md:w-1/2 px-3 mb-4 md:mb-0">
                            <label class="block  tracking-wide text-yellow-100 text-xs font-bold mb-2" for="inputImgTitle">
                                Photo Title
                </label>
                            <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="inputImgTitle" name="inputImgTitle" value={inputImgTitle} onChange={this.handleChange} type="text" />
                        </div>
                        <div class="md:w-1/2 px-3">
                            <label class="block  tracking-wide text-yellow-100 text-xs font-bold mb-2" for="inputImgDesc">
                                Description (Optional)
                </label>
                            <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="inputImgDesc" name="inputImgDesc" value={inputImgDesc} onChange={this.handleChange} type="text" />
                        </div>
                    </div>
                    <div class="-mx-3 md:flex mb-4">
                        <div class="md:w-full px-3">
                            <label class="block  tracking-wide text-yellow-100 text-xs font-bold mb-2" for="inputImgUrl">
                                Photo URL
                </label>
                            <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="inputImgUrl" name="inputImgUrl" value={inputImgUrl} onChange={this.handleChange} type="text" />

                        </div>
                    </div>
                    <div class="mx-auto  ">
                  <Button >Upload</Button>

                       
                    </div>
                   

                </form>
          
          
        )
    }

}
export default Form;