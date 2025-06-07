import { useState, useEffect } from 'react';

import { Truck, Package, CheckCircle, Calendar, CreditCard, MapPin } from 'lucide-react';
import { Header } from './components/Header'
import { SkipSelector } from './components/SkipSelector';
import { SelectedCard } from './components/SelectedCard';
import { fetchSkips } from './services/apiService';
import type { Step, SkipData } from './types/allTypes';




const App = () => {

  const [skipData, setSkipData] = useState<SkipData[]>([]);
  const [selectedSkip, setSelectedSkip] = useState<SkipData | null>(null);

  // handle skip selection
  const handleSelectSkip = (skip: SkipData) => {
    setSelectedSkip(skip);
  };
  // handle skip deselection
  const handleDeselectSkip = () => {
    setSelectedSkip(null);
  };
  // Define the steps for the progress bar
  const steps: Step[] = [
    { name: 'Postcode', icon: MapPin, current: false },
    { name: 'Waste Type', icon: Package, current: false },
    { name: 'Select Skip', icon: Truck, current: true }, // Current step
    { name: 'Permit Check', icon: CheckCircle, current: false },
    { name: 'Choose Date', icon: Calendar, current: false },
    { name: 'Payment', icon: CreditCard, current: false },
  ];

  useEffect(() => {
    const loadSkips = async () => {
      const data = await fetchSkips('NR32', 'Lowestoft');
      setSkipData(data);
    };

    loadSkips();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-inter p-4 sm:p-6 lg:p-8 flex flex-col items-center">
      {/* Header component */}
      <Header steps={steps} />

      {/* Main Area component */}
      <SkipSelector
        skipData={skipData}
        selectedSkip={selectedSkip}
        handleSelectSkip={handleSelectSkip}
        handleDeselectSkip={handleDeselectSkip}
      />

      {/* Selected Card tooltip like component */}
      <SelectedCard selectedSkip={selectedSkip} />
    </div>
  );
}

export default App;