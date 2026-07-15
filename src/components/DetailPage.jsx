import PageHero from "./PageHero";
import CTABanner from "./CTABanner";

// Shared template behind the 13 near-identical service/industry/solution pages.
export default function DetailPage({ data }) {
  return (
    <>
      <PageHero
        title={data.title}
        trail={[data.category, data.heading]}
        eyebrow={data.category}
        heading={data.heading}
        lede={data.lede}
      />
      <section className="section" id="learn-more">
        <div className="container">
          <div className="grid-4">
            {data.features.map((feature) => (
              <div className="card" key={feature.title}>
                <div className="icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner heading={data.ctaHeading} body={data.ctaBody} />
    </>
  );
}
