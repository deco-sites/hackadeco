import Icon from "$store/components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";
import Header from "$store/components/ui/SectionHeader.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";
import type { ImageWidget } from "apps/admin/widgets.ts";
import RewardCard, {Props as IRewardCard} from "deco-sites/hackadeco/sections/Content/RewardCard.tsx";

interface Props {
  title?: string;
  description?: { text?: string, href?: string };
  align?: "left" | "center";
  rewardCards?: IRewardCard[];
}

export default function BlackPoints({title, description, align, rewardCards}: Props) {
  const id = useId();

  title = title ?? "Resgate com Black Points!";
  description = description ?? { text: "Veja mais", href: "/" };
  align = align ?? "left";

  const exampleCards = [
    {
      name: "Camisa Nike Academy",
      coins: 400,
      imageUrl: "https://static.netshoes.com.br/produtos/camisa-nike-academy-dri-fit-masculina/75/HZM-4815-775/HZM-4815-775_zoom1.jpg?ts=1626390141&ims=544x"
    },
    {
      name: "Relógio Digital Led",
      coins: 700,
      imageUrl:
        "https://images-americanas.b2w.io/produtos/5622048519/imagens/pulseira-inteligente-xiaomi-mi-smart-band-7-preto-m2129b1/5622048527_1_large.jpg"
    },
    {
      name: "Fone de Ouvido JBL Reflect",
      coins: 1200,
      imageUrl:
        "https://images-americanas.b2w.io/produtos/5526927513/imagens/fones-de-ouvido-bluetooth-s-fio-air-dots/5526927513_1_large.jpg"
    },
    {
      name: "Tênis Skechers Go Run",
      coins: 800,
      imageUrl: "https://static.netshoes.com.br/produtos/tenis-skechers-go-run-fast-valor-feminino/17/EUZ-6466-717/EUZ-6466-717_zoom1.jpg?ts=1695699996&ims=544x"
    },
    {
      name: "Regata Under Armour Sports",
      coins: 600,
      imageUrl:
        "https://static.netshoes.com.br/produtos/regata-under-armour-sports-logo-masculina/06/B78-9410-006/B78-9410-006_zoom1.jpg?ts=1695526578&ims=544x"
    },
    {
      name: "Camisa Flamengo Poetry",
      coins: 1500,
      imageUrl:
        "https://static.netshoes.com.br/produtos/camisa-flamengo-poetry-feminina-preta-e-vermelha/06/D40-7349-006/D40-7349-006_zoom1.jpg?ts=1695612755&ims=544x"
    }
  ];

  const cards = rewardCards ? (rewardCards.length > 0 ? rewardCards : exampleCards) : exampleCards;

  return (
    <>
      <div
        class="container py-8 flex flex-col gap-8 xl:gap-10 text-base-content xl:py-10 relative"
      >
        <Header
          title={title}
          description={description}
          alignment={align}
        />
        <Slider class="carousel carousel-center sm:carousel-end gap-6 col-span-full row-start-2 row-end-5">
          {cards.map((card, index,
          ) => (
            <Slider.Item
              index={index}
              class="flex flex-col gap-4 carousel-item first:pl-6 sm:first:pl-0 last:pr-6 sm:last:pr-0"
            >

              <RewardCard
                name={card.name}
                coins={card.coins}
                imageUrl={card.imageUrl}
              />

            </Slider.Item>
          ))}
        </Slider>
        <>
          <div class="hidden absolute sm:block z-10 top-1/2">
            <Slider.PrevButton class="btn btn-circle btn-outline absolute right-1/2 bg-base-100">
              <Icon size={24} id="ChevronLeft" strokeWidth={3} />
            </Slider.PrevButton>
          </div>
          <div class="hidden absolute sm:block z-10 top-1/2 right-0">
            <Slider.NextButton class="btn btn-circle btn-outline absolute left-1/2 bg-base-100">
              <Icon size={24} id="ChevronRight" strokeWidth={3} />
            </Slider.NextButton>
          </div>
        </>
        <SliderJS rootId={id} />

      </div>
    </>
  );
}
