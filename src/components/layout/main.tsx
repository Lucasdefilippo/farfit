import { MessageCircleHeart } from "lucide-react";
// import ProductComponent from "../main/productComponent";
import ProductList from "../main/productList";

export default function Main() {
    return (
        <div className="">
            <div className="flex gap-2 items-center border-b-1 border-black w-70 mb-4">
                <MessageCircleHeart />
                <h2 className="font-bold text-2xl">Mais vendidos</h2>
            </div>
            <ProductList />
        </div>
    );
}
