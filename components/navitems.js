import Link from "next/link";
export default function Navitems({ children, href, func }) {
  return (
    <Link href={"/" + href}>
      <a
        onClick={func}
        className="lg:inline-flex w-auto px-3 py-2 rounded text-white font-regular items-center justify-center hover:bg-blue-600 hover:text-white"
      >
        {children}
      </a>
    </Link>
  );
}
