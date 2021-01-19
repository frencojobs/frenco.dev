import cn from 'classnames'
import Image from 'next/image'

type Props = {
  item: Project
  star?: number
  useFlex?: boolean
}

export const ProjectCard: React.FC<Props> = ({
  item,
  star,
  useFlex = false,
}) => {
  return (
    <li
      className={cn(
        'transition transform border-2 border-gray-300 border-solid rounded-md hover:-translate-y-1 hover:shadow-md',
        {
          'flex flex-grow': useFlex,
          block: !useFlex,
        }
      )}>
      {item.cover ? (
        <>
          <div className="relative w-full h-60 md:h-52 lg:h-40">
            <Image
              src={item.cover}
              alt={`Cover for ${item.name}`}
              layout="fill"
              objectFit="cover"
              className="rounded-t-md"
            />
          </div>
          <div className="w-full border-t border-gray-300 border-solid" />
        </>
      ) : null}
      <div className="flex flex-col justify-between w-full px-4 py-2">
        <div>
          <h1 className="text-lg font-bold text-gray-800">{item.name}</h1>
          <span className="text-gray-600">{item.tagline}</span>
        </div>
        <div className="h-3" />
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center">
            {item.stack.map((name) => (
              <img
                src={`/icons/${name.toLocaleLowerCase()}.svg`}
                key={name}
                className="w-4 h-4 mr-3"
              />
            ))}
          </div>

          <span className="flex flex-row items-center text-sm">
            <img src="/icons/github-star.svg" className="w-3 mr-1" />
            {star ? star : null}
          </span>
        </div>
        <div className="h-1" />
      </div>
    </li>
  )
}
