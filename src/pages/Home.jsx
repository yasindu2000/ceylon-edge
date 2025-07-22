
import LeftPane from '../components/leftPane/LeftPane'
import MiddlePane from '../components/middlePane/MiddlePane'
import RightPane from '../components/rightPane/RightPane'

function Home() {
  return (
    <div className='flex w-[100%]'>
       
       <LeftPane></LeftPane>
       <MiddlePane></MiddlePane>
       <RightPane></RightPane>
    </div>
  )
}

export default Home