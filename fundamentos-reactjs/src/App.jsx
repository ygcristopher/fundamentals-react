import { Header } from './components/Header';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post 
        author="Yago Cristopher" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod modi iusto, autem explicabo provident alias voluptatem maxime. Incidunt consequatur exercitationem voluptate consectetur eum fuga ratione necessitatibus vero officia dicta. Dolorem."
       />

       <Post 
        author="Maria Eduarda" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod modi iusto, autem explicabo provident alias voluptatem maxime. Incidunt consequatur exercitationem voluptate consectetur eum fuga ratione necessitatibus vero officia dicta. Dolorem."
       />
        </main>
      </div>
 
    </div>
  )
}

export default App


