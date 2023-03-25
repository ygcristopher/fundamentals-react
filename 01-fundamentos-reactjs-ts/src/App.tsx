import { Header } from './components/Header';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';

// author: {avatar_url: '', name:'', role:''}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/ygcristopher.png',
      name: 'Yago Cristopher',
      role: 'Web Developer FullStack'
    },
    content: [
      {type: 'paragraph', content: 'Fala Galera ! 👍' },
      {type: 'paragraph', content: 'Projeto Ignite Feed 🚀'},
      {type: 'link', content: 'jane.design/doctorcare' },
  ],
  publishedAt: new Date('2023-01-25 10:45:00'),
 },
 {
  id: 2,
  author:{
    avatarUrl: 'https://github.com/diego3g.png',
    name: 'Diego 3G',
    role: 'Educator @ Rocketseat',
  },
  content: [
    {type: 'paragraph', content: 'Fala Galera ! 👍' },
    {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    {type: 'link', content: 'jane.design/doctorcare' },
],
publishedAt: new Date('2023-01-20 10:45:00'),
},
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map (post => {
            return (
              <Post 
               key={post.id}
               author={post.author}
               content={post.content}
               publishedAt={post.publishedAt}
            />
          )
          })}
        </main>
      </div>
 
    </div>
  )
}

export default App


