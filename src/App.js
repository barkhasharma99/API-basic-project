import React from "react";
import './App.css';
class App extends React.Component {

  // Constructor
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch("https://api.github.com/users") // fetch the API from this link
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true
        });
      })
  }
  
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
       </div>;

    return (
      <div className="App">
        <h1> Fetch data from an api in react </h1> {
          items.map((item) => (
            <table>
              <ul key={item.id} style={{ border: '2px solid green' }}>
                User_login: {item.login},
                User_id: {item.id},
                User_node_id: {item.node_id}
                User_avatar_url: {item.avatar_url}
                User_gravatar_id: {item.gravatar_id}
                User_url: {item.url}
              </ul>
            </table>
          ))
        }
      </div>
    );
  }
}

export default App;
