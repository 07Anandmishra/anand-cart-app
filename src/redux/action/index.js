export const addCart=(product)=>{
    return{
        type:'ADDTO_CART',
        payload:product
    }
}

export const removeCart=(product)=>{
    return{
        type:'REMOVETO_CART',
        payload:product
    }
}