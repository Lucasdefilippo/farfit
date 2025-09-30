import type { Produtos } from "./types/produtos";

export const produtos: Produtos[] = [
    {
        nome: "LevePro",
        id: 1,
        price: 15.49,
        description:
            "O LevePro é um suplemento alimentar em pó, com ingredientes nutricionalmente funcionais, 100% em forma desidratada, acondicionado em sachês individuais. A fórmula combina proteína de soro do leite (whey protein), leite em pó desnatado, cacau 100%, café solúvel, goma xantana e adoçante natural, promovendo energia, saciedade e praticidade",
        image: "/assets/images/levepro.png",
    },
    {
        nome: "Stick Antiatrito",
        id: 2,
        price: 18.99,
        description:
            "O Stik Antiatrito é um cosmético em bastão sólido desenvolvido para reduzir o atrito da pele com roupas ou superfícies, prevenindo desconfortos como assaduras, irritações e vermelhidão. Sua fórmula combina ingredientes naturais e funcionais, como a cera de abelha, manteiga de karité, vitamina E, óleo de jojoba e extrato de romã, que proporcionam hidratação, nutrição, ação antioxidante e proteção da pele.",
        image: "/assets/images/stick.png",
    },
];
