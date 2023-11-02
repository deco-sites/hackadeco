export interface Props {
  imageUrl: string
  name: string 
  price: string 
  originalPrice: string
}

const ProductCard = ({ imageUrl, name, price, originalPrice }: Props) => {
  return (
    <div class="m-3 bg-zinc-900 rounded-lg w-60 text-white">
      <div class="h-auto">
        <img
          alt="produto"
          src={imageUrl}
          class="object-fill"
        />
      </div>
      <div class="p-4 flex flex-col bg-zinc-800 w-full rounded-b-lg">
        <p class="pb-3 pt-1 text-lg">{name}</p>
        <s class="text-sm text-zinc-500">{originalPrice}</s>
        <p class="font-bold text-lg">{price}</p>
        <div class="flex flex-row items-center">
          <p class="text-yellow-500 text-sm pr-2">ganhe 120</p>
          <img class="h-4" src="https://gcdnb.pbrd.co/images/Kn8qJxENZLJv.png" alt="moedas" />
        </div>
      </div>
    </div>
  )
}

export default ProductCard