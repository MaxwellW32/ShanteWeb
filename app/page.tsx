import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <Image className={styles.dress} alt="dress" fill={true} src="/../public/dress.png"/>
      <h1>Congrats Shante!</h1>
      <p>Time to build a fashion website!</p>
      <Image className={styles.thumbs} width={100} height={100} alt="thumbsUp" src="/../public/thumbs.jpg"/>
      <p>Think of all the crochet!</p>
      
    </>
  )
}
