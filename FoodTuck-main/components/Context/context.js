import {useState,useEffect,createContext} from "react"

export const Cart = createContext();



export const CartProvider = ({children})=>{

    const [cartitems,setCartItems] = useState([])
    const [totalproducts,setTotalProducts] = useState(0);
    const [totalamount,setTotalamount] = useState(0)
    const [totalprice,setTotalprice] = useState(0)

    const total = ()=>{
  return   cartitems.reduce(
            (price,item) => price + item.quantity *  item.price  , 0
        )
    }

    const addtocart = (product)=>{
    const existingItem = cartitems.find((item)=>item.id === product.id)

    if(existingItem){
        setCartItems(cartitems.map((item)=>item.id === product.id ? {...item, quantity:item.quantity + 1} : item))
    }

    else{
        setTotalProducts(totalproducts + 1)
        alert( totalproducts)
       
        return setCartItems([...cartitems, {...product,quantity:1}])
       
    }
    
    }

    const remove = (product)=>{
        const existingCartItem = cartitems.find((cartitem)=>cartitem.id === product.id);
           return setCartItems(cartitems.filter((cartitem)=>cartitem.id !== existingCartItem.id));
   
    }

    const clear = ()=>{
        setCartItems([])
    }
    const increase = (id)=>{
        const existingCartItem = cartitems.find((cartitem)=>cartitem.id === id);

        if(existingCartItem){
            return setCartItems(cartitems.map((item)=>item.id === id ? {...item, quantity:item.quantity + 1, price:item.price += item.price} : item))
        }
        setTotalProducts(totalproducts + 1)
       
    }

    const decrease = (id)=>{
        const existingCartItem = cartitems.find((cartitem)=>cartitem.id === id);

        if(existingCartItem){
            if(existingCartItem.quantity === 1){
               const filtered =  cartitems.filter(cartitem=>cartitem.id !== existingCartItem.id)
              
               return setCartItems(filtered)

        }

        else{
            return   setCartItems(cartitems.map((item)=>item.id === id ? {...item, quantity:item.quantity - 1, price:item.price -= item.price} :item))
        }
        setTotalProducts(totalproducts - 1)
        }
    }
    return(
    <Cart.Provider value={{totalproducts,addtocart,cartitems,clear,remove,totalamount,increase,decrease,total}}>
        {children}
    </Cart.Provider>
    )
}