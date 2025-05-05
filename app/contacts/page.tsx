import Image from "next/image";
import envelope from "../../assets/Contact/Icon/envelope.png";
import tel from "../../assets/Contact/Icon/icon.png";
import facebook from "../../assets/Contact/Icon/facebook.png";
import instagram from "../../assets/Contact/Icon/instagram.png";
import twitter from "../../assets/Contact/Icon/twitter.png";

const Contacts = () => {
  return (
    <div className="bg-[#0c1650] mt-16 h-screen overflow-hidden">
      {/* Header */}
      <div className="relative ml-[200px]  mt-12">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight text-left">
          Contact
        </h1>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mx-[100px] mt-1 p-24">
        {/* Left Section */}
        <div className="space-y-4">
          <div>
            <h2 className="text-white text-[24px] font-bold leading-[120%]">
              Let&apos;s Build Something Great Together
            </h2>
            <p className="text-white text-[18px] font-normal leading-[150%] mt-6 pr-1">
              Whether you&apos;re launching an MVP, scaling an existing product,
              or just exploring options — we’d love to hear what you’re
              building.
            </p>
            <p className="text-white text-[18px] font-normal leading-[150%] pr-1">
              We&apos;re fast, technical, and focused on results — no fluff,
              just great apps.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center space-x-4">
              <Image
                src={envelope}
                alt="Email Icon"
                className="w-[24px] h-[24px]"
              />
              <span className="text-white text-[16px]">hello@gmail.com</span>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <Image src={tel} alt="Phone Icon" className="w-[19px] h-[19px]" />
              <span className="text-white text-[16px]">+380 (93) 000-0000</span>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <Image
                src={facebook}
                alt="Facebook"
                className="w-[24px] h-[24px]"
              />
              <Image
                src={instagram}
                alt="Instagram"
                className="w-[24px] h-[24px]"
              />
              <Image
                src={twitter}
                alt="Twitter"
                className="w-[24px] h-[24px]"
              />
            </div>
          </div>
        </div>

        {/* Right Section: Form */}
        <div>
          <div className="bg-[#374591] p-6 rounded-lg border-none">
            <form>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="bg-[#B8CAE01F] border-none p-3 rounded-md w-full placeholder-gray-500"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="bg-[#B8CAE01F] border-none p-3 rounded-md w-full placeholder-gray-500"
                      placeholder="Phone"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="bg-[#B8CAE01F] border-none p-3 rounded-md w-full placeholder-gray-500"
                    placeholder="Email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="bg-[#B8CAE01F] border-none p-3 rounded-md w-full placeholder-gray-500"
                    placeholder="Your message"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end mt-4">
                  <button
                    type="submit"
                    className="bg-[#4a90e2] text-white py-2 px-6 rounded-md w-1/4"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
