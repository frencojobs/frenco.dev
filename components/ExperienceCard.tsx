import Image from 'next/image'

type Props = {
  item: Experience
}

export const ExperienceCard: React.FC<Props> = ({ item }) => {
  return (
    <li className="transition transform border-2 border-gray-300 border-solid rounded-md dark:border-gray-500 hover:-translate-y-1 hover:shadow-md">
      <a href={item.url} rel="noreferrer" target="_blank">
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
            <div className="w-full border-t border-gray-300 border-solid dark:border-gray-500" />
          </>
        ) : null}
        <div className="px-4 py-2">
          <h1 className="text-lg font-bold text-gray-800 dark:text-white">
            {item.name}
          </h1>
          <span className="text-gray-600 dark:text-gray-200">
            {item.position}
          </span>
          <div className="h-3" />
          <span className="text-sm text-gray-600 dark:text-gray-200">
            {item.duration}
          </span>
          <div className="h-1" />
        </div>
      </a>
    </li>
  )
}
