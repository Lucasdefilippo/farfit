import { produtos } from "@/dados";
import ProductComponent from "./productComponent";

export default function ProductList() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4">
            {Array.isArray(produtos) &&
                produtos.map((item) => (
                    <ProductComponent
                        key={item.id}
                        name={item.nome}
                        id={item.id}
                        price={item.price}
                        image={item.image}
                    />
                ))}
        </div>
    );
}
