import { useRef } from "react";
import {
  useGsapShutterUnveil,
  useGsapPhotoScroller,
  useGsapPhotoLevitate,
} from "../components/hooks/gsap";
import Featured from "./Featured";

const Hero = () => {
  const heroRef = useRef(null);
  const shutter1 = useRef(null);
  const shutter2 = useRef(null);
  const photo1Ref = useRef(null);
  const photo2Ref = useRef(null);
  const photo3Ref = useRef(null);
  const photo4Ref = useRef(null);
  const photo5Ref = useRef(null);

  const photosArr = [photo1Ref, photo2Ref, photo3Ref, photo4Ref, photo5Ref];

  useGsapShutterUnveil(shutter1, 0, heroRef);
  useGsapShutterUnveil(shutter2, 0.3, heroRef);
  useGsapPhotoScroller(photosArr);
  useGsapPhotoLevitate(photosArr, heroRef);

  return (
    <>

    <section className="hero wrapper" ref={heroRef}>
      <h1 className="ethereal">
        Ethereal <span ref={shutter1}></span>
      </h1>
      <h1 className="canvas">
        Canvas <span ref={shutter2}></span>
      </h1>
      <div className="photos">
        <div
          ref={photo1Ref}
          className="photo one"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&w=600")',
          }}
        ></div>
        <div
          ref={photo2Ref}
          className="photo two"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=600")',
          }}
        ></div>
        <div
          ref={photo3Ref}
          className="photo three"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/3098683/pexels-photo-3098683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        ></div>
        <div
          ref={photo4Ref}
          className="photo four"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/7584538/pexels-photo-7584538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        ></div>
        <div
          ref={photo5Ref}
          className="photo five"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/4836368/pexels-photo-4836368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        ></div>
      </div>

    </section>
          </>
  );
};

export default Hero;
