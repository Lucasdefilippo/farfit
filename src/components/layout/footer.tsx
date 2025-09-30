import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="w-full py-6 bg-black mt-4 flex flex-col items-center justify-center gap-3">
            <Image
                src={"/assets/images/3inver.png"}
                height={100}
                width={200}
                alt=""
                className="h-23 object-cover md:scale-120"
            ></Image>
            <div className="flex flex-col gap-2 cursor-pointer font-bold">
                <Link
                    href={"https://www.instagram.com/oficialfarfit_/"}
                    className="flex gap-2"
                >
                    <Instagram color="#f2efe8" />
                    <p className="text-background">@oficialfarfit_</p>
                </Link>
                <Link
                    href={
                        "https://wa.me/5532984810903?text=Tenho%20interesse%20em%20adquirir%20um%20produto%20farfit."
                    }
                    className="flex gap-2"
                >
                    <Phone color="#f2efe8" />
                    <p className="text-background">(32)9 8481-0903</p>
                </Link>
                <Link href={"/"} className="flex gap-2">
                    <Mail color="#f2efe8" />
                    <p className="text-background">atendimento@farfit.com.br</p>
                </Link>
                <Link href={"/"} className="flex gap-2">
                    <MapPin color="#f2efe8" />
                    <p className="text-background">
                        Rua Lincon da Costa - 165, Bairro Boa Vista
                    </p>
                </Link>
            </div>
            <div className="text-xs cursor-pointer text-background mt-4">
                Direitos do site reservado a{" "}
                <Link href={""} className="cursor-pointer">
                    @forged_dev
                </Link>
            </div>
        </div>
    );
}
