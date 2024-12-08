export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t py-8 w-[1440px] h-[480px] ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Left Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-blue-600">MORENT</h2>
            <p className="mt-2 text-sm">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>

          {/* About Section */}
          <div className="w-full md:w-1/6 mb-6 md:mb-0">
            <h3 className="font-semibold text-gray-900">About</h3>
            <ul className="mt-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Featured
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Partnership
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Business Relation
                </a>
              </li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="w-full md:w-1/6 mb-6 md:mb-0">
            <h3 className="font-semibold text-gray-900">Community</h3>
            <ul className="mt-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Podcast
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Invite a friend
                </a>
              </li>
            </ul>
          </div>

          {/* Socials Section */}
          <div className="w-full md:w-1/6">
            <h3 className="font-semibold text-gray-900">Socials</h3>
            <ul className="mt-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-4 flex flex-wrap justify-between text-sm text-gray-600">
          <p>©2022 MORENT. All rights reserved</p>
          <div>
            <a href="#" className="hover:underline">
              Privacy & Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Terms & Condition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
