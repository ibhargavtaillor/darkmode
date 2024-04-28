import ArticleTile from './components/ArticleTile';
import HeaderWrapper from './template/HeaderWrapper';

function App() {
  
  // const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  /*   function handleClick() {
      if (localStorage.theme === "dark" || !("theme" in localStorage)) {
        setIsDarkMode(true)
        //add class=dark in html element
        document.documentElement.classList.add("dark");
      } else {
        setIsDarkMode(false)
        //remove class=dark in html element
        document.documentElement.classList.remove("dark");
      }
  
      if (localStorage.theme === "dark") {
        localStorage.theme = "light";
      } else {
        localStorage.theme = "dark";
      }
    } */

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

