/* Imports */
import { useEffect, useState } from 'react';
import './AutoModal.scss'

/* Component - Modal */
export default function AutoModal({ children, modalRef }: { children: JSX.Element, modalRef: string }) {

  //Client state
  const [isOpen, setIsOpen] = useState(false)
  const [classOpen, setClassOpen] = useState(false)

  //Side effects
  useEffect(() => {
    const isFirstTime = localStorage.getItem(modalRef)
    if (isFirstTime === "true") return;
    setClassOpen(true)
    setIsOpen(true)
    localStorage.setItem(modalRef, "true")
  }, [])


  //Functions
  const openClose = (e: any) => {
    if (e.target.className === "modal__content open") {
      setClassOpen(false)

      setTimeout(() => {
        setIsOpen(false)
      }, 150); //delay = to transition time in scss
    }
  }

  /* JSX */
  return (
    <>
      {
        isOpen &&
        <div
          className={`modal__content ${classOpen ? "open" : ""}`}
          onClick={(e) => openClose(e)}
        >
          {children}
        </div>
      }
    </>
  )
}
