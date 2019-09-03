import React from "react";
import Title from "./Title";
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa"

class Services extends React.Component{
	state={
		services:[
			{
				icon:<FaCocktail/>,
				title:"Free Cocktails",
				info:"Lorem Ipsum is simply dummy text of the printing."
			},
			{
				icon:<FaHiking/>,
				title:"Endless Hiking",
				info:"Lorem Ipsum is simply dummy text of the printing."
			},
			{
				icon:<FaShuttleVan/>,
				title:"Free Shuttle",
				info:"Lorem Ipsum is simply dummy text of the printing."
			},
			{
				icon:<FaBeer/>,
				title:"Strongest Beer",
				info:"Lorem Ipsum is simply dummy text of the printing."
			},
		]
	}
	render(){
		return(
			<section className="services">
				<Title title='services'/>
				<div className="services-center">
					{this.state.services.map((item,index) => {
						return(
							<article key={index} className="service">
								<span>{item.icon}</span>
								<h6>{item.title}</h6>
								<p>{item.info}</p>
							</article>
						)
					})}
				</div>
			</section>
		)
	}
}
export default Services;