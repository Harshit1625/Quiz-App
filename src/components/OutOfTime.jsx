
import Navbar from './Navbar'
import { Link } from 'react-router-dom'


const OutOfTime = () => {
  return (
    <div>
          <Navbar />
          <div className="rounded shadow-lg p-8 ml-[25%] w-1/2 flex flex-col justify-center items-center bg-purple-900 mt-[10%]">
        
            <h1 className="font-bold ml-8 text-[50px] mt-2 mb-5">Oops !!</h1>
            <h3>You ran out of time !!</h3>
            <Link to='/'>
            <button className="bg-purple-950 p-1 mt-8 rounded pl-5 pr-5">Retry</button>
            </Link>
          </div>
        </div>
  )
}

export default OutOfTime
