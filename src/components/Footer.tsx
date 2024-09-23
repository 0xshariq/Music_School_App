import { LinkPreview } from "./ui/link-preview";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">About Us</h2>
          <p className="mb-4">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/courses"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
          <LinkPreview url="https://github.com/0xshariq" className="font-bold">
            Github
          </LinkPreview>
          <LinkPreview url="https://x.com/Sharique_Ch" className="font-bold">
            X
          </LinkPreview>
            <LinkPreview url="https://instagram.com/sharique1303" className="font-bold">
            Instagram
          </LinkPreview>
          </div>
        </div>
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">Contact Us</h2>
          <p>Mumbai, India</p>
          <p>Mumbai 400001</p>
          <p>Email: info@musicschool.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <div>
        <p className="text-center text-3xl pt-8 text-purple-600">
          Created By &nbsp;
          <LinkPreview url="https://github.com/0xshariq" className="font-bold text-purple-600">
             Sharique
          </LinkPreview>
        </p>
      </div>
      <div>
        <p className="text-center text-sm pt-8">
          © 2024 Music School. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
