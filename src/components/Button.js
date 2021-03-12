import React, {Children, Component} from 'react'

const Button  =({
    children,
    type
})=>
{
   
return(
    <button type="submit" class=" bg-gray-700 border-2 border-pink-600 text-pink-600 font-bold lg:text-sm md:text-xs text-xs rounded  px-4 py-3 my-2 hover:bg-gray-800 hover:text-pink-700 hover:border-pink-700">{children}</button>   
)
}
export default Button