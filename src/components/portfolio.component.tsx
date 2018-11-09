import React = require("react");
import { State, Project } from "../@types";
import { connect } from "@giveback007/mutable-react-state";
import { arrDivide, iterate } from "@giveback007/util-lib";
import { portfolioPage } from "../state";

const PageButton = ({ i, page }: { i: number, page: number }) => 
    <button className={`portfolio_page_btn${ page === i ? ' active' : ''}`} onClick={() => portfolioPage(i)} />


const Projects = ({ data }: { data: Project[] }) => {
    const projects = data.map(({ image, name }, i) => 
        <div key={name} className="portfolio_project">
            <div 
                style={{ backgroundImage: `url(${'assets/' + image})` }}
            > 
                {name}
            </div>
        </div>
    );
    
    return <div className="portfolio_project_parent">{projects}</div>;
}

const mapper = ({ portfolio: { page, data }, viewSize: { width, height } }: State) => ({ page, data, width, height });
export const Portfolio = connect(mapper)(
({ data, page, width, height }) => {
    const params = { projectsPerPage: 4 }
    const dataArrs = arrDivide(data, params.projectsPerPage);

    const buttons = iterate(dataArrs.length).map((i) => <PageButton key={i} i={i} page={page} />);
    
    const x = [width, Math.floor(height * 0.8), 750].sort((a, b) => a - b);
    const maxWidth = x[0]
    console.log(x);
    return (
    <div
        className="page portfolio"
        style={{ maxWidth }}
    >
        <div className="portfolio_page_btn_parent"></div>
        {buttons}
        <h1>{page}</h1>
        <Projects data={dataArrs[page]}/>
    </div>)
})
