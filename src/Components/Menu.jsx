export default function NavLinks({ links }) {
  return (
    <>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-[#334155] transition-colors hover:text-[#4338CA]"
        >
          {link.label}
        </a>
      ))}
    </>
  );
}