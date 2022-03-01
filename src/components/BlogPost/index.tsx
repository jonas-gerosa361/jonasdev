import { GetStaticProps } from "next"

export default function BlogPost() {
  return (
    <h3>Teste</h3>
  )
}

export const getStaticProps: GetStaticProps = async() => {
// https://dev.to/api/articles/148356
  const endpoint = process.env.blog_endpoint;

  return {
    props: {
      post: {
        id: 1201
      }
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}
