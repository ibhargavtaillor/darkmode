import ArticleTile from './components/ArticleTile';
import HeaderWrapper from './template/HeaderWrapper';

function App() {
  
  return (
    <HeaderWrapper>
      <div className='flex flex-wrap -mx-1 lg:-mx-4' >
        {Array.from('123456789').map((item) => (
          <ArticleTile number={Number(item)} key={item} />
        ))}
      </div>
    </HeaderWrapper>
  )
}

export default App

