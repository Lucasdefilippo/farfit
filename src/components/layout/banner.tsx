"use client";
import Image from "next/image";
import "@/app/globals.css";

export function Banner() {
    return (
        <div className="h-152 md:h-140">
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
                            <div className="w-80 h-auto">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Consequatur quisquam sed iure
                                a, in corporis consectetur officiis velit
                                obcaecati molestias ab adipisci dolores error
                                natus facilis, architecto deleniti, labore
                                cupiditate?
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
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Consequatur quisquam sed iure
                                a, in corporis consectetur officiis velit
                                obcaecati molestias ab adipisci dolores error
                                natus facilis, architecto deleniti, labore
                                cupiditate?
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
