import React,{Component} from 'react'




class Modal extends Component {
    constructor(props) {
        super(props);
    }
        closeModal=()=>{
            //document.getElementById("Modal").classList.add("hidden");
            this.props.closeModal && this.props.closeModal();
         
        }
        deleteImg=()=>{
            let confirmResult = window.confirm("Are you sure you want to delete the image?");
        if (confirmResult) {
            let imageCollection=this.props.photoData;
            let image = imageCollection.findIndex(imageCollection => imageCollection.imgID ==this.props.modalImgID);
          
           imageCollection.splice(image, 1);
          this.closeModal();

          //  if (imageCollection.length >= 0) {
             //  album();

            }
        }

        

 render(){
    if (this.props.isShow==true){
        let imageCollection=this.props.photoData;
       
        let image = imageCollection.find(imageCollection => imageCollection.imgID == this.props.modalImgID);
    return(
        <div id="Modal" className="absolute  top-0 flex items-center justify-center  ">
        <div className=" p-6 py-6 bg-gray-700 opacity-90 p-2   w-screen h-screen ">    </div>
         <div className="absolute bg-white top-8 w-2/3 h-5/6 border-8 border-opacity-25 border-pink-300 rounded-lg ">

        <h1 class="viewImageTitle text-3xl text-purple-800 py-6 text-center">{image.inputImgTitle}</h1>

        <img class="viewImage py-6 mx-auto w-auto h-3/5" src={image.inputImgUrl} alt=""/>
        <h1 class="viewImageDescription tex-xl py-4 text-center" >{image.inputImgDesc} </h1>
        <p class="viewImageDate text-xl py-4 text-center">Created at: {image.imgCreated}</p>
        <div class="flex justify-between absolute inset-x-6 bottom-6 ">
            <button className="closeModal w-1/6  p-2 bg-gray-700 hover:bg-gray-800 text-white  " onClick={this.closeModal}>Close</button>
            <button class="deleteImage w-1/6 p-2  bg-red-700 hover:bg-red-800 text-white "
                onClick={this.deleteImg}>Delete</button>
                </div>
    
        
        </div>
  </div>
    )
}
else{return (<div></div>)}
}
}
export default Modal