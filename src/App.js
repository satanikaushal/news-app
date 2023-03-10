
import News from './News';
import Navbar from './Navbar';
import {BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <main>
			<BrowserRouter>
			<Navbar/>
      <Routes>          
          <Route path="/" element={<News key="Latest" key1="Latest" category="&q=latest"/>} />
          <Route path="business" element={<News key="Business" key1="Business" category=" &category=business" />} />
				<Route path="entertainment" element={<News key="Entertainment" key1="Entertainment" category="&category=entertainment" />} />
				<Route path="environment" element={<News key="Environment" key1="Environment" category="&category=environment" />} />
				<Route path="food" element={<News key="Food" key1="Food" category="&category=food" />} />
<Route path="health" element={<News key="Health" key1="Health" category="&category=health" />} />
<Route path="politics" element={<News key="Politics" key1="Politics" category="&category=politics" />} />
				<Route path="science" element={<News key="Science" key1="Science" category="&category=science" />} />
				<Route path="sports" element={<News key="Sports" key1="Sports"  category="&category=sports" />} />
<Route path="technology" element={<News key="Technology" key1="Technology" category="&category=technology" />} />
<Route path="top" element={<News key="Top" key1="Top" category="&category=top" />} />
<Route path="world" element={<News key="World"  key1="World"category="&category=world" />} />

      </Routes>
		</BrowserRouter>
    </main>
  )
}
