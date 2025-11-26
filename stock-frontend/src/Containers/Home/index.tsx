import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import SideBar from "../../Components/menusidebar/sidebar";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()
  const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];
  return (
    <div className="bg-[#1F2937] flex">
      <SideBar />
      <div className=" w-full flex px-4 flex-col text-white font-semibold">
        <h1 className=" py-3">Meu Estoque - Visão Geral</h1>
        <div className="w-full flex justify-around text-white font-semibold">
          <div className=" w-70 h-30 bg-[#0F172A] rounded-xl p-2 border-t-10 border-[#2EC9FF]"
          onClick={() => navigate("/Products")}
          >
            <p className="text-lg">Produtos</p>
            <p className="text-3xl">320</p>
          </div>
          <div className=" w-70 h-30 bg-[#0F172A] rounded-xl p-2 border-t-10 border-[#A178F1]"
          onClick={() => navigate("/Categories")}
          >
            <p className="text-lg">Categorias</p>
            <p className="text-3xl">8</p>
          </div>
          <div className=" w-70 h-30 bg-[#0F172A] rounded-xl p-2 border-t-10 border-[#FF3365]"
          onClick={() => navigate("/LowStock")}
          >
            <p className="text-lg">Baixo Estoque</p>
            <p className="text-3xl">8</p>
          </div>
          
        </div>
        <div className="mt-30">
          <ComposedChart width={730} height={250} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Area
              type="monotone"
              dataKey="amt"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          </ComposedChart>
        </div>
      </div>
    </div>
  );
}

export default Home;
