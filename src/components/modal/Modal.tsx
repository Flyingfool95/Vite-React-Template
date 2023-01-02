/* Imports */
import { useState } from 'react';
import './Modal.scss'

/* Component - Modal */
export default function Modal({ children, buttonText }: { children: JSX.Element, buttonText: string }) {

  //Client state
  const [isOpen, setIsOpen] = useState(false)
  const [classOpen, setClassOpen] = useState(false)

  //Functions
  const openClose = (e: any) => {

    if (e.target.className === "modal__trigger") {
      setIsOpen(true)

      setTimeout(() => {
        setClassOpen(true)
      }, 0);
    }
    if (e.target.className === "modal__content open") {
      setClassOpen(false)

      setTimeout(() => {
        setIsOpen(false)
      }, 150); //delay = to transition time in scss
    }
  }

  /* JSX */
  return (
    <div className='modal'>

      <button className='modal__trigger' onClick={(e) => openClose(e)}>
        {buttonText}
      </button>

      {
        isOpen &&
        <div
          className={`modal__content ${classOpen ? "open" : ""}`}
          onClick={(e) => openClose(e)}
        >
          {children}
        </div>
      }
    </div>
  )
}
