import loaderGif from '../../assets/images/loadingRocket.gif'
import imageNotFound from '../../assets/images/imageNotFound.jpg'

export default function Loader(){
    return (
        <div className="flex items-center justify-center h-screen">
        <img src={loaderGif || imageNotFound} alt="Loading" />
      </div>
    )
}