import Hline from "../../assets/hdesign.png";

const SolidPageHeader = ({ title, subtitle }) => {
  return (
    <>
      <section className="bg-[#0F0F0F] text-center pt-15 pb-20 relative overflow-hidden font-['Bricolage_Grotesque','ui-sans-serif']">
        {/* Adjusted size to [50px] as requested, with font-bold */}
        <h1 className="text-[#FBD302] text-[48px] md:text-[50px] font-bold mb-3 leading-tight">
          {title}
        </h1>

        <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto px-4">
          {subtitle}
        </p>
      </section>

      {/* This container ensures the hdesign.png sits exactly below the black section */}
      <div className="w-full">
        <img
          src={Hline}
          alt="Taxi Design Strip"
          className="w-full h-auto block"
        />
      </div>
    </>
  );
};

export default SolidPageHeader;