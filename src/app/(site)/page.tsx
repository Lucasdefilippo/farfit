import { Banner } from "@/components/layout/banner";
import Main from "@/components/layout/main";
import Image from "next/image";

export default function Home() {
    return (
        <div className="px-12">
            <Banner />
            <Main />
        </div>
    );
}
