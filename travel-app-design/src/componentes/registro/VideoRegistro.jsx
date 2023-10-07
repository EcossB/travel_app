import bgVideo from "./imgs/Makapuu Sunrise Timelapse 4K.mp4"
import "./registroStyle.css"

export const VideoRegistro = () => {
  return (
    <div className="video-background">
    <video autoPlay loop muted>
      <source src={bgVideo} type="video/mp4" />
      Tu navegador no soporta la reproducción de videos.
    </video>
  </div>
  )
}
