import "./Hero.scss";

export default function Hero({ children }: { children: any }) {
  return (
    <div className="hero">
      <div className="hero__content">
        {children}
      </div>
    </div>
  )
}
