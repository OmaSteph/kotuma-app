import { useState, useMemo, useRef, useEffect } from "react";
import LawyerCard from "@components/booking/LawyerCard";
import { MOCK_LAWYERS } from "../data/mockData";
import { Filter, ChevronDown } from "lucide-react";

export default function Lawyers() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["All Experts"]);
  const [tempFilters, setTempFilters] = useState<string[]>(["All Experts"]);
  const filterRef = useRef<HTMLDivElement>(null);

  // Get unique law types from all lawyers
  const lawTypes = ["All Experts", ...new Set(MOCK_LAWYERS.flatMap(lawyer => lawyer.specialization))];

  // Filter lawyers based on selected law types
  const filteredLawyers = useMemo(() => {
    if (selectedFilters.includes("All Experts") || selectedFilters.length === 0) {
      return MOCK_LAWYERS;
    }
    
    return MOCK_LAWYERS.filter(lawyer => 
      lawyer.specialization.some(spec => selectedFilters.includes(spec))
    );
  }, [selectedFilters]);

  // Handle checkbox changes in the dropdown
  const handleTempFilterChange = (lawType: string) => {
    if (lawType === "All Experts") {
      setTempFilters(["All Experts"]);
    } else {
      const newFilters = tempFilters.filter(f => f !== "All Experts");
      if (tempFilters.includes(lawType)) {
        const updated = newFilters.filter(f => f !== lawType);
        setTempFilters(updated.length === 0 ? ["All Experts"] : updated);
      } else {
        setTempFilters([...newFilters, lawType]);
      }
    }
  };

  // Apply filters and close dropdown
  const applyFilters = () => {
    setSelectedFilters(tempFilters);
    setIsFilterOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
        setTempFilters(selectedFilters); // Reset temp filters if closing without applying
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedFilters]);

  // Initialize temp filters when opening dropdown
  const openFilter = () => {
    setTempFilters(selectedFilters);
    setIsFilterOpen(true);
  };

  return (
    <div className="container lg:px-16 p-4">
      {/* Header with Filter Button */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="font-semibold text-[32px] text-[#292929] mb-3">
            Find Lawyers
          </h2>
          <p className="font-medium text-[#9DA4AE]">
            Connect with qualified legal professionals
          </p>
        </div>
        
        {/* Filter Dropdown */}
        <div className="relative" ref={filterRef}>
          <button
            onClick={openFilter}
            className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-[#03156B] text-[#03156B] rounded-lg hover:bg-[#03156B] hover:text-white transition-colors"
          >
            <Filter size={20} />
            Filter
            <ChevronDown size={16} className={`transform transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {isFilterOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Law Types</h3>
                
                {/* Law Type Checkboxes */}
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {lawTypes.map((lawType) => (
                    <label key={lawType} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input
                        type="checkbox"
                        checked={tempFilters.includes(lawType)}
                        onChange={() => handleTempFilterChange(lawType)}
                        className="w-4 h-4 text-[#03156B] border-gray-300 rounded focus:ring-[#03156B] focus:ring-2"
                      />
                      <span className="text-sm text-gray-700">{lawType}</span>
                    </label>
                  ))}
                </div>

                {/* Apply Button */}
                <div className="mt-4 pt-3 border-t border-gray-200">
                  <button
                    onClick={applyFilters}
                    className="w-full px-4 py-2 bg-[#03156B] text-white rounded-lg hover:bg-[#03156B]/90 transition-colors"
                  >
                    Apply Filter
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Active Filters Display */}
      {selectedFilters.length > 0 && !selectedFilters.includes("All Experts") && (
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="text-sm text-gray-600">Active filters:</span>
          {selectedFilters.map((filter) => (
            <span
              key={filter}
              className="inline-flex items-center px-3 py-1 bg-[#03156B] text-white text-sm rounded-full"
            >
              {filter}
            </span>
          ))}
        </div>
      )}

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredLawyers.length} of {MOCK_LAWYERS.length} lawyers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLawyers.map((lawyer) => (
          <LawyerCard
            key={lawyer.id}
            id={lawyer.id}
            name={lawyer.name}
            profession={lawyer.specialization[0]}
            location={lawyer.location}
            imageUrl={lawyer.avatar}
          />
        ))}
      </div>

      {filteredLawyers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-4">No lawyers found for the selected filters.</p>
          <button
            onClick={() => {
              setSelectedFilters(["All Experts"]);
              setTempFilters(["All Experts"]);
            }}
            className="px-4 py-2 bg-[#03156B] text-white rounded-lg hover:bg-[#03156B]/90"
          >
            Show All Lawyers
          </button>
        </div>
      )}
    </div>
  );
}
