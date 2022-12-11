import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full p-2">
      <div className="w-full">
        <div className="col-span-2">
          <h2 className="font-bold text-center">About Us</h2>
          <p className="py-2 px-2 text-gray-600">
            <span className="text-[#5651e5] font-bold hover:underline cursor-pointer">
              <Link legacyBehavior href="https://vimeo.com/user83615152">
                Our Vision
              </Link>
            </span>{" "}
            is to employ technological advancements as the support base of our
            skillsets in executing our goals and exceeding client&#39;s
            expectations. Our goal is to create mutually beneficial
            relationships with all our partners; clients, employees, contractors
            and the public. We are committed to conducting business in a client-
            centred manner, ensuring that every clients need is
          </p>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-center mt-4">Why Us?</h2>
        <p className="py-2 px-2 text-gray-600">
          <span>Corporate Statement</span>
          ES Productionz is the choice that makes the difference. We are
          committed to helping our clients reach their goals, through
          personalized experiences using an innovative environment as we aim to
          make a difference and obtain optimal results. Our strong sense of
          ethics and identification with client projects fosters the value and
          promotion of seamless interactions with our clients and partners and
          enables us to provide solutions for known and unknown issues. We have
          adopted a progressive approach to technology, the business environment
          and marketing techniques. Consequently, we continue to maintain a 100%
          client satisfaction rate as we become a more internationally
          recognized organization.
        </p>
          <br />
          <br />
         <span className="px-2">Production Approach</span> <br />
          <br />
          <ul className="px-2 list-disc list-inside">
            <li>
              Analyzing: Understanding client&#39;s needs through Local, Regional
              and International Research and Discovery.
            </li>
            <li>
              Ideation and Concept Development: The Creative Process of
              developing the product. Liaising with key stakeholders to ensure
              factual and appropriate references are presented.
            </li>
            <li>
              Executing: Using state of the art technology and advance skillsets
              for prompt production with internationally accepted standards.
            </li>
            <li>
              Delivering: The provision of products which exceed your
              expectations. Scope of Work
            </li>
          </ul>
          <br />
          <br />
         <p className="px-2">The common engagements of ES Productionz include the production of
          television commercials, documentaries, short films, music videos,
          public service announcements, video news releases, graphic cards and
          virtual program sets, website development and media relations.</p>
          <br />
          <br />
          <br />
          <p className="px-2 font-bold">Contact us:</p> <br /><span className="px-2 font-bold">Address:</span> Summersdale, Castries <br /><span className="px-2 font-bold">Talk to us</span> 712-9678, 727-1273
      </div>
    </div>
  );
};

export default About;
