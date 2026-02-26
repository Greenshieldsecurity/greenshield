export default function ServiceImageCopy({ image, imageAlt, heading, paragraphs }) {
  return (
    <section className="service-image-copy-section" aria-labelledby="service-image-copy-heading">
      <div className="service-image-copy-inner">
        <div className="service-image-copy-image-wrap">
          <img src={image} alt={imageAlt} className="service-image-copy-image" />
        </div>
        <div className="service-image-copy-content">
          <h2 id="service-image-copy-heading" className="service-image-copy-heading">
            {heading}
          </h2>
          {paragraphs?.map((p, i) => (
            <p key={i} className="service-image-copy-p">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
