import { render } from '@testing-library/react'
import React, {Component} from 'react'
import Hyperlink from './Hyperlink';
import Modal from './Modal'

class Gallery extends Component {
    constructor (props){
    super(props) ;
this.state= {
clickedImgID:'',
isShow:false
}

this.openModal =imgID =>{
       
    this.setState(prev=>({
           modalImgID:imgID,
           isShow:!prev.isShow
           
    }))
         console.log(this.state.modalImgID); 
     }
 }


 
    render(){

    

    const articles = this.props.photoData.map((article) => {


        return (
         
        
           
            <article  key={article.imgID} className="border-2 border-yellow-50 overflow-hidden rounded-lg shadow-lg">
                <img className="w-auto h-56 mx-auto object-cover " src={article.inputImgUrl}/>
                <header className="flex bg-yellow-50 items-center justify-between  md:p-4">
                 
                <h1 className="text-lg font-bold  text-fray-700"> {article.inputImgTitle}</h1>
                <Hyperlink onClick={()=>this.openModal(article.imgID)}>View</Hyperlink>
            
                </header>
                {/* <div>Description: {article.inputImgDesc}</div> */}

               
            </article>
       
        );

    });
    return (
    <div>
        <section className="mx-20 my-5 grid grid-cols-1 md:grid-cols-4 gap-5">{articles}</section>
        <Modal className="" modalImgID={this.state.modalImgID} photoData={this.props.photoData} closeModal={this.openModal} isShow={this.state.isShow}/>
                
      
</div>
    )

    }

}


export default Gallery