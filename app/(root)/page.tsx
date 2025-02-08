import Image from "next/image";
import SearchForm from "@/app/components/SearchForm";


export default function Home() {
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch your Startup <br /> Connect With Enterprises</h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>

        <SearchForm />

      </section>
    </>
  );
}
