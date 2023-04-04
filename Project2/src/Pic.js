import React from "react"
import  { useState, useEffect } from "react"

export default function Pic(){
    const [text, setText] = useState("")
const [fullText, setFullText] = useState(
    "Bringing Bits To Life"
  )
const [index, setIndex] = useState(0)

useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index])
        setIndex(index + 1)
      }, 100)
    }
  }, [index])
    return(
        <div>
            <img src="../mainlogo.jpg" className="main"/>
            <h2 className="main2">{text}</h2>
        </div>
    )
}