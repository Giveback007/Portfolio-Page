function Sites(props) {
  return(
    <section className='portf_site-wrap'>
      <div className='portf_site'>
        <h4>GitHub</h4>
        <div className='base_btn portf_site-btn'>
          <a href='https://github.com/Giveback007' target='_blank'>
            <button><i className="fa fa-github" aria-hidden="true"></i></button>
          </a>
        </div>
        <h5>I am active on Github</h5>
      </div>

      <div className='portf_site'>
        <h4>Codepen</h4>
        <div className='base_btn portf_site-btn'>
          <a href='https://codepen.io/giveback007/' target='_blank'>
            <button><i className="fa fa-codepen" aria-hidden="true"></i></button>
          </a>
        </div>

        <h5>I also post on Codepen</h5>
      </div>

      <div className='portf_site'>
        <h4>freeCodeCamp</h4>
        <div className='base_btn portf_site-btn'>
          <a href='https://www.freecodecamp.org/giveback007' target='_blank'>
            <button><i className="fa fa-free-code-camp" aria-hidden="true"></i></button>
          </a>
        </div>
        <h5>View my certificates</h5>
      </div>
    </section>
  )
}
////////////////////////////////////////////////
function Main(props) {
  var mapedSections = props.items.map(
    x => <Section obj={x} />
  )
	return(
    <div className='portf_innerWrap'>
    <h2>Portfolio</h2>
    <Sites />
    {mapedSections}
  </div>
	);
}

function Section(props) {
  var mapedItems = props.obj.items.map(
    x => <Item item={x} />
  );
  return(
    <section id='react' className='portf_section'>
      <h3>{props.obj.name}</h3>
      <div className='portf_code-line'><i className="fa fa-chevron-down" aria-hidden="true"></i></div>
      <div className='portf_item-wrap'>
      {mapedItems}
      </div>
    </section>
  )
}

function Item(props) {

  function itemImg(img) {
    if (img === "") {return 'assets/imgs/portfolio/under_construction.jpg'}
    if (img.slice(0, 4) === 'http') {return img}
    return `assets/imgs/portfolio/${img}`;
  }

  function itemSite(link) {
    var x;
    if (link.slice(0, 4) === 'http') {x = link}
    else if (link === "") {return null}
    else {x = `https://giveback007.github.io/${link}`}

    return(<a href={x} target='_blank' className='portf_item-link'>
            <i className="fa fa-eye" aria-hidden="true"></i><p>view site</p>
          </a>)
  }

  function itemSource(src) {
    var x;
    if (src.slice(0, 4) === 'http') {x = src}
    else if (src === "") {return null}
    else {x = `https://giveback007.github.io/${src}`}
    return(<a href={src} target='_blank' className='portf_item-link'>
          <i className="fa fa-code" aria-hidden="true"></i><p>source code</p>
        </a>)
  }

  return(

      <div style={{backgroundImage: `url(${itemImg(props.item.img)})`}} className='portf_item'>
        {
          props.item.name === '' ? null :
            <h4 className='portf_item-title'>
              <span>{props.item.name}</span>
            </h4>
        }

        {itemSite(props.item.site)}

        {itemSource(props.item.source)}
      </div>

  )
}

ReactDOM.render(<Main items={portf_items} />, document.getElementById('portf'));
