import React, {Component} from 'react';
//import store from '../store';
import Sidebar from '../components/Sidebar';
import {connect} from 'react-redux';


const mapStateToProps = function(state, ownProps){
  return {
    playlists: state.playlists.list
  }
}

const mapDispatchToProps = function(dispatch, ownProps){
  return {}
}

const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

export default SidebarContainer;
//
// export default class extends Component {
//
//   constructor() {
//     super();
//     this.state = store.getState().playlists;
//   }
//
//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState().playlists);
//     });
//   }
//
//   componentWillUnmount() {
//     this.unsubscribe();
//   }
//
//   render() {
//     return (
//       <Sidebar playlists={this.state.list}/>
//     );
//   }
//
// }
