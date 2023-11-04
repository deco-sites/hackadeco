import { SendEventOnLoad } from "$store/components/Analytics.tsx";
import ProductCard, {
  Layout as cardLayout,
} from "$store/components/product/ProductCard.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Header from "$store/components/ui/SectionHeader.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";
import LargeProductCard, { Props as ILargeCard } from "./LargeProductCard.tsx";

interface Props {
  largeCards?: ILargeCard[]
}

function TabbedProductShelf({largeCards}: Props) {
  const id = useId();

  const cardsExamples = [
    {
      title: "Casacos e Jaquetas",
      subtitle: "ATÉ 60% OFF",
      cta: "Veja Mais",
      imageUrl: "https://static.netshoes.com.br/produtos/jaqueta-black-river-puffer-lisa-masculina/06/MCN-0089-006/MCN-0089-006_zoom1.jpg?ts=1695612270&ims=544x"
    },
    {
      title: "Shorts de Academia",
      subtitle: "ATÉ 40% OFF",
      cta: "Veja Mais",
      imageUrl: "https://static.netshoes.com.br/produtos/short-adidas-marathon-20-feminino/06/COL-5376-006/COL-5376-006_zoom1.jpg?ts=1634268808&ims=544x"
    },
    {
      title: "Bonés Esportivos",
      subtitle: "ATÉ 60% OFF",
      cta: "Veja Mais",
      imageUrl: "https://static.netshoes.com.br/produtos/bone-nike-aba-curva-featherlight-run/06/HZM-0082-006/HZM-0082-006_zoom1.jpg?ts=1698041911&ims=544x"
    },
    {
      title: "Tênis de Corrida",
      subtitle: "ATÉ 60% OFF",
      cta: "Veja Mais",
      imageUrl: "https://rmesportes.com.br/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-29-at-15.17.24-4.jpeg"
    }
  ];

  const cards = largeCards ? (largeCards.length > 0 ? largeCards : cardsExamples) : cardsExamples;

  return (
    <div class="w-full container  py-8 flex flex-col gap-8 lg:gap-12 lg:py-10">

      <div
        id={id}
        class="container grid grid-cols-[48px_1fr_48px] px-0 sm:px-5"
      >
        <Slider class="carousel carousel-center sm:carousel-end gap-6 col-span-full row-start-2 row-end-5">
          {cards?.map((card, index) => (
            <Slider.Item
              index={index}
              class="cursor-pointer carousel-item first:pl-6 sm:first:pl-0 last:pr-6 sm:last:pr-0"
            >
              <LargeProductCard
                title={card.title}
                subtitle={card.subtitle}
                cta={card.cta}
                imageUrl={card.imageUrl}
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
