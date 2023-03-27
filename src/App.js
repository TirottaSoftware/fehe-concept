import Section from './components/Section'
import './globals.css'
import ImageWithText from './sections/ImageWithText'

export default function App() {
  return (
    <div>
      <Section name="image-with-text">
        <ImageWithText />
      </Section>
    </div>
  )
}