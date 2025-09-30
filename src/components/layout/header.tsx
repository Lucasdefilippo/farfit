"use client";
import { ArrowDown, ShoppingBasket, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Header() {
    const [oppened, setOppened] = useState(false);

    const newState = () => {
        setOppened(!oppened);
    };

    return (
        <div className="border-b border-black/15 pb-4 mb-4">
            <div className="md:hidden bg-black text-background p-2 text-center">
                Frete Grátis <b>para todo BRASIL!</b>
            </div>
            <div className="bg-black text-background p-2 text-center hidden md:block">
                Frete Grátis em compras{" "}
                <b>acima de R$150,00 para todo BRASIL!</b>
            </div>

            <div className="flex px-12 mt-4 items-center justify-between gap-2">
                <Image
                    src={"/assets/images/logo80x80.png"}
                    height={80}
                    width={80}
                    alt=""
                    className="hover:cursor-pointer md:w-15 md:h-15 w-10 h-10"
                ></Image>

                <ul className="hidden md:flex gap-5 text-xl font-bold">
                    <li>
                        <Link href={"/"}>Inicio</Link>
                    </li>
                    <li>
                        <Link href={"/"}>Produtos</Link>
                    </li>
                    <li>
                        <Link href={"/about"}>Sobre Nós</Link>
                    </li>
                </ul>

                <div className="cursor-pointer flex gap-2 md:gap-4 items-center">
                    <div
                        className="flex flex-col gap-1 md:hidden"
                        onClick={newState}
                    >
                        {oppened ? (
                            <ArrowDown className="rotate-180" />
                        ) : (
                            <ArrowDown />
                        )}
                    </div>

                    <Link href={"/login"} className="hover:scale-105">
                        <User height={30} width={30} />
                    </Link>
                    <Link href={"/"} className="hover:scale-105">
                        <ShoppingBasket height={30} width={30} />
                    </Link>
                </div>
            </div>
            <ul
                className={`${
                    oppened ? "h-20" : "h-0 invisible"
                } flex flex-col gap-2 font-bold transition-all h-0 items-end px-30 md:hidden`}
            >
                <li>
                    <Link href={"/"}>Inicio</Link>
                </li>
                <li>
                    <Link href={"/"}>Produtos</Link>
                </li>
                <li>
                    <Link href={"/about"}>Sobre Nós</Link>
                </li>
            </ul>
        </div>
    );
}
