import React, { Component } from "react";

const HeaderContext = React.createContext();
localStorage.setItem('cityCount', 0);
localStorage.setItem('productCount', 0);

class HeaderProvider extends Component {
    state = {
        cityCount: 0,
        productCount: 0
    }

    handleOnRestCount = (cityCount, productCount) => {
        this.setState({
            cityCount: cityCount,
            productCount: productCount
        });
    }

    handleCityClick = () => {
        this.setState({
            cityCount: this.state.cityCount + 1
        });
    }

    handleProductClick = () => {
        this.setState({
            productCount: this.state.productCount + 1
        });
    }

    render() {
        return <HeaderContext.Provider value={{
            ...this.state,
            handleCityClick: this.handleCityClick,
            handleProductClick: this.handleProductClick
        }}>
            {this.props.children}
            <Header
                count={{
                    cityCount: this.state.cityCount,
                    productCount: this.state.productCount
                }}
                handleOnRestCount={this.handleOnRestCount}
            />
        </HeaderContext.Provider>
    }
}

export { HeaderProvider, HeaderContext };

function Header(props) {

    const handleOnSave = () => {
        localStorage.setItem('cityCount', parseInt(props.count.cityCount));
        localStorage.setItem('productCount', parseInt(props.count.productCount));
    }

    const handleOnReset = () => {
        let cityCount = localStorage.getItem('cityCount');
        let productCount = localStorage.getItem('productCount');
        props.handleOnRestCount(parseInt(cityCount), parseInt(productCount));
    }

    return (
        <header className='app-header'>
            <div className='app-header-container'>
                <button className='app-header-btn' onClick={handleOnReset}>Reset </button>
                <button className='app-header-btn mr-10' onClick={handleOnSave}>Save </button>
                <label>Products Visited: {props.count.productCount}</label>
                <label>Cities Visited: {props.count.cityCount}</label>
            </div>
        </header>
    )
}