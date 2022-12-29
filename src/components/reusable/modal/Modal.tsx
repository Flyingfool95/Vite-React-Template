/* Imports */
import { useState } from 'react';
import './Modal.scss'

/* Component - Modal */
export default function Modal({ children, buttonText }: { children: JSX.Element, buttonText: string }) {

  //Client state
  const [isOpen, setIsOpen] = useState(false)

  //Functions
  const openClose = (e: any) => {
    console.log(
      e
    );

    if (e.target.className === "modal__content") {
      setIsOpen(!isOpen)
    }
  }

  /* JSX */
  return (
    <div className='modal'>
      <button onClick={() => setIsOpen(!isOpen)}>{buttonText}</button>
      {
        isOpen &&
        <div className="modal__content" onClick={(e) => openClose(e)}>
          {children}
        </div>
      }
    </div>
  )
}
