import React from "react";
import Link from "next/link";
 export default function Navbar() {
  return (
    <nav>
      <div>
        <Link href="/" legacyBehavior>
          <a>Coder wikipedia</a>
        </Link>
      </div>
      
      <div>
      <Link href="/about" legacyBehavior>
        <a>About</a>
      </Link>
      <Link href="/coders" legacyBehavior >
        <a>All coders</a>
      </Link>
      <Link href="/jk" legacyBehavior>
      <a>About Us</a>
    </Link>
      </div>
    </nav>
  );
}

