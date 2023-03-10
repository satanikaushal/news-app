export default function NewsItem(props){
	return(
<div className="flex m-5 border-2 flex-wrap rounded-2xl shadow-md">
<img src={props.url? props.url: "noimage.png"} alt="news"/>
	<h1 className="px-2 text-2xl font-bold">{props.title}</h1>
	<p className="p-2">{props.description? props.description.slice(0,100) + "..." : "no description available"}</p>
	<p className="p-2 font-semibold">Published on {props.date} by {props.source}</p>
	<a href={props.link}><button className="px-3 py-1 bg-blue-600 text-white m-2 mb-4 rounded">Read more</button></a>
</div>
		)
}