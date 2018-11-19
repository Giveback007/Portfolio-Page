import { connect } from "@giveback007/mutable-react-state";
import { arrDivide, iterate } from "@giveback007/util-lib";
import React = require("react");
import { Project, State } from "../@types";
import { portfolioPage } from "../state";

const PageButton = ({ i, page }: { i: number, page: number }) => (
    <button
        className={`portfolio_page_btn${ page === i ? " active" : ""}`}
        onClick={() => portfolioPage(i)}
    />
);

const ProjectComponent = ({ image, name }: Project) => (
        <div key={name} className="portfolio_project">
            <div
                style={{ backgroundImage: `url(${"assets/" + image})` }}
            >
                {name}
            </div>
        </div>
);

const Projects = ({ data }: { data: Project[] }) => (
    <div className="portfolio_project_parent">
        {data.map((project, i) => <ProjectComponent key={project.name} {...project} />)}
    </div>
);

const mapper = ({ portfolio: { page, data }, viewSize: { width, height } }: State) => ({ page, data, width, height });
export const PortfolioComponent = connect(mapper)(
({ data, page, width, height }) => {
    const params = { projectsPerPage: 4 };
    const dataArrs = arrDivide(data, params.projectsPerPage);

    const buttons = iterate(dataArrs.length).map(({ x }) => <PageButton key={x} i={x} page={page} />);

    const z = [width, Math.floor(height * 0.8), 750].sort((a, b) => a - b);
    const maxWidth = z[0];
    console.log(z);
    return (
    <div
        className="page portfolio"
        style={{ maxWidth }}
    >
        <div className="portfolio_page_btn_parent">test</div>
        {buttons}
        <h1>{page}</h1>
        <Projects data={dataArrs[page]}/>
    </div>);
});
