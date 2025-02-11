import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(
    `*[_type == "startup" && defined(slug.current)] | order(_create_At desc){
  _id,
  title,
  slug,
  _create_At,
  author ->{
    _id, name, image, bio
  },
  views,
  description,
  category,
  image  
}` 
);