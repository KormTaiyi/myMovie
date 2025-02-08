import HeroSection from '../components/home/HeroSection'
import TrendingPage from '../components/home/TrendingPage'
import TrailerPage from '../components/home/TrailerPage'

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <TrendingPage title="Trending"/>
      <TrailerPage/>
      <TrendingPage title="What's Popular"/>
    </div>
  )
}

export default HomePage