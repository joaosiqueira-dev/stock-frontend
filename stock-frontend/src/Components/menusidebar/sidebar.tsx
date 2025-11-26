import gearIcon from '../../assets/engrenagemIcon.png'
import graphicIcon from '../../assets/graficoIcon.png'
import dashboardIcon from '../../assets/dashboard-icon.png'
import homeIcon from '../../assets/homeIcon.png'
import productsIcon from '../../assets/produtosIcon.png'
import squaresIcon from '../../assets/quadradosIcon.png'

function SideBar() {
 
    return (
        <div className="bg-[#0F172A] w-14 h-[100vh] gap-4 p-2 flex flex-col items-center">
          <img className='w-8' src={dashboardIcon} alt="" />
          <button className='focus:bg-gray-800 hover:bg-gray-800 p-2 rounded-md'><img className='w-5' src={homeIcon} alt="" /></button>
          <button className='focus:bg-gray-800 hover:bg-gray-800  p-2 rounded-md'><img className='w-5 opacity-50' src={squaresIcon} alt="" /></button>
          <button className='focus:bg-gray-800 hover:bg-gray-800 p-2 rounded-md'><img className='w-5' src={graphicIcon} alt="" /></button>
          <button className='focus:bg-gray-800 hover:bg-gray-800 p-2 rounded-md'><img className='w-5' src={productsIcon} alt="" /></button>
          <button className='focus:bg-gray-800 hover:bg-gray-800 p-2 rounded-md'><img className='w-5' src={gearIcon} alt="" /></button>
          
        
        </div>
    )
}

export default SideBar