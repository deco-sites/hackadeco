import Header from "$store/components/ui/SectionHeader.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";
import ProductCard, { Props as IProductCard } from "./ProductCard.tsx";

interface Props {
  title?: string;
  description?: { text: string, href?: string };
  align?: "left" | "center";
  productCards: IProductCard[];
}

function CategoryList({title, description, align, productCards}: Props) {
  const id = useId();

  title = title ?? "Super Ofertas!";
  description = description ?? { text: "Veja mais", href: "/" };
  align = align ?? "left";
  
  const exampleCards: IProductCard[]  = [
		{
			name: "Tênis de corrida Nike preto e branco",
			price: 129.90,
			originalPrice: 159.90,
			imageUrl: "https://imgnike-a.akamaihd.net/1920x1920/012350ID.jpg",
      coinMultiplier: 1.25
		},
		{
			name: "Moletom Adidas bege simples",
			price: 59.90,
			originalPrice: 99.90,
			imageUrl:
				"https://www.amilesportes.com.br/lojas/00044767/prod/059839-1.jpg",
        coinMultiplier: 1
		},
    {
			name: "Camiseta Nike Dry Tiffany Feminina",
			price: 99.90,
			originalPrice: 139.99,
			imageUrl: "https://static3.tcdn.com.br/img/img_prod/868773/camiseta_nike_dry_legend_crew_tiffany_feminina_5055_1_3be0fa2d4e2deff291901c8d52bccdb8.jpg",
      coinMultiplier: 2
		},
		{
			name: "Camiseta Nike Dry Legend Crew",
			price: 99.90,
			originalPrice: 149.90,
			imageUrl: "https://static3.tcdn.com.br/img/img_prod/868773/camiseta_nike_dry_legend_crew_preta_feminina_4917_1_981665c28cc25ba1f6860ff42d815de9.jpg", 
      coinMultiplier: 1
		},
    {
			name: "Mochila Vans Street Sport Realm",
			price: 79.90,
			originalPrice: 119.90,
			imageUrl:
				"https://lojavirus.fbitsstatic.net/img/p/mochila-vans-street-sport-realm-backpack-black-white-checkerboard-vn0a49zj56m-72335/294308-1.jpg?w=1200&h=1200&v=no-change&qs=ignore",
        coinMultiplier: 1
		}
	];

  const cards = productCards ? ( productCards.length > 0 ? productCards : exampleCards ): exampleCards;

  return (
    <div
      id={id}
      class="container py-8 flex flex-col gap-8 lg:gap-10 text-base-content lg:py-10"
    >
      <Header
        title={title}
        description={description}
        alignment={align}
      />

      <Slider class="carousel justify-center carousel-start gap-4 lg:gap-8 row-start-2 row-end-5">
        {cards.map((
          { imageUrl, name, price, originalPrice, coinMultiplier },
          index,
        ) => (
          <Slider.Item
            index={index}
            class="flex flex-col gap-4 carousel-item first:pl-6 sm:first:pl-0 last:pr-6 sm:last:pr-0"
          >
            
            <ProductCard 
              imageUrl={imageUrl}
              name={name}
              price={price}
              originalPrice={originalPrice}
              coinMultiplier={coinMultiplier}
            />

          </Slider.Item>
        ))}
      </Slider>

      <SliderJS rootId={id} />
    </div>
  );
}

export default CategoryList;
