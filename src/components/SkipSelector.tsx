
import type { SkipSelectorProps } from "../types/allTypes";
import { SkipCard } from "./SkipCard";
import { HelpCircle, Package, Truck } from 'lucide-react';

export const SkipSelector = ({ skipData, selectedSkip, handleSelectSkip, handleDeselectSkip }: SkipSelectorProps) => {
  return (
    <main className="w-full max-w-7xl flex-grow bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg mb-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-blue-400">Choose Your Skip Size</h1>
      <p className="text-center text-gray-300 mb-8 sm:mb-12">
        Select the skip size that best suits your needs
      </p>
      <div className="bg-gray-700 p-6 rounded-lg mb-10">
        <div className="flex items-center mb-4">
          <HelpCircle className="w-5 h-5 text-blue-400 mr-2" />
          <h3 className="text-xl font-semibold text-white">
            Unsure which skip size you need?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
          <div className="flex items-start">
            <Package className="w-6 h-6 mr-3 flex-shrink-0 text-blue-400" />
            <div>
              <p className="font-semibold">Consider your waste type & volume:</p>
              <ul className="list-disc list-inside text-md ml-2">
                <li>Small clear-out? 4-6 yard skip.</li>
                <li>Medium renovation? 8-10 yard skip.</li>
                <li>Large project or commercial use? 12-14 yard skip.</li>
                <li>Remember heavier waste (soil, rubble) has weight limits!</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start">
            <Truck className="w-6 h-6 mr-3 flex-shrink-0 text-blue-400" />
            <div>
              <p className="font-semibold">Road placement rules:</p>
              <ul className="list-disc list-inside text-md ml-2">
                <li>Larger skips (10+ yards) generally require private land.</li>
                <li>Smaller skips on public roads need a permit (we can help!).</li>
                <li>Check if you have sufficient off-road space.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {skipData
          .sort((a, b) => a.size - b.size)
          .map((skip) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              isSelected={selectedSkip?.id === skip.id}
              onSelect={handleSelectSkip}
              onDeselect={handleDeselectSkip}
            />
          ))}
      </div>
    </main>
  );
};