import type { SelectedCardProps } from "../types/allTypes";
export const SelectedCard = ({ selectedSkip }: SelectedCardProps) => {
  if (!selectedSkip) return null; // handle null early

  return (
    <div className="fixed bottom-0 w-full bg-gray-900 text-white z-50 shadow-inner px-4 sm:px-8 py-4 mt-5">
      {/* Disclaimer message */}
      <p className="text-gray-400 mb-3 text-center">
        Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
      </p>

      {/* Skip details + buttons */}
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-20">
          <div className="text-center sm:text-left">
            <p className="text-sm sm:text-base text-gray-300">
              <span>{selectedSkip.size} Yard Skip</span>{" "}
              <span className="font-bold text-2xl text-blue-400 px-5">
                £{selectedSkip.price_before_vat}
              </span>{" "}
              {selectedSkip.hire_period_days} day hire
            </p>
          </div>

          <div className="flex gap-4">
            <button className="bg-gray-700 text-gray-300 py-2 px-6 rounded-lg font-semibold hover:bg-gray-600 transition-colors duration-200">
              Back
            </button>
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Continue →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
