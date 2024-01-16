import * as React from "react";
import Layout from "../components/layout";
import "aos/dist/aos.css";
import { Link } from "gatsby";

const AboutPage = () => {
  return (
    <Layout>
      <div className="flex justify-center mb-56">
        <div className="text-white text-5xl font-primaryFont sm:text">
          Welcome to my world!
        </div>
      </div>
      <div className="flex flex-col gap-48">
        <div
          data-aos="fade-right"
          data-aos-offset="500"
          className="flex flex-col gap-3"
        >
          <h2 className="text-white text-2xl font-primaryFont">
            Meet Christoffer: Your Digital Artisan
          </h2>
          <p className="text-textPrimary font-primaryFont">
            Hi there! I'm Christoffer, a 27-year-old front-end developer from
            the picturesque town of Alingsås, Sweden. Specializing in turning
            basic concepts into dynamic, responsive websites, I pride myself on
            creating online experiences that are modern, user-friendly, and
            aesthetically pleasing.
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="500"
          className="flex flex-col gap-3"
        >
          <h2 className="text-white text-xl font-primaryFont">
            Crafting Digital Masterpieces
          </h2>
          <p className="text-textPrimary font-primaryFont">
            My expertise lies in the art of creating digital experiences that
            are not only visually stunning but also highly functional. Each
            project I undertake is a new adventure, a challenge to push the
            boundaries of design and technology. From sleek corporate sites to
            quirky personal blogs, my portfolio is a testament to my versatility
            and commitment to excellence.
          </p>
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="500"
          className="flex flex-col gap-3"
        >
          <h2 className="text-white text-xl font-primaryFont">
            A Blend of Creativity and Technical Precision
          </h2>
          <p className="text-textPrimary font-primaryFont">
            What sets me apart? It's my unique blend of creative vision and
            technical prowess. I'm not just about coding; I'm about creating
            stories, evoking emotions, and building connections through each
            line of code. Whether it's a subtle animation or a complex
            responsive layout, my goal is always the same: to create websites
            that resonate with users and stand the test of time.
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="500"
          className="flex flex-col gap-3"
        >
          <h2 className="text-white text-xl font-primaryFont">
            Always Learning, Always Growing
          </h2>
          <p className="text-textPrimary font-primaryFont">
            The tech world is ever-evolving, and so am I. I'm perpetually on a
            quest to stay ahead of the curve, continually updating my skill set
            with the latest technologies and frameworks. This relentless pursuit
            of knowledge ensures that I deliver not just what my clients want,
            but what they need before they even know they need it.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-white text-xl font-primaryFont">
            Let's Connect and Create!
          </h2>
          <p className="text-textPrimary font-primaryFont">
            Your online presence is more than just a website; it's your digital
            footprint, your brand's identity. If you're looking for someone who
            can bring your vision to life with precision, creativity, and a
            touch of Swedish flair, look no further. Let's connect and embark on
            this digital journey together!
          </p>
          <Link
            className="text-secondaryBtnColor outline hover:bg-secondaryBtnColor text-center hover:text-bgColor p-2 max-w-40 font-primaryFont"
            to="/contact"
          >
            Contact me
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
