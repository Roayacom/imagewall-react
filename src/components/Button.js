import React, {Children, Component} from 'react'

const Button  =({
    children,
    type
})=>
{
   
return(
    <button type="submit" class="  border-2 border-white text-white font-bold lg:text-sm md:text-xs text-xs rounded  px-3 py-3 my-2 hover:bg-gray-800 hover:text-yellow-50 hover:border-yellow-50">{children}</button>   
)
}
export default Button