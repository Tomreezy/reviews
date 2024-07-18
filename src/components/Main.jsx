import { useState } from "react"
import reviews from "../data/data"
import OneReview from "./OneReview"

const Main = () => {
    const[indexSetter,setIndexSetter]=useState(0)
    const oneReview=reviews[indexSetter]

    function goBack(){
        setIndexSetter(indexSetter==0 ? reviews.length-1: indexSetter-1)
    }

    function goForward(){
        setIndexSetter(indexSetter==reviews.length-1?0:indexSetter+1)
    }

    function getRandomNumber(length){
        return Math.floor(Math.random() * length )
    }

    function randomReview(){
        const randomNumber= getRandomNumber(reviews.length-1)
       
        setIndexSetter(randomNumber==indexSetter?randomNumber+1:randomNumber)
        
    }

  return (
    <section className=" flex items-center w-screen h-screen ">
        <OneReview randomReview={randomReview} goBack={goBack} goForward={goForward} data={oneReview} />
    </section>
  )
}

export default Main