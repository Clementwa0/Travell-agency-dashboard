import { calculateTrendPercentage, cn } from "~/lib/utils"

const StatsCard = ({ 
    headerTitle,
    total,
    currentMonthCount,
    lastMonthCount
}: StatsCard) => {
    const { trend, percentage } = calculateTrendPercentage(currentMonthCount, lastMonthCount);
    const isDecrement = trend === 'decrement';

    return (
        <article className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-gray-600 font-medium mb-4">
                {headerTitle}
            </h3>
            
            <div className="flex justify-between items-start">
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
                        {total}
                    </h2>

                    <div className="flex items-center gap-3">
                        <div className={cn(
                            "flex items-center gap-1 px-2.5 py-1 rounded-full",
                            isDecrement ? 'bg-red-50' : 'bg-green-50'
                        )}>
                            <img 
                                src={`/assets/icons/${isDecrement ? 'arrow-down-red.svg' : 'arrow-up-green.svg'}`}
                                className="w-4 h-4" 
                                alt="trend icon" 
                            />
                            <span className={cn(
                                "text-sm font-semibold",
                                isDecrement ? 'text-red-600' : 'text-green-600'
                            )}>
                                {Math.round(percentage)}%
                            </span>
                        </div>
                        <span className="text-sm text-gray-500">
                            vs last month
                        </span>
                    </div>
                </div>

                <div className="relative w-24 h-24">
                    <img  
                        src={`/assets/icons/${isDecrement ? 'decrement.svg' : 'increment.svg'}`} 
                        className="w-full h-full object-contain opacity-80" 
                        alt="trend"
                    />
                </div>
            </div>
        </article>
    )
}

export default StatsCard