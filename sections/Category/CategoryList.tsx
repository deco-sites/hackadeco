import Header from "$store/components/ui/SectionHeader.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import ProductCard from "./ProductCard.tsx";

export interface Category {
  tag?: string;
  label: string;
  description?: string;
  href?: string;
  image?: ImageWidget;
  buttonText?: string;
}

export interface Props {
  header?: {
    title?: string;
    description?: string;
  };
  list?: Category[];
  layout?: {
    headerAlignment?: "center" | "left";
    categoryCard?: {
      textPosition?: "top" | "bottom";
      textAlignment?: "center" | "left";
    };
  };
}

function CategoryList(props: Props) {
  const id = useId();
  
  const products = [
		{
			name: "Tênis de corrida Nike preto e branco",
			price: "R$ 129,90",
			originalPrice: "R$ 159,90",
			imageUrl: "https://imgnike-a.akamaihd.net/1920x1920/012350ID.jpg"
		},
		{
			name: "Moletom Adidas bege simples",
			price: "R$ 59,90",
			originalPrice: "R$ 99,90",
			imageUrl:
				"https://www.amilesportes.com.br/lojas/00044767/prod/059839-1.jpg"
		},
    {
			name: "Camiseta Nike Dry Tiffany Feminina",
			price: "R$ 99,90",
			originalPrice: "R$ 149,90",
			imageUrl: "https://static3.tcdn.com.br/img/img_prod/868773/camiseta_nike_dry_legend_crew_tiffany_feminina_5055_1_3be0fa2d4e2deff291901c8d52bccdb8.jpg"
		},
		{
			name: "Camiseta Nike Dry Legend Crew",
			price: "R$ 99,90",
			originalPrice: "R$ 149,90",
			imageUrl:
				"https://static3.tcdn.com.br/img/img_prod/868773/camiseta_nike_dry_legend_crew_preta_feminina_4917_1_981665c28cc25ba1f6860ff42d815de9.jpg"
		},
    {
			name: "Mochila Vans Street Sport Realm",
			price: "R$ 79,90",
			originalPrice: "R$ 119,90",
			imageUrl:
				"https://lojavirus.fbitsstatic.net/img/p/mochila-vans-street-sport-realm-backpack-black-white-checkerboard-vn0a49zj56m-72335/294308-1.jpg?w=1200&h=1200&v=no-change&qs=ignore"
		}
	];

  return (
    <div
      id={id}
      class="container py-8 flex flex-col gap-8 lg:gap-10 text-base-content lg:py-10"
    >
      <Header
        title="Super ofertas!"
        description="Veja mais"
        alignment="left"
      />

      <Slider class="carousel justify-center carousel-start gap-4 lg:gap-8 row-start-2 row-end-5">
        {products.map((
          { imageUrl, name, price, originalPrice },
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
            />

          </Slider.Item>
        ))}
      </Slider>

      <SliderJS rootId={id} />
    </div>
  );
}

export default CategoryList;
