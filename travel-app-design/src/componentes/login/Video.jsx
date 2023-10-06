
import "./loginStyle.css"
import bgVideo from "../../imgs/bg-login2.mp4"

export const Video = () => {
  return (
    <div className="video-background">
    <video autoPlay loop muted>
      <source src={bgVideo} type="video/mp4" />
      Tu navegador no soporta la reproducción de videos.
    </video>
  </div>
  )
}
