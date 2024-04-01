const socials = [
  {
    handle: "pythonid",
    logo: "/instagram.svg",
    href: "https://www.instagram.com/pythonid/",
  },
  {
    handle: "id_python",
    logo: "/twitter.svg",
    href: "https://twitter.com/id_python",
  },
  {
    handle: "pycon@python.or.id",
    logo: "/mail.svg",
    href: "mailto:pycon@python.or.id",
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary px-4 py-6 lg:p-16">
      <div className=" rounded-3xl bg-white p-8 lg:p-12">
        <div className="mt-8 space-y-8">
          <div className="flex items-center justify-center lg:justify-start">
            <img src="/pythonid.svg" alt="logo_pycon" />
          </div>
        </div>

        <div className="mx-auto  text-center text-xs md:text-base">
          <div
            className="mb-5 mt-7 h-px bg-primary-black/30 lg:mb-7"
            role="separator"
          />
          <div>
            <div className="flex flex-col items-center justify-center space-y-3 lg:grid lg:grid-cols-3 lg:flex-row lg:space-y-0">
              <div className="order-1 text-left lg:w-4/5 lg:text-sm">
                <p>
                  PyCon APAC 2024 is organized by volunteers, so it may take a
                  week for us to reply to inquiries.
                </p>
                <p>Thank you for your patience.</p>
              </div>

              <ul className="order-2 flex flex-row md:flex-row md:gap-7 lg:order-last lg:justify-end lg:gap-4">
                {socials.map((social) => (
                  <li
                    key={social.href}
                    className="md:text-md text-base hover:underline "
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center py-2"
                    >
                      <img
                        src={social.logo}
                        alt={`${social.handle} logo`}
                        className="mr-3 h-5 w-5 md:h-6 md:w-6"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
