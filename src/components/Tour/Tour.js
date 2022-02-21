import React from "react";
import "./Tour.scss";
class Tour extends React.Component {
  state = {
    showInfo: false,
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };
  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;
    return (
      <article className='tour'>
        <div className='img-container'>
          <img src={img} alt={name} />
          <span className='close-btn'>
            <i
              className='fas fa-window-close'
              onClick={() => removeTour(id)}
            ></i>
          </span>
        </div>
        <div className='tour-info'>
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info
            <span>
              <i
                className='fas fa-caret-square-down'
                onClick={this.handleInfo}
              ></i>
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}

export default Tour;
