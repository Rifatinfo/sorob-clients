
const Pagination = () => {
    return (
        <div>
            <div className="flex justify-center space-x-1  mt-6 mb-6">
                {/* Previous Button */}
                <button title="Previous" type="button"
                    className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md border-[#C73450] text-[#C73450] hover:bg-[#C73450] hover:text-white transition-all">
                    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>

                {/* Page Numbers */}
                <button type="button" title="Page 1"
                    className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md bg-[#C73450] text-white border-[#C73450]">
                    1
                </button>
                <button type="button" title="Page 2"
                    className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md text-[#C73450] border-[#C73450] hover:bg-[#C73450] hover:text-white transition-all">
                    2
                </button>
                <button type="button" title="Page 3"
                    className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md text-[#C73450] border-[#C73450] hover:bg-[#C73450] hover:text-white transition-all">
                    3
                </button>
                <button type="button" title="Page 4"
                    className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md text-[#C73450] border-[#C73450] hover:bg-[#C73450] hover:text-white transition-all">
                    4
                </button>

                {/* Next Button */}
                <button title="Next" type="button"
                    className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md border-[#C73450] text-[#C73450] hover:bg-[#C73450] hover:text-white transition-all">
                    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>

        </div>
    );
};

export default Pagination;