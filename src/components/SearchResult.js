import React,{Component} from 'react'





const SearchResult=(props) => {
    if (props.isShow==true){
        if(props.isFound==true){
    return(
        <div className="  my-4 p-2 mb-2   grid justify-items-center object-center w-1/4 max-w-screen-lg mx-auto  shadow">
<a className="mb-2">The image '{props.searchKey}' is found, see its preview below. </a>
<img className= "w-32 h-32 mb-2" src={props.inputImgUrl}/>


</div>
    )
   
} 
else{
     return(
        <div className="  my-4 p-2 mb-2   grid justify-items-center object-center w-1/4 max-w-screen-lg mx-auto  shadow">
     <a className="mb-2">The image '{props.searchKey}' is not found </a>
     </div>
     )

    }
    }
else{
    return (
        <div></div>
    )
}
}
export default SearchResult