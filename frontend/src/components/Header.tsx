import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <h1 className="mb-20">Checkpoint : frontend</h1>
      <Link className="mb-20" href="/">
        Countries
      </Link>
    </header>
  );
}
