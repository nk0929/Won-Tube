import React, { Component } from 'react';
import logo from '../../logo.svg';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    };
  this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
  }

  onInputChangeHandler = (e) => {
    this.setState({keyword: e.currentTarget.value});
    this.props.onKeywordChanged(e.target.value);
  }

  render(){
    const fontStyle = {
      fontFamily: 'Rammetto One',
    }
    return(
      <nav className="navbar navbar-expand
                    navbar-light bg-light
                    mb-3 p-3">
        <h2 className="mb-0" >
          
          <span className="d-md-inline" style={fontStyle}>Won! </span><span><img className="d-md-inline" src={logo} style={{width:28,verticalAlign:"moddle",paddingBottom:"5px"}} alt="Logo" /></span><span className="d-md-inline" style={fontStyle}>Tube</span>
        </h2>


        <form className="form-group my-2 my-lg-0 ml-sm-2 ">
          <input
            onChange={this.onInputChangeHandler} value={this.state.keyword}
            className="form-control form-control-lg mr-sm-2" type="text" placeholder="検索..." aria-label="検索..." />
        </form>
      </nav>
    );
  }
}

export default Header;