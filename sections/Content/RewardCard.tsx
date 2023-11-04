interface Props {
  imageUrl: string
  name: string
  coins: number
}

const RewardCard = ({ imageUrl, name, coins }: Props) => {
  return (
    <div class="m-3 bg-zinc-900 rounded-lg w-60">

      <div class="h-[240px] rounded-t-lg flex">
        <img
          alt="produto"
          src={imageUrl}
          class="object-cover rounded-t-lg"
        />
      </div>

      <div class="p-4 flex flex-col bg-zinc-800 w-full rounded-b-lg items-center">
        <p class="text-sm text-white font-bold">{name}</p>
        <div class="flex flex-row items-center">
          <img class="h-5 mr-2" src="https://gcdnb.pbrd.co/images/Kn8qJxENZLJv.png" alt="moedas" />
          <p class="text-yellow-500 text-xl pr-2">{coins} pontos</p>
        </div>
        <button class="text-zinc-900 text-sm font-semibold mt-2 bg-yellow-500 py-1 w-20 rounded-md">Resgatar</button>
      </div>

    </div>
  )
}

export default RewardCard