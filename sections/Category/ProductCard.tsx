export interface Props {
  imageUrl: string
  name: string 
  price: number 
  originalPrice: number,
  theme?: "light" | "dark";
  coinMultiplier?: number
}

interface ILayout {
  bgColor: string;
  imageBgColor: string;
  textColor: string;
  discountColor: string;
  rewardColor:  string;
}

const ProductCard = ({ imageUrl, name, price, originalPrice, theme, coinMultiplier }: Props) => {
  theme = theme ? theme : "light";

  let layout: ILayout;
  if (theme === "dark") {
    layout = {
      bgColor: "bg-zinc-900",
      imageBgColor: "bg-zinc-100",
      textColor: "text-white",
      discountColor: "text-zinc-500",
      rewardColor: "text-yellow-500"
    }
  } else {
    layout = {
      bgColor: "bg-zinc-200",
      imageBgColor: "bg-zinc-100",
      textColor: "text-zinc-700",
      discountColor: "text-zinc-500",
      rewardColor: "text-yellow-500"
    }
  }

  return (
    <div class={`m-3 bg-zinc-900 rounded-lg w-60 text-white shadow-sm`}>
      <div class="h-60 bg-zinc-100 rounded-t-lg">
        <img
          alt="produto"
          src={imageUrl}
          class="object-fill rounded-t-lg "
        />
      </div>
      <div class="p-4 flex flex-col bg-zinc-800 w-full rounded-b-lg">
        <p class="pb-3 pt-1 text-lg">{name}</p>
        <s class="text-sm text-zinc-500">{originalPrice.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</s>
        <p class="font-bold text-lg">{price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p>
        <div class="flex flex-row items-center">
          <p class="text-yellow-500 text-sm pr-2">ganhe {Math.floor(price * (coinMultiplier ? coinMultiplier : 1))}</p>
          <img class="h-4" src="https://gcdnb.pbrd.co/images/Kn8qJxENZLJv.png" alt="moedas" />
        </div>
      </div>
    </div>
  )
}

export default ProductCard