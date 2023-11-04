import type { ILayout } from "./CategoryList.tsx";

export interface Props {
  imageUrl: string;
  name: string;
  price: number;
  originalPrice: number;
  coinMultiplier?: number;
  layout: ILayout;
}

const ProductCard = ({ imageUrl, name, price, originalPrice, layout, coinMultiplier }: Props) => {
  return (
    <div class={`m-3 ${layout.imageBgColor} rounded-lg w-60 ${layout.textColor} shadow-sm`}>
      <div class={`h-60 ${layout.imageBgColor} rounded-t-lg`}>
        <img
          alt="produto"
          src={imageUrl}
          class="object-fill rounded-t-lg "
        />
      </div>
      <div class={`p-4 flex flex-col ${layout.bgColor} w-full rounded-b-lg`}>
        <p class="pb-3 pt-1 text-lg">{name}</p>
        <s class={`text-sm ${layout.discountColor}`}>{originalPrice.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</s>
        <p class="font-bold text-lg">{price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p>
        <div class="flex flex-row items-center">
          <p class={`${layout.rewardColor} text-sm pr-2`}>ganhe {Math.floor(price * (coinMultiplier ? coinMultiplier : 1))}</p>
          <img class="h-4" src="/svg/coin-icon-gold.svg" alt="moedas" />
        </div>
      </div>
    </div>
  )
}

export default ProductCard