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
     },
    _id: 1,
    description: 'this is a description',
    image:'https://www.google.com/imgres?q=we%20robot%20elon%20musk&imgurl=https%3A%2F%2Fi.insider.com%2F67093b20a703186492812df9%3Fwidth%3D1200%26format%3Djpeg&imgrefurl=https%3A%2F%2Fwww.businessinsider.com%2Felon-musk-tesla-optimus-humanoid-robots-robotaxi-day-2024-10&docid=kWsItU4xtbFjXM&tbnid=h2-8gj6L5A3gaM&vet=12ahUKEwiG8bKn_rSLAxWRkZUCHYnALjgQM3oECH4QAA..i&w=1200&h=900&hcb=2&ved=2ahUKEwiG8bKn_rSLAxWRkZUCHYnALjgQM3oECH4QAA',
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
