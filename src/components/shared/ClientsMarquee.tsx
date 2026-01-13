"use client";

export default function ClientsMarquee() {
  const logos = [
    "/logos/client1.png",
    "/logos/client2.png",
    "/logos/client3.png",
    "/logos/client4.png",
    "/logos/client5.png",
  ];

  return (
    <div className="overflow-hidden w-full">
      <div className="flex gap-12 animate-marquee">
        {[...logos, ...logos].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="Client Logo"
            className="h-10 object-contain opacity-80"
          />
        ))}
      </div>
    </div>
  );
}
