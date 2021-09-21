import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Footer from '../components/Footer'

const Title = styled.h1`
  font-size: 50px;
`

const Subtitle = styled.h2`
  background-color: var(--primary);
  color: white;
  display: inline-block;
  padding: 5px;
`;

export default function Home(props) {
  return (
    <div>
      <header className="headerContainer">
        <img src={props.avatar_url}/>
        <Link href="/sobre">
          <a>
          <Title>MyFirst Blog</Title>
          </a>
        </Link>
      </header>
      <section className="postsContainer">
        <Subtitle>Posts</Subtitle>

        <article className="postsContainer__post">
          <a href="/">
            Título do Post
          </a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </article>

        <article className="postsContainer__post">
          <a href="/">
            Título do Post
          </a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </article>

        <article className="postsContainer__post">
          <a href="/">
            Título do Post
          </a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </article>
      </section>

      <section className="postsContainer">
        <Subtitle>Repos</Subtitle>
        {
          props.repos.map(repo => (
            <article key={repo.repo} className="postsContainer__post">
              <a href={repo.link}>
                {repo.repo}
              </a>
              <p>
                {repo.description}
              </p>
            </article>
            )
          )
        }

      </section>
      <Footer></Footer>
    </div>
  )
}

export async function getStaticProps() {
  const githubResponse =  await fetch('https://api.github.com/users/marcos-bah')
  .then(res => res.json())

  const reposResponse = await fetch('https://gh-pinned-repos.now.sh/?username=marcos-bah')
  .then(res => res.json())


  return {
    props: {
      avatar_url: githubResponse.avatar_url,
      repos: reposResponse,
    },
  }
}

