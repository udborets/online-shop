import { useState } from "react"
import '../styles/BuyButton.scss'


const BuyButton = () => {
  const [count, setCount] = useState<number>(0);
  function decrease() {
    if (count >= 1) {
      setCount(count => count - 1);
    }
  }
  function increase() {
    if (count < 100) {
      setCount(count => count + 1);
    }
  }
  return (
    <div className="buy-btn">
      <button className="buy-btn__btn" onClick={decrease}>
        -
      </button>
      <span className="buy-btn__count">
        {count}
      </span>
      <button className="buy-btn__btn" onClick={increase}>
        +
      </button>
    </div>
  )
}

export default BuyButton