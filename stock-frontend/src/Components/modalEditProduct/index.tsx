import { useContext } from "react"
import CreateProductContext from "../../contexts/productContexts";
import { deleteProduct, getProducts, updateProduct } from "../../services/utils/product";

function EditProduct() {
  const {
    id,
    name,
    setName,
    quantity,
    setQuantity,
    minQuantity,
    setMinQuantity,
    category,
    setCategory,
    openEditModal,
    setOpenEditModal,
    setProducts
  } = useContext(CreateProductContext)!;
    
    return (
        <>
        {openEditModal && (
                <div className="w-full h-full flex items-center justify-center fixed bg-[rgba(0,0,0,0.5)]">
                  <div className="w-140 gap-2 p-4 flex flex-col text-white rounded-md bg-[#0F172A]">
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
                        className="px-6 py-2 rounded-md border hover:bg-red-700 font-semibold cursor-pointer"
                        onClick={() => setOpenEditModal(!openEditModal)}
                      >
                        Cancelar
                      </button>
                      <button
                        className="px-6 py-2 rounded-md border hover:bg-red-700 font-semibold cursor-pointer"
                        onClick={async () => {
                          await deleteProduct(id)
                          setProducts(await getProducts())
                          setOpenEditModal(!openEditModal)
                        } 
                      }
                      >
                        Deletar
                      </button>
                      <button
                        type="button"
                        className="px-6 py-2 rounded-md border hover:bg-white hover:text-black font-semibold cursor-pointer"
                        onClick={ async () => {
                          await updateProduct({ id, name, quantity, minQuantity, category})
                          setProducts(await getProducts())
                          setOpenEditModal(!openEditModal)
                        }
                        }
                      >
                        Alterar Dados Do Produto
                      </button>
                    </div>
                  </div>
                </div>
        )}
    </> 
    )
}

export default EditProduct