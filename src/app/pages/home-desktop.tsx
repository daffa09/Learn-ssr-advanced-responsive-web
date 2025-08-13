import { Product } from "../constant/product";

export default function HomeDesktop({ products }: { products: Product[] }) {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">🛒 Fanthom Store Versi Desktop</h1>
      <div className="grid grid-cols-4 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-5 flex flex-col"
          >
            <div className="flex justify-center">
              <img
                src={p.image}
                alt={p.title}
                className="h-48 w-auto object-contain transform hover:scale-105 transition-transform"
              />
            </div>
            <h2 className="mt-4 font-semibold text-gray-700 line-clamp-2">{p.title}</h2>
            <p className="mt-auto text-green-600 font-bold text-lg">Rp {p.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
