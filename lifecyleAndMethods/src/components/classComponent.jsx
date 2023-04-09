import { Component } from 'react';

class Buton extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('constructor çalıştı');
  }

  //   bileşen ilk oluştuğunda çalışır
  componentDidMount() {
    console.log('Component did Mount Çalıştı ');
  }

  //   bileşenin içerisinde herhangi bir state değiştiğinde
  componentDidUpdate() {
    console.log('Component did Update Çalıştı ');
  }

  // bileşen ekrandan gittiğinde çalışır
  componentWillUnmount() {
    console.log('Component will Unmount Çalıştı ');
  }

  // statei değiştiren method
  handleButton = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log('render çalıştı');
    return (
      <div>
        <p>Butona {this.state.count} kez tıklandı </p>
        <button onClick={this.handleButton}>Bana Tıkla</button>
      </div>
    );
  }
}

export default Buton;
