/* Imports */
import { useState } from 'react';
import './Accordion.scss'

/* Component - Accordion */
export default function Accordion({ children, triggerText }: { children: JSX.Element, triggerText: string }) {

  //Client state
  const [isOpen, setIsOpen] = useState(false)
  const [classOpen, setClassOpen] = useState(false)

  //Functions
  const openClose = (e: any) => {

    if (e.target.className === "accordion__trigger") {
      if (!isOpen) {
        setIsOpen(!isOpen)
        setTimeout(() => {
          setClassOpen(!classOpen)
        }, 0);

      }
      if (isOpen) {
        setClassOpen(!classOpen)
        setTimeout(() => {
          setIsOpen(!isOpen)
        }, 150);

      }

    }

  }

  /* JSX */
  return (
    <div className='accordion'>
      <p className='accordion__trigger' onClick={(e) => openClose(e)}>{triggerText}</p>

      {
        isOpen &&
        <div
          className={`accordion__content ${classOpen ? "open" : ""}`}
          onClick={(e) => openClose(e)}
        >
          {children}
        </div>
      }
    </div>
  )
}
