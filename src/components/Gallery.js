import SectionTitle from "./SectionTitle";
import GalleryItem from "./GalleryItem";

const images = [
  {
    id: 1,
    src: "https://img.freepik.com/free-photo/laptop-with-internet-browser-search-bar-screen_169016-39361.jpg?semt=ais_hybrid",
    title: "Collab for Impact & Success",
    category: "Explore our Services",
  },
  {
    id: 2,
    src: "https://img.freepik.com/free-photo/executive-manager-woman-explaining-management-statistics-working-company-strategy_482257-4602.jpg?semt=ais_hybrid",
    title: "visionaries - great founders",
    category: "Business Model",
  },
  {
    id: 3,
    src: "https://img.freepik.com/premium-photo/cheerful-young-man-office-looking-sheet-paper-smiling_376548-3746.jpg?semt=ais_hybrid",
    title: "be a Enterpreneur at Persist",
    category: "CCI UNIVERSITY",
  },
  {
    id: 4,
    src: "https://img.freepik.com/free-photo/young-people-working-together-startup-company_23-2149116523.jpg?semt=ais_hybrid",
    title: "Work with Persist ventures",
    category: "JOIN OUR TEAM",
  },
];

const Gallery = () => {
  return (
    <section className="gallery">
      <SectionTitle title="Gallery" needMargin={true} />
      <div className="gallery-wrapper">
        {images.map((image) => (
          <GalleryItem key={image.id} {...image} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
