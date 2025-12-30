import iconAdd from "../../assets/apple-touch-icon.png";
import iconBox from "../../assets/caixa.png";
import iconAlert from "../../assets/alerta.png";
import iconExit from "../../assets/sair.png"
import { useContext, useEffect } from "react";
import CreateProductContext from "../../contexts/productContexts";
import { createProduct, getProductById, getProducts } from "../../services/utils/product";
import { getUser } from "../../services/utils/user";
import CreateUserContext from "../../contexts/userContext";
import EditProduct from "../../Components/modalEditProduct";
import { useNavigate } from "react-router-dom";

function Products() {
  const { user, setUser } = useContext(CreateUserContext)!
  const navigate = useNavigate()
  const {
    setId,
    products,
    setProducts,
    name,
    setName,
    quantity,
    setQuantity,
    minQuantity,
    setMinQuantity,
    category,
    setCategory,
    openModal,
    setOpenModal,
    setOpenEditModal
  } = useContext(CreateProductContext)!;

  async function showProducts() {
      setProducts(await getProducts());
    }
  function handleLogout() {
  localStorage.removeItem("token")
  navigate("/sign-in")
}

  useEffect(() => {
    async function showUserName() {
      setUser(await getUser())
    }

    showUserName()
    showProducts();
  }, []);
  return (
    <div className="flex bg-[#1F2937] w-full h-[100vh]">
      <EditProduct />
      {openModal && (
        <div className="w-full h-full flex items-center justify-center fixed bg-[rgba(0,0,0,0.5)]">
          <div className="w-120 gap-2 p-4 flex flex-col p-2 text-white rounded-md bg-[#0F172A]">
            <p>Nome do produto:</p>
            <input
              className="w-full border rounded-md p-2 outline-none"
              type="text"
              placeholder="Ex: Arroz"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <p>Quantidade:</p>
            <input
              className="w-full border rounded-md p-2 outline-none"
              type="text"
              placeholder="0"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />

            <p>Estoque mínimo:</p>
            <input
              className="w-full border rounded-md p-2 outline-none"
              type="text"
              placeholder="0"
              value={minQuantity}
              onChange={(e) => setMinQuantity(Number(e.target.value))}
            />

            <p>Categoria:</p>
            <input
              className="w-full border rounded-md p-2 outline-none"
              type="text"
              placeholder="Ex: Comida"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <div className="flex m-2 justify-evenly w-full">
              <button
                className="px-8 py-2 rounded-md border hover:bg-red-700 font-semibold cursor-pointer"
                onClick={() => {
                  setOpenModal(!openModal)
                  setName("")
                  setCategory("")
                  setQuantity(0)
                  setMinQuantity(0)
                }
                } 
              >
                Cancelar
              </button>
              <button
                type="button"
                className="px-8 py-2 rounded-md border hover:bg-white hover:text-black font-semibold cursor-pointer"
                onClick={async () => {
                  if (!name || !category || quantity <= 0 || minQuantity <= 0) {
                    alert("Preencha todos os campos corretamente")
                    return
                  }
                  await createProduct({name, quantity, minQuantity, category})
                  await getProducts()
                  await showProducts()
                  setOpenModal(!openModal)
                }
                }
              >
                Adicionar produto
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="w-full flex flex-col items-center">
        <div className=" w-full flex px-4 flex-col text-white font-semibold">
          {
            user && (
                <h1 className=" py-2 text-xl capitalize">Dashboard - {user.name}</h1>
            )
          }
          <div className="flex flex-col px-2 mb-6">
          </div>
          <div className="w-full mt-2 flex justify-around text-white font-semibold">
            <div className=" w-70 h-30 bg-[#0F172A] flex rounded-xl p-2 border-t-8 border-[#2EC9FF]">
              <div>
                <p className="text-lg">Produtos</p>
                <p className="text-3xl">{products.length}</p>
              </div>
              <div className="w-full flex w-20 h-17 justify-end mt-6">
                <img src={iconBox} alt="" />
              </div>
            </div>

            <div
              className=" w-70 h-30 bg-[#0F172A] rounded-xl p-2 border-t-8 border-[#A178F1] cursor-pointer"
              onClick={() => setOpenModal(true)}
            >
              <p className="text-lg">Adicionar Produtos</p>
              <div className="w-full flex w-20 h-15 justify-end">
                <img src={iconAdd} alt="" />
              </div>
            </div>
            <div className=" w-70 h-30 bg-[#0F172A] flex rounded-xl p-2 border-t-8 border-[#FF3365]">
              <div className="w-full">
                <p className="text-lg">Baixo Estoque</p>
                <p className="text-3xl">{products.filter(product => product.quantity < product.minQuantity).length}</p>
              </div>
              <div className="w-full flex h-15 mt-7 justify-end">
                <img src={iconAlert} alt="" />
              </div>
            </div>
            <div className=" w-70 h-30 bg-[#0F172A] flex rounded-xl p-2 border-t-8 border-[#FFC048] cursor-pointer" onClick={() => handleLogout()}>
              <div className="w-full">
                <p className="text-lg">Sair</p>
                
              </div>
              <div className="w-full flex h-17 mt-7 justify-end">
                <img src={iconExit} alt="" />
              </div>
            </div>
          </div>
        </div>

  {products.length > 0 && (
  <div className="bg-[#0F172A] px-4 py-2 rounded-md mt-8 w-full text-white">
    <div className="overflow-x-auto">
      <table className="min-w-full text-left border-collapse">
        <thead className="bg-[#1E293B]">
          <tr>
            <th className="px-4 py-3 font-semibold">Nome</th>
            <th className="px-4 py-3 font-semibold">Categoria</th>
            <th className="px-4 py-3 font-semibold">Quantidade</th>
            <th className="px-4 py-3 font-semibold">Estoque</th>
            <th className="px-4 py-3 font-semibold">Ações</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="border-b border-gray-700 hover:bg-[#1E293B] transition"
            >
              <td className="px-4 py-3">{product.name}</td>
              <td className="px-4 py-3">{product.category}</td>
              <td className="px-4 py-3">{product.quantity}</td>
              <td className="px-4 py-3">
                {product.quantity < product.minQuantity ? (
                  <span className="text-red-400 font-semibold">Estoque Baixo</span>
                ) : (
                  <span className="text-green-400 font-semibold">OK</span>
                )}
              </td>
              <td onClick={() => {
                getProductById(product.id)
                setId(product.id)
                setOpenEditModal(true)
                setName(product.name)
                setCategory(product.category)
                setQuantity(product.quantity)
                setMinQuantity(product.minQuantity)
              } 
              } className="px-4 py-3 text-blue-400 cursor-pointer hover:underline">
                Editar produto
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)}
      </div>
    </div>
  );
}

export default Products;
