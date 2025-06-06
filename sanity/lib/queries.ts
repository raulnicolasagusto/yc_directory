import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(
    `*[_type == "startup" && defined(slug.current) && !defined($search) || title match $search || category match $search || author -> name match $search] | order(_create_At desc){
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

export const STARTUPS_BY_ID_QUERY = defineQuery(
  `*[_type == "startup" && _id == $id][0]{
_id,
title,
slug,
_create_At,
author ->{
  _id, name, username, image, bio
},
views,
description,
category,
image,
pitch  
}` 
);