import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import StartupCard , { StartupTypeCard } from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { SanityLive } from "@/sanity/lib/live";


export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>;
  }) {

  const query = (await searchParams).query
  const params = { search: query || null }
  // const post = [{

  //   _createdAt: new Date(),
  //   views: 55,
  //   author: {
  //     _id: 1,
  //    },
  //   _id: 1,
  //   description: 'this is a description',
  //   image:'',
  //   category: 'Robots',
  //   title: 'We Robots',

  // }];

  //fetch real en base de datos

  // const posts = await client.fetch(STARTUPS_QUERY);
  const {data: posts } = await sanityFetch({query: STARTUPS_QUERY, params});
  

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch your Startup <br /> Connect With Enterprises</h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>

        <SearchForm query={query} />

      </section>

      <section className="section_container">
        <p className="text-30-semibold">
         { query ? `Search Results for ${query}` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          { posts?.length > 0 ? (
            posts.map((post: StartupTypeCard, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-result">No Startups found</p>
          )}
        </ul>

      </section>

      <SanityLive />
    </>
  );
}
