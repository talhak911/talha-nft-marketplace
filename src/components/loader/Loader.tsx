import loaderGif from '../../assets/images/loadingRocket.gif'
export default function Loader(){
    return (
        <div className="flex items-center justify-center h-screen">
        <img src={loaderGif} alt="Loading" />
      </div>
    )
}