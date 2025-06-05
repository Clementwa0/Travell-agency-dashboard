import { Link, useLocation } from "react-router"
import { cn, getFirstWord } from "~/lib/utils";
import pkg from '@syncfusion/ej2-react-buttons';
const {ChipDirective, ChipListComponent, ChipsDirective} = pkg;

const Tripcard = ({id, name, location, imageUrl, tags, price}: TripCardProps) => {
  const path = useLocation();

  return (
    <Link 
      to={path.pathname === '/' || path.pathname.startsWith('/travel') ? `/travel/${id}` : `/trips/${id}`} 
      className="trip-card bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
    >
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={name}  
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-semibold text-gray-900">
            {price}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">{name}</h2>
        
        <div className="flex items-center gap-2 mb-4">
          <img 
            src="/assets/icons/location-mark.svg"
            alt="location" 
            className="size-4"
          />
          <span className="text-gray-600">{location}</span>
        </div>

        <ChipListComponent id="travel-chip">
          <ChipsDirective>
            {tags?.map((tag, index) => (
              <ChipDirective
                key={index}
                text={getFirstWord(tag)}
                cssClass={cn(
                  'text-sm py-1 px-3 rounded-full',
                  index === 1
                    ? '!bg-pink-50 !text-pink-500'
                    : '!bg-success-50 !text-success-700'
                )}
              />
            ))}
          </ChipsDirective>
        </ChipListComponent> 
      </div>
    </Link>
  )
}

export default Tripcard