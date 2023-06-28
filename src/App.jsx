import { useState } from "react";
import people from "./data"
import {
  CgChevronLeftR,
  CgChevronRightR,
  
} from "react-icons/cg"
import { FaQuoteRight} from "react-icons/fa"

const App = () => {
  const [index, setIndex] = useState(0)
  const { name,image,id,text,job } = people[index]

  const checkNumber = (numnber) => {
    if (numnber > people.length-1) { 
return 0
    }
    if (numnber < 0) { 
      return people.length-1
    }
    return numnber
   }

  const prevBtn = () => { 
    setIndex((index) => {
      let newIndex = index -1;
       return checkNumber(newIndex) 
     })
  }
  const nextBtn = () => { 
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex)
    })
    }

  // console.log(name)
  return <main>
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight/>
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{ job}</p>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button className="prev-btn" onClick={prevBtn}>
          <CgChevronLeftR/>
        </button>
        <button className="next-btn" onClick={nextBtn}>
          <CgChevronRightR/>
        </button>
      </div>
    </article>
  </main>
    
};
export default App;
