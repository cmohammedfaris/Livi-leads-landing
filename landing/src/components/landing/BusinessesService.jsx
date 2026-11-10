import React from "react";

const BusinessesService = () => {
  const row1 = [
    {
      title: "Commercial & Trading Firms",
      sub: "Tax Invoices, Cheque & Cash receipts with auto balance settlement",
      outerColor: "bg-[#ECF0FB]",
      innerColor: "bg-[#5B04C5]",
    },
    {
      title: "Field Services & Contractors",
      sub: "Onsite work logging, GPS location coordination & task workflows",
      outerColor: "bg-[#E1F1F9]",
      innerColor: "bg-[#0284C7]",
    },
    {
      title: "Consultancies & Agencies",
      sub: "Interactive Digital vCards, QR generation & verified client reviews",
      outerColor: "bg-[#FBF6EF]",
      innerColor: "bg-[#EA580C]",
    },
  ];

  const row2 = [
    {
      title: "Retail & Service Counters",
      sub: "Direct counter collections, employee tracking & expense manager",
      outerColor: "bg-[#FAEEE2]",
      innerColor: "bg-[#D97706]",
    },
    {
      title: "SMEs & Fast-Growing Enterprises",
      sub: "Role permissions matrix, multi-currency & 100% offline-first PWA",
      outerColor: "bg-[#E5FCF2]",
      innerColor: "bg-[#059669]",
    },
  ];

  return (
    <section className="relative flex w-full flex-col items-center justify-center bg-transparent px-4 sm:px-6 py-8 md:px-8 isolate">
      {/* Container */}
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 lg:gap-16">
        {/* Headline */}
        <h2 className="text-center font-['Inter'] text-3xl sm:text-4xl font-bold leading-tight text-[#0A0B10] md:text-5xl">
          Built for Service Businesses
        </h2>

        {/* Security Widget Stack (Main Card) */}
        <div className="relative w-full xl:max-w-[1344px] max-w-6xl">
          {/* Main Glassmorphism Card */}
          <div className="flex w-full flex-col gap-8 rounded-3xl bg-white sm:bg-[url('/BusinessesService_bg.jpg')] bg-cover bg-center p-6 sm:p-8 shadow-[0px_7px_21px_-1.25px_rgba(28,70,255,0.03)] ring-[3px] sm:ring-[5px] ring-[#F8F8FA] backdrop-blur-sm lg:p-12">
            {/* --- TOP ROW (3 Items) --- */}
            <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-start justify-center lg:justify-between gap-8 lg:gap-0">
              {row1.map((item, index) => (
                <React.Fragment key={`row1-${index}`}>
                  {/* Item Content */}
                  <div className="flex flex-1 min-w-[250px] w-full flex-col items-start gap-3 sm:gap-4 px-2 lg:px-6">
                    <div className="relative flex h-7 w-7 items-center justify-center">
                      <div
                        className={`h-[12px] w-[12px] rounded-full ${item.outerColor} animate-pulse`}
                      />
                      <div
                        className={`absolute h-[10px] w-[10px] rounded-full ${item.innerColor}`}
                      />
                    </div>
                    <div className="flex flex-col gap-1 sm:gap-2">
                      <h4 className="font-['Inter'] text-lg sm:text-xl font-semibold text-[#0A0B10]">
                        {item.title}
                      </h4>
                      <p className="max-w-full sm:max-w-[280px] font-['Inter'] text-sm sm:text-base text-[#7A7A7A]">
                        {item.sub}
                      </p>
                    </div>
                  </div>

                  {/* Vertical Divider (Hidden on mobile/tablet) */}
                  {index !== row1.length - 1 && (
                    <div className="hidden h-32 w-[1px] bg-gradient-to-b from-[#F5F5F5] via-[#CBCBCB] to-[#F5F5F5] lg:block" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* --- BOTTOM ROW (2 Items, Centered) --- */}
            <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-start justify-center gap-8 lg:gap-16 pt-0 lg:pt-8">
              {row2.map((item, index) => (
                <React.Fragment key={`row2-${index}`}>
                  {/* Item Content */}
                  <div className="flex flex-1 min-w-[250px] w-full max-w-full lg:max-w-sm flex-col items-start gap-3 sm:gap-4 px-2 lg:px-6">
                    <div className="relative flex h-7 w-7 items-center justify-center">
                      <div
                        className={`h-[12px] w-[12px] rounded-full ${item.outerColor} animate-pulse`}
                      />
                      <div
                        className={`absolute h-[10px] w-[10px] rounded-full ${item.innerColor}`}
                      />
                    </div>
                    <div className="flex flex-col gap-1 sm:gap-2">
                      <h4
                        className={`text-lg sm:text-xl leading-6 tracking-tight ${item.specialFont || "font-['Inter'] font-semibold text-[#0A0B10]"}`}
                      >
                        {item.title}
                      </h4>
                      <p className="max-w-full sm:max-w-[280px] font-['Inter'] text-sm sm:text-base text-[#7A7A7A]">
                        {item.sub}
                      </p>
                    </div>
                  </div>

                  {/* Vertical Divider (Hidden on mobile/tablet) */}
                  {index !== row2.length - 1 && (
                    <div className="hidden h-32 w-[1px] bg-gradient-to-b from-[#F5F5F5] via-[#CBCBCB] to-[#F5F5F5] lg:block" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessesService;
