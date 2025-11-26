import { useNavigate } from "react-router-dom";
import SideBar from "../../Components/menusidebar/sidebar";
import iconAdd  from '../../assets/apple-touch-icon.png'
import iconBox  from '../../assets/caixa.png'
import iconAlert  from '../../assets/alerta.png'

function Products() {
    const navigate = useNavigate()
  return (
    <div className="flex bg-[#1F2937] w-full h-full">
        
      <SideBar />
      <div className="w-full flex flex-col items-center">
        <div className=" w-full flex px-4 flex-col text-white font-semibold">
        <h1 className=" py-2 ">Meu Estoque - Produtos</h1>
        <div className="flex flex-col px-2 mb-6">
          <header className="flex justify-center ">
            <input className="w-100 border-1 px-6 outline-none bg-[#0F172A] rounded-md py-2" type="text" placeholder="Pesquisar produto" />
          </header>
        </div>
        <div className="w-full mt-2 flex justify-around text-white font-semibold">
            
          <div className=" w-70 h-30 bg-[#0F172A] flex rounded-xl p-2 border-t-8 border-[#2EC9FF]"
          onClick={() => navigate("/Products")}
          >
            <div>
            <p className="text-lg">Produtos</p>
            <p className="text-3xl">320</p>
            </div>
            <div className="w-full flex w-20 h-17 justify-end mt-6">
              <img src={iconBox} alt="" />
            </div>
          </div>
          <div className=" w-70 h-30 bg-[#0F172A] rounded-xl p-2 border-t-8 border-[#A178F1]"
          onClick={() => navigate("/Categories")}
          >
            <p className="text-lg">Adicionar Produtos</p>
            <div className="w-full flex w-20 h-15 justify-end">
              <img src={iconAdd} alt="" />
            </div>
          </div>
          <div className=" w-70 h-30 bg-[#0F172A] flex rounded-xl p-2 border-t-8 border-[#FF3365]"
          onClick={() => navigate("/LowStock")}
          >
            <div className="w-full">
            <p className="text-lg">Baixo Estoque</p>
            <p className="text-3xl">8</p>
            </div>
            <div className="w-full flex h-15 mt-7 justify-end">
              <img src={iconAlert} alt="" />
            </div>
          </div>
          </div>
          </div>
        
        <div className=" bg-[#0F172A] px-4 py-2 rounded-md mt-8 w-280 font-semibold text-white text-lx border-white">
          <div className="flex justify-around p-2 border-b-1">
            <p>Arroz</p>
            <p>Category: Food</p>
            <p>Quantity: 481</p>
            <p>Stock: OK</p>
            <p>Editar produto</p>
          </div>
          <div className="flex justify-around p-2 border-b-1">
            <p>Arroz</p>
            <p>Category: Food</p>
            <p>Quantity: 481</p>
            <p>Stock: OK</p>
            <p>Editar produto</p>
          </div>
          <div className="flex justify-around p-2 border-b-1">
            <p>Arroz</p>
            <p>Category: Food</p>
            <p>Quantity: 481</p>
            <p>Stock: OK</p>
            <p>Editar produto</p>
          </div>
          <div className="flex justify-around p-2 border-b-1">
            <p>Arroz</p>
            <p>Category: Food</p>
            <p>Quantity: 481</p>
            <p>Stock: OK</p>
            <p>Editar produto</p>
          </div>
          <div className="flex justify-around p-2 border-b-1">
            <p>Arroz</p>
            <p>Category: Food</p>
            <p>Quantity: 481</p>
            <p>Stock: OK</p>
            <p>Editar produto</p>
          </div>
          <div className="flex justify-around p-2 border-b-1">
            <p>Arroz</p>
            <p>Category: Food</p>
            <p>Quantity: 481</p>
            <p>Stock: OK</p>
            <p>Editar produto</p>
          </div>
          <div className="flex justify-around p-2 border-b-1">
            <p>Arroz</p>
            <p>Category: Food</p>
            <p>Quantity: 481</p>
            <p>Stock: OK</p>
            <p>Editar produto</p>
          </div>
          <div className="flex justify-around p-2 border-b-1">
            <p>Arroz</p>
            <p>Category: Food</p>
            <p>Quantity: 481</p>
            <p>Stock: OK</p>
            <p>Editar produto</p>
          </div>
          <div className="flex justify-around p-2 border-b-1">
            <p>Arroz</p>
            <p>Category: Food</p>
            <p>Quantity: 481</p>
            <p>Stock: OK</p>
            <p>Editar produto</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
