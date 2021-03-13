
import React, { Component } from 'react'
import logo from '../img/logonew.png'
import iconfinder from '../img/iconfinder.png'
import SearchResult from './SearchResult'
import Button from './Button'
import Hyperlink from './Hyperlink'

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
             searchValue:'',
           
            inputSearch: '',
            isShow:false,
            inputImgUrl:'',
            isFound:false

           
                
          }
    }
 
    

handleChange=event=>{
    const{name,value}=event.target;
    this.setState({
     
        [name]: value
            
      //  inputImgDesc: '',
     //   inputImgUrl: ''  

    });
}
    searchImage=(event)=>{
        event.preventDefault() ;
        this.searchValue=this.state.inputSearch;
        if (!this.searchValue){
                alert('Pleas make sure to enter a search keyword')
           return;
             }
      
         
        //  this.props.handleSearch(this.state);
         //  this.setState({ //isShow:true,}   )
           this.setState({
               isShow:true
           }) 
           let imageCollection=this.props.photoData;
           let image = imageCollection.find(imageCollection => imageCollection.inputImgTitle == this.searchValue);

        if (!image) {


            console.log("incorrect" ) ;
           // document.getElementById('searchResult').classList.remove('hidden');
           // const newResult = new resultBox("", "", "not found");
           
         //   cleaner();
         this.setState({
      
           isFound:false
         })
            return;
        }

        console.log("correct");

        //const newResult = new resultBox(image.imgTitle, image.imgUrl, "found");
        this.setState({
            inputImgUrl:image.inputImgUrl,
           isFound:true
        })
        
            }
          


    
    
    render(){
        return (
            <div>
    <nav className="bg-gray-700">
    <div class="container  mx-auto px-6 py-4 flex justify-between items-center">

        <div class=" flex px-1">
          
               
            <img src={logo} alt="imageWALL"  />
            
         
            <p className=" text-white pt-1 " style={{fontFamily:'Wallpoet'}}>imageWALL</p>
         
     
        </div>


        <div class="p-1 w-1/3  flex justify-between rounded space-x-2 border border-yellow-100 shadow-lg  ">
            <input id="inputSearch" className="p-1  bg-gray-700 text-yellow-100 w-11/12 focus:outline-none focus:bg-gray-700" type="text" placeholder="Search for a photo  " name="inputSearch" value={this.inputSearch} onChange={this.handleChange}
              />

            <a id="searchButton "  className="w-6 h-6 pt-1" href="" onClick={this.searchImage}>

            <img src={iconfinder}/>
               
            </a>

        </div>
        <div class="flex inline-flex items-center   space-x-4">

         <Hyperlink>Log in</Hyperlink>
            <Button className="pt-1">Sign Up</Button>

        </div>

    </div>
 

</nav>  
 <SearchResult isFound={this.state.isFound} inputImgUrl={this.state.inputImgUrl} isShow={this.state.isShow} searchKey={this.searchValue}/>
 </div>
        )
    } 
}
export default Nav;
