import { Header } from './components/Header';
import { Post , PostType} from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';



const posts: PostType[]= [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/WagnerSousaLima.png',
      name: 'Wagner Lima',
      role: 'Web Developer @Compass.uol'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite da Rocketseat um Feed interativo 🚀' },
      { type: 'link', content: 'github.com/WagnerSousaLima' },
    ],
    publishedAt: new Date('2023-05-08 21:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/rocketseat-education.png',
      name: 'Rocketseat',
      role: '@Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala Dev 👋' },
      { type: 'paragraph', content: 'A trilha Ignite de ReactJs com certeza vai te levar pro next level🚀' },
      { type: 'link', content: 'rocketseat.com.br' },
    ],
    publishedAt: new Date('2023-05-08 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            
              <Post
                key={post.id}
                post={post}
                />
              
            )
          })}
        </main>
      </div>
    </div>
  )
}