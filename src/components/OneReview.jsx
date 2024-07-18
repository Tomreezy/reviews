import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

const OneReview = ({data,goForward,goBack,randomReview}) => {

    const{id,name,job,image,text}=data

  return (
    <article className='flex shadow-md space-y-4 flex-col items-center max-w-96 mx-auto p-4  '>
        <div className='border-4 border-solid border-violet-700 size-32 rounded-full overflow-hidden'>
            <img src={image} className='w-full h-full  object-cover'/>
        </div>
        <div className='flex flex-col items-center'>
            <p className='text-xl'>{name}</p>
            <p className=' font-bold text-violet-700'>{job}</p>
            <p className='text-sm text-center text-slate-500'>{text}</p>
        </div>
        <div className="space-x-4">
        <button><FontAwesomeIcon onClick={goBack} className="text-violet-700" icon={faArrowLeft} /></button>
        <button><FontAwesomeIcon onClick={goForward} className="text-violet-700" icon={faArrowRight} /></button>
        </div>
        <div>
            <button onClick={randomReview} className="bg-violet-400 border border-solid border-violet-700 rounded-md text-violet-700  p-1">Suprise me</button>
        </div>
    </article>
  )
}

export default OneReview