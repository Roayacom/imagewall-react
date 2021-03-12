import React, {Children, Component} from 'react'

const Button  =({
    children,
    type
})=>
{
   
return(
    <button type="submit" class="  border-2 border-blue-300 text-blue-300 font-bold lg:text-sm md:text-xs text-xs rounded  px-3 py-3 my-2 hover:bg-gray-800 hover:text-blue-400 hover:border-blue-400">{children}</button>   
)
}
export default Button