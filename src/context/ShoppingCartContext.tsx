import { ReactNode, createContext, useContext, useState } from "react"

type ShoppingCartProviderProps = {
    children : ReactNode
}

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => number
}

type CartItem = {
    id: number
    quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

//This is the radio that listens for context
export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

//This is the radio station that broadcasts the context
export function ShoppingCartProvider({children} : ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
    return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  )
}