import Image from "next/image";
import Link from "next/link";
import {
  IconBrandLinkedin,
  IconMail,
  IconBrandGithub,
  IconBrandTwitter,
} from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold text-center">Coming soon...</h2>
      <br />
      <h3 className="text-lg text-center">Connect with me on </h3>
      <div className="flex space-x-4 mt-1">
        <Link
          href="https://www.linkedin.com/in/parthsingh-sde/"
          target="_blank"
          className="hover:scale-110"
        >
          <IconBrandLinkedin size={32} />
        </Link>
        <Link
          href="mailto:parth.singh1023@gmail.com"
          target="_blank"
          className="hover:scale-110"
        >
          <IconMail size={32} />
        </Link>
        <Link
          href="https://github.com/PrimeOnPeaSea"
          target="_blank"
          className="hover:scale-110"
        >
          <IconBrandGithub size={32} />
        </Link>
        <Link
          href="https://x.com/PrimeOnPeaSea"
          target="_blank"
          className="hover:scale-110"
        >
          <IconBrandTwitter size={32} />
        </Link>
      </div>
    </div>
  );
}
