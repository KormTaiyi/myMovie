import HeroSection from '../components/home/HeroSection'
import TrendingPage from '../components/home/TrendingPage'
import TrailerPage from '../components/home/TrailerPage'

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <TrendingPage type="Trending" state1="Today" state2="This Week"/>
      <TrailerPage/>
      <TrendingPage type="What's Popular"/>
    </div>
  )
}

export default HomePage