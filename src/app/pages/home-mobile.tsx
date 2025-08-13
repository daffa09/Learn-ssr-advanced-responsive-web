import { Product } from "../constant/product";

export default function HomeMobile({ products }: { products: Product[] }) {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">📱 Fanthom Store Versi Mobile</h1>
      <div className="flex flex-col gap-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-xl shadow-sm p-3 flex items-center gap-4 hover:shadow-md transition-all"
          >
            <img
              src={p.image}
              alt={p.title}
              className="h-20 w-20 object-contain rounded-lg bg-gray-50 p-1"
            />
            <div className="flex flex-col flex-1">
              <h2 className="font-semibold text-gray-700 line-clamp-2">{ p.title }</h2>
              <p className="text-green-600 font-bold mt-1">$ { p.price }</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
