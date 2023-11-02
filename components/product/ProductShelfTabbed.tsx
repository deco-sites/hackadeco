import { SendEventOnLoad } from "$store/components/Analytics.tsx";
import ProductCard, {
  Layout as cardLayout,
} from "$store/components/product/ProductCard.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Header from "$store/components/ui/SectionHeader.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";
import LargeProductCard from "./LargeProductCard.tsx";

function TabbedProductShelf() {
  const id = useId();
  
  const products = [
    {
      name: "Casacos e Jaquetas",
      discount: 60,
      imageUrl: "https://static.netshoes.com.br/produtos/jaqueta-black-river-puffer-lisa-masculina/06/MCN-0089-006/MCN-0089-006_zoom1.jpg?ts=1695612270&ims=544x"
    },
    {
      name: "Shorts de Academia",
      discount: 40,
      imageUrl:
        "https://static.netshoes.com.br/produtos/short-adidas-marathon-20-feminino/06/COL-5376-006/COL-5376-006_zoom1.jpg?ts=1634268808&ims=544x"
    },
    {
      name: "Bonés Esportivos",
      discount: 60,
      imageUrl:
        "https://static.netshoes.com.br/produtos/bone-nike-aba-curva-featherlight-run/06/HZM-0082-006/HZM-0082-006_zoom1.jpg?ts=1698041911&ims=544x"
    },
    {
      name: "Tênis de Corrida",
      discount: 30,
      imageUrl:
        "https://static.netshoes.com.br/produtos/tenis-de-corrida-feminino-mizuno-wave-rider-26-roxy/18/2FU-8123-018/2FU-8123-018_zoom1.jpg?ts=1684848109&ims=544x"
    }
  ];

  return (
    <div class="w-full container  py-8 flex flex-col gap-8 lg:gap-12 lg:py-10">

      <div
        id={id}
        class="container grid grid-cols-[48px_1fr_48px] px-0 sm:px-5"
      >
        <Slider class="carousel carousel-center sm:carousel-end gap-6 col-span-full row-start-2 row-end-5">
          {products?.map((prd, index) => (
            <Slider.Item
              index={index}
              class="carousel-item first:pl-6 sm:first:pl-0 last:pr-6 sm:last:pr-0"
            >
              <LargeProductCard
                name={prd.name}
                discount={prd.discount}
                imageUrl={prd.imageUrl}
              />
            </Slider.Item>
          ))}
        </Slider>

        <>
          <div class="hidden relative sm:block z-10 col-start-1 row-start-3">
            <Slider.PrevButton class="btn btn-circle btn-outline absolute right-1/2 bg-base-100">
              <Icon size={24} id="ChevronLeft" strokeWidth={3} />
            </Slider.PrevButton>
          </div>
          <div class="hidden relative sm:block z-10 col-start-3 row-start-3">
            <Slider.NextButton class="btn btn-circle btn-outline absolute left-1/2 bg-base-100">
              <Icon size={24} id="ChevronRight" strokeWidth={3} />
            </Slider.NextButton>
          </div>
        </>
        <SliderJS rootId={id} />
        
      </div>
    </div>
  );
}

export default TabbedProductShelf;
