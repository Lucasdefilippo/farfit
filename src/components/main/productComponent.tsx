import { ShoppingCart } from "lucide-react";
import Image from "next/image";

type props = {
    name?: string;
    id?: number;
    price?: number;
    image: string;
};

export default function ProductComponent({ name, id, price, image }: props) {
    return (
        <div className="w-50 border-1 border-black rounded-sm bg-white">
            <div className="p-2 flex flex-col gap-2">
                <Image
                    src={image}
                    height={200}
                    width={200}
                    alt=""
                    className="w-30 h-39 mx-auto rounded-sm"
                ></Image>
                <div className="text-center font-bold">{name}</div>
                <div className="">
                    <p className="text-sm">
                        <s>R$ {(price! + 5.0).toFixed(2)}</s>
                    </p>
                    <p className="font-bold text-lg pl-1">R$ {price}</p>
                    <p className="text-xs -mt-1 pl-1">
                        <i>No pix</i>
                    </p>
                </div>
                <div className="flex bg-[#004AAC] rounded-sm p-2 justify-center items-center gap-2 hover:bg-[#02449b] border-1 border-[#004AAC] hover:border-background cursor-pointer">
                    <ShoppingCart className="size-5" color="#f2efe8" />
                    <p className="text-background text-xs">Add ao carrinho</p>
                </div>
            </div>
        </div>
    );
}
