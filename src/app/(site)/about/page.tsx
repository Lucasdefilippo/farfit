import Image from "next/image";

export default function Sobre() {
    return (
        <div className="px-12 flex flex-col md:flex-row justify-center items-center md:gap-4">
            <Image
                src={"/assets/images/3.jpg"}
                height={500}
                width={500}
                alt=""
            ></Image>
            <div className="max-w-150 mb-4">
                <h2 className="font-bold text-2xl">FarFit.</h2>
                <p className="font-light font-sm mb-4 pl-2">
                    NUTRIÇÃO E PERFORMACE ESPORTIVA
                </p>
                <p className="font-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                    eaque aliquam provident quaerat, sequi nemo impedit quo sunt
                    suscipit quis qui, exercitationem rerum, et vel. Ex,
                    molestiae. Officiis, ullam aut. Vero voluptatibus deleniti
                    repellendus quos hic, eveniet veritatis enim ullam optio
                    reprehenderit ex molestias voluptatum distinctio
                    necessitatibus cupiditate? Provident, et quam. Consequuntur
                    porro excepturi quos atque delectus harum totam iure. Sunt
                    facilis veniam labore odit hic, itaque, eaque voluptas sed
                    dicta error in nam. Commodi mollitia voluptate asperiores
                    esse adipisci quos neque aliquam, maiores, doloribus et
                    quaerat, deleniti ullam dolore?
                </p>
            </div>
        </div>
    );
}
