import SectionTitle from "./SectionTitle";

const About = ({ minHeight }) => {
  return (
    <section
      className="about wrapper"
      style={minHeight ? { minHeight: "100vh" } : null}
    >
      <SectionTitle title="About" />
      <p>
        Explore the lost treasures and shining stars of the 1990s! Find your
        favorite cartoons, TV shows, music albums, & more with easy filtering
        functionality. With Immemorial, stay up-to-date with all your 90s
        favorites while turning back time.
      </p>
    </section>
  );
};

export default About;
