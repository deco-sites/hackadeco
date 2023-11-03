import { Picture, Source } from "apps/website/components/Picture.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  image: {
    mobile: ImageWidget;
    desktop?: ImageWidget;
    altText: string;
  };

  pins: Pin[];

  text?: string;
  title?: string;
  link?: {
    text: string;
    href: string;
  };
}

export interface Pin {
  mobile: {
    x: number;
    y: number;
  };
  desktop?: {
    x: number;
    y: number;
  };
  link: string;
  label: string;
}

const DEFAULT_PROPS: Props = {
  link: {
    href: "#",
    text: "Ver agora",
  },
  pins: [],
  image: {
    mobile:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/cac2dc1c-48ac-4274-ad42-4016b0bbe947",
    altText: "Fashion",
  },
};

export default function ShoppableBanner(props: Props) {
  const { link, text, title, image, pins } = { ...DEFAULT_PROPS, ...props };

  return (
    <div class="container">
      <div class="card lg:card-side rounded grid grid-cols-1 lg:grid-cols-[70%_30%]">
        <figure class="relative rounded-lg">
          <Picture>
            <Source
              media="(max-width: 767px)"
              src="https://img.freepik.com/premium-photo/active-sport-girl-runner-running-yellow-background_545934-6630.jpg"
              width={150}
              height={150}
            />
            <Source
              media="(min-width: 768px)"
              src="https://img.freepik.com/premium-photo/active-sport-girl-runner-running-yellow-background_545934-6630.jpg"
              width={384}
              height={227}
            />
            <img
              class="w-full object-cover"
              sizes="(max-width: 640px) 100vw, 30vw"
              src="https://img.freepik.com/premium-photo/active-sport-girl-runner-running-yellow-background_545934-6630.jpg"
              alt={image?.altText}
              decoding="async"
              loading="lazy"
            />
          </Picture>
          
        </figure>
        <div class="card-body">
          <h2 class="card-title">Sobre a Tenshoes</h2>
          <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with</p>
        </div>
      </div>
    </div>
  );
}
