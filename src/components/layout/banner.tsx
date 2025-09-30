"use client";
import Image from "next/image";
import "@/app/globals.css";

export function Banner() {
    return (
        <div className="h-170 md:h-140">
            <div className="font-birthstone text-7xl text-center mb-4">
                LevePro
            </div>

            <div className="">
                <div className="flex justify-center items-center">
                    <div className="relative mx-auto">
                        <div className="w-60 md:w-80 h-80 md:h-100 mx-auto">
                            <Image
                                src={"/assets/images/banner1.png"}
                                height={1000}
                                width={1000}
                                alt=""
                                className="w-full h-full rounded-sm"
                            ></Image>
                        </div>
                        {/* Texto 1 */}
                        <div className="mt-6 md:absolute md:bottom-0 md:left-95 justify-center hidden md:block">
                            <div className="w-80 h-auto pl-4">
                                <ul className="list-disc">
                                    Suplemento 100% em pó:
                                    <li>
                                        Alta estabilidade físico-química (não
                                        precisa refrigeração)
                                    </li>
                                    <li>
                                        Maior vida útil graças à baixa atividade
                                        de água
                                    </li>
                                    <li>Fácil preparo: basta diluir em água</li>
                                    <li>
                                        Embalado em sachês individuais:
                                        praticidade no transporte e consumo
                                    </li>
                                    <li>
                                        Dose padronizada: controle exato da
                                        ingestão diária
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Linha baixo */}
                        <div className="w-60 md:w-80 h-80 md:h-100 absolute right-0 md:-right-10 top-4 -z-10 border-1 border-black"></div>
                        {/* Linha cima */}
                        <div className="w-60 md:w-80 h-80 md:h-100 absolute left-0 md:-left-10 -top-4 md:bottom-4 -z-10 border-1 border-black"></div>
                        {/* Texto 2 */}
                        <div className="mt-6 md:absolute md:top-0 md:right-95 flex flex-col justify-center">
                            <h3 className="text-xl font-bold">Mocaccino</h3>
                            <div className="w-80 h-auto">
                                O LevePro é um suplemento alimentar em pó, com
                                ingredientes nutricionalmente funcionais, 100%
                                em forma desidratada, acondicionado em sachês
                                individuais. A fórmula combina proteína de soro
                                do leite (whey protein), leite em pó desnatado,
                                cacau 100%, café solúvel, goma xantana e
                                adoçante natural, promovendo energia, saciedade
                                e praticidade.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
