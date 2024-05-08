/* eslint-disable @typescript-eslint/consistent-type-definitions */
export type Certification = {
  category: string
  date: string
  id: string
  image: string
  name: string
}

export type Profile = {
  avatar: string
  description: string
  id: string
  name: string
  techs: string
}

export type Project = {
  created: string
  deploy: string
  description: string
  id: string
  image: string
  slug: string
  techs: string
  title: string
}
