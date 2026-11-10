import React from "react";

const HowItWorksSection = () => {
  const features = [
    {
      title: "Sales Invoices & Receipts",
      description: [
        "Create Tax and Proforma Invoices with instant PDF sharing.",
        "Record Cash collections & track Cheque clearing proofs.",
        "Automatic balance settlement across international currencies.",
      ],
      image: "/howitworks/Howitworks_3.png",
      radius: "rounded-[24px] sm:rounded-[32px]",
    },
    {
      title: "HRMS & Team Permissions",
      description: [
        "Manage team directory with smart resume parsing.",
        "Granular CRUD permission matrix per module for security.",
        "Structured salary breakdown and employee onboarding.",
      ],
      image: "/howitworks/Howitworks_2.png",
      radius: "rounded-[20px]",
    },
    {
      title: "Field Tasks & Digital Cards",
      description: [
        "Plan general tasks, meetings, and onsite field operations.",
        "GPS location logging and real-time completion tracking.",
        "Shareable digital vCard profiles with custom branded QR codes.",
      ],
      image: "/howitworks/Howitworks_1.png",
      radius: "rounded-[20px]",
    },
  ];

  return (
    <section className="relative w-full px-4 sm:px-6 py-8 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 sm:gap-12 lg:gap-16">
        {/* Header Text */}
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Badge: The Solution */}
          <div className="flex h-8 w-fit items-center gap-1.5 rounded-full border border-slate-100 bg-white px-3 shadow-sm">
            <div className="h-2 w-2 rounded-full bg-[radial-gradient(88%_75%_at_50%_50%,#1B44FE_0%,#5375FE_100%)]" />
            <span className="font-['Inter'] text-xs sm:text-sm font-semibold text-[#0A0B10]">
              The Solution
            </span>
          </div>

          <h2 className="font-['Inter'] text-3xl sm:text-4xl font-bold leading-tight text-[#0A0B10] md:text-5xl">
            One Simple Platform.
          </h2>

          <p className="max-w-xl font-inter text-sm sm:text-base leading-6 text-[#7A7A7A] md:text-lg">
            Everything in one place. Organized. Searchable. Reliable.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid w-full grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-5 sm:gap-6 bg-white p-5 sm:p-6 shadow-sm ring-1 ring-slate-100 transition-all hover:shadow-md ${item.radius}`}
            >
              {/* Image Container */}
              <div className="aspect-[304/236] w-full overflow-hidden rounded-xl bg-slate-50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Text Container */}
              <div className="flex w-full flex-col gap-2 sm:gap-3">
                <h3 className="font-inter font-semibold text-lg sm:text-xl leading-7 text-[#0A0B10]">
                  {item.title}
                </h3>
                <ul className="ml-5 list-outside list-disc space-y-1.5 font-inter text-sm sm:text-base leading-5 sm:leading-6 text-[#7A7A7A] marker:text-[#7A7A7A]">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
