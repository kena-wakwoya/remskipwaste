
import type { SkipCardProps } from "../types/allTypes";
import { ImageRenderer } from "./ImageRenderer";
import { HelpCircle, XCircle } from 'lucide-react';
import { useRef } from 'react';

export const SkipCard = ({ skip, isSelected, onSelect, onDeselect }: SkipCardProps) => {
  const clickTimeoutRef = useRef<number | null>(null);

  const getSizeDescription = (size: number) => {
    switch (size) {
      case 4: return "Fits approx. 40-50 bin bags or 2-3 washing machines.";
      case 6: return "Fits approx. 60-70 bin bags or 3-4 washing machines.";
      case 8: return "Fits approx. 70-80 bin bags or 4-5 washing machines. Good for large clear-outs.";
      case 10: return "Fits approx. 90-100 bin bags. Ideal for significant renovations. No heavy waste.";
      case 12: return "Fits approx. 100-120 bin bags. For very large projects. No heavy waste.";
      case 14: return "Our largest skip, for major commercial or construction jobs. No heavy waste.";
      default: return "A versatile skip for various waste types.";
    }
  };

  const handleSingleClick = () => {
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
      clickTimeoutRef.current = null;
    }

    clickTimeoutRef.current = window.setTimeout(() => {
      if (!isSelected && skip.allowed_on_road) {
        onSelect(skip); // Select
      } else if (isSelected) {
        onDeselect(); // Deselect
      }
      clickTimeoutRef.current = null;
    }, 200); // Short delay for UI smoothness, optional
  };
  return (
    <div
      onClick={handleSingleClick}
      className={`
                group relative bg-gray-700 rounded-xl p-5 shadow-md transition-all duration-300 ease-in-out flex flex-col justify-between cursor-pointer
                ${isSelected ? 'border-4 border-blue-500 ring-2 ring-blue-400 scale-[1.02]' : 'border border-gray-600 hover:border-blue-700 hover:shadow-xl'}
                ${!skip.allowed_on_road ? 'opacity-70' : ''}
            `}
    >
      <div className="flex justify-between items-start mb-4 pointer-events-none">
        <ImageRenderer imagesize={skip.size} amount={skip.price_before_vat} alt={`${skip.size} Yard Skip`} />
      </div>
      <div className="flex justify-between items-center mb-2 pointer-events-none">
        <h2 className="text-xl font-bold text-blue-300">{skip.size} Yards</h2>
        <span className="text-white text-sm bg-blue-600 rounded-full shadow-md z-10 px-3 py-1">{skip.hire_period_days} day hire period</span>
      </div>

      <div className="flex items-start justify-start gap-3 mb-4">
        <HelpCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
        <p className="text-gray-300 text-sm min-h-[40px] pointer-events-none">
          {getSizeDescription(skip.size)}
        </p>
      </div>
      {!skip.allowed_on_road && (
        <div className="bg-red-900/40 border border-red-700 text-orange-300 text-sm p-3 rounded-lg flex items-start mb-4 pointer-events-none"> {/* Added pointer-events-none */}
          <XCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold block mb-1">Not Allowed on Road</span>
            <span>This skip size requires private land for placement.</span>
          </div>
        </div>
      )}
      <button
        className={`w-full py-3 px-6 rounded-lg text-lg font-semibold transition-all duration-200 ease-in-out mt-auto
                    ${isSelected
            ? 'bg-blue-700 text-white cursor-default opacity-90'
            : 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75'
          }
                    ${!skip.allowed_on_road && !isSelected ? 'cursor-not-allowed bg-gray-500 hover:bg-gray-500' : ''}
                `}
        disabled={!skip.allowed_on_road}
      >
        {isSelected ? 'Selected' : 'Click to Select'}
      </button>
    </div>
  );
};