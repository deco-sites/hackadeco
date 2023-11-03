export interface Props {
  title: string,
  subtitle: string,
  cta: string,
  imageUrl?: string
}

const LargeProductCard = ({ title, subtitle, cta, imageUrl }: Props) => {
  return (
    <div class="m-3 bg-zinc-900 rounded-lg w-[400px] h-[200px] flex justify-between shadow-sm">

      <div class="p-4 flex flex-col bg-zinc-200 w-full rounded-l-lg">
        <p class="font-medium text-lg pt-4">{subtitle}</p>
        <p class="leading-8 pb-3 pt-1 text-3xl text-zinc-900 font-bold">{title}</p>
        <button class="text-white text-sm bg-zinc-700 mt-4 py-1 w-20 rounded-md">{cta}</button>
      </div>

      <div class="flex rounded-lg w-full">
        { imageUrl && (
          <img
            alt="produto"
            src={imageUrl}
            class="object-cover rounded-r-lg"
          />
        )}
      </div>

    </div>
  )
}

export default LargeProductCard