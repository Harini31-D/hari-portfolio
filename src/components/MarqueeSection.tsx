import React, { useEffect, useRef, useState } from 'react';

const row1Images = [
  "https://i.pinimg.com/736x/b8/a0/0b/b8a00b2b9e827a7e541d949ad605087b.jpg",
  "https://i.pinimg.com/1200x/a1/55/33/a15533baddb8c7e43b2c61be613fe536.jpg",
  "https://i.pinimg.com/736x/ca/b8/f4/cab8f48669ba283aa084de3bca64542e.jpg",
  "https://i.pinimg.com/736x/ea/0d/85/ea0d857a728002af40b932261b10906b.jpg",
  "https://i.pinimg.com/736x/87/29/c4/8729c4c9ffd91a9bb20c6cd3cb56671e.jpg",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
];

const row2Images = [
  "https://i.pinimg.com/736x/87/29/c4/8729c4c9ffd91a9bb20c6cd3cb56671e.jpg",
  "https://i.pinimg.com/736x/35/0b/4d/350b4d606235ee8e2e9545a0304b50ea.jpg",
  "https://i.pinimg.com/1200x/11/e4/f3/11e4f3f74c9c4a9c67309c9b2f246340.jpg",
  "https://i.pinimg.com/736x/71/e6/97/71e69761f7dad29da5f6c6d24076dde8.jpg",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

const tripledRow1 = [...row1Images, ...row1Images, ...row1Images];
const tripledRow2 = [...row2Images, ...row2Images, ...row2Images];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setScrollOffset(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const row1X = scrollOffset - 200;
  const row2X = -(scrollOffset - 200);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1: Moves RIGHT */}
        <div
          className="flex gap-3 whitespace-nowrap"
          style={{
            transform: `translate3d(${row1X}px, 0px, 0px)`,
            willChange: 'transform'
          }}
        >
          {tripledRow1.map((src, i) => (
            <div
              key={`row1-${i}`}
              className="w-[420px] h-[270px] flex-shrink-0 rounded-2xl overflow-hidden bg-white/5 border border-white/10"
            >
              <img
                src={src}
                alt={`3D Design Preview ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Row 2: Moves LEFT */}
        <div
          className="flex gap-3 whitespace-nowrap"
          style={{
            transform: `translate3d(${row2X}px, 0px, 0px)`,
            willChange: 'transform'
          }}
        >
          {tripledRow2.map((src, i) => (
            <div
              key={`row2-${i}`}
              className="w-[420px] h-[270px] flex-shrink-0 rounded-2xl overflow-hidden bg-white/5 border border-white/10"
            >
              <img
                src={src}
                alt={`3D Motion Showcase ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
