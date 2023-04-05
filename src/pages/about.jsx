import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/avatar.jpg'
import { config } from "../../config";

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-yellow-500 dark:text-zinc-200 dark:hover:text-yellow-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-yellow-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - TechMids</title>
        <meta
          name="description"
          content="TechMids - your local community"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              We are TechMids
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-300">
              <p>
                TechMids is based around building a community of tech enthusiasts in Birmingham. We are a group of people who are passionate about technology and want to share that passion with others. We are a group of people who are passionate about technology and want to share that passion with others.
              </p>
              <p>
                We started out as just a few meetups grouping together to help eachother solve the logistics problems of running meetups for tens to hundreds of people. We have since grown to include your favourite meetups - stronger together!
              </p>
              <p>
                Our launch event, TechMids Conference 2022 was the first of its kind in Birmingham. We had over 350 attendees and world-class speakers from across the UK. We are now looking to build on this success and continue to grow the community.

              </p>
              <p>
                You can read about our lauch event from our friend Jack Capel at YouEqualTech meetup <a className="text-yellow-500" href="/blog/tech-mids-conference"> here </a>
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href={config.twitterUser} icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href={config.githubUser} icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href={config.linkedinUser} icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                  href="mailto:hello@techmids.io"
                  icon={MailIcon}
                  className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                hello@techmids.io
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
