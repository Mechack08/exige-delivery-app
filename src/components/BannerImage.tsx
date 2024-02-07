export default function BannerImage({
  img,
  alt,
}: {
  img: string;
  alt: string;
}) {
  return (
    <div className="img-container">
      <img src={img} alt={alt} />
    </div>
  );
}
