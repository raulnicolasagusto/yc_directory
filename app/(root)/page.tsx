import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";


export default async function Home({ searchParams }: {
  searchParams: Promise<{query? : string}>;
  }) {

  const query = (await searchParams).query

  const post = [{

    _createdAt: new Date(),
    views: 55,
    author: {
      _id: 1,
      name: 'Raul',
     },
    _id: 1,
    description: 'this is a description',
    image:'https://cdn.pixabay.com/photo/2024/03/11/19/15/ai-generated-8627457_640.png',
    category: 'Robots',
    title: 'We Robots',

  }];



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
          { post?.length > 0 ? (
            post.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-result">No Startups found</p>
          )}
        </ul>

      </section>
    </>
  );
}
