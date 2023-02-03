import Image from "next/image";
import { get } from "@vercel/edge-config"; 
import LinkCard from "./components/LinkCard";
import { TwitterIcon, GitHubIcon } from "../icons";

export const dynamic = 'force-dynamic',
              runtime = 'edge';
              
interface Data {
  name: string;
  avatar: string;
  links: Link[];
  socials: Social[];
}

interface Link {
  href: string;
  title: string;
  image?: string;
}

interface Social {
  href: string;
  title: string;
}

export default async function Home() {
  const data: Data | undefined = await get('linktree');

  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-16 px-8">
      <Image
        src={data.avatar}
        alt={data.name}
        width={116}
        height={116}
        className="rounded-full grayscale"
      />
      <h1 className="text-xl font-bold mt-4 mb-8">{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
      <div className="flex items-center gap-4 mt-8 ">
        {data.socials.map((social) => (
          <a
            aria-label={`${social.title} link`}
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.href.includes('twitter') ? (
              <TwitterIcon />
            ) : social.href.includes('github') ? (
              <GitHubIcon />
            ) : null}
          </a>
        ))}
      </div>
    </div>
  )
}




