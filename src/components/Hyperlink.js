import React, {Children, Component} from 'react'

const Hyperlink  =({
    children,
    type,
    onClick
})=>
{
   
return(
    <a class="text-blue-300 underline cursor-pointer" onClick={onClick}>{children}</a>  
)
}
export default Hyperlink