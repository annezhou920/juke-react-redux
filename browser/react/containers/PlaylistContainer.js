import React, {Component} from 'react';
//import store from '../store';
import Playlist from '../components/Playlist';
import {toggleSong} from '../action-creators/player';
import {connect} from 'react-redux';


const mapStateToProps = function(state, ownProps){
  // console.log('playlist selected: ', state.playlists.selected)

  console.log('player', state)
  return {
    selectedPlaylist: state.playlists.selected,
    player: state.player,
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
  };
}

const mapDispatchToProps = function(dispatch, ownProps){
  return {
    toggleOne: function(song, list){
      dispatch(toggleSong(song, list));
    }
  };
}

const PlaylistContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist)

export default PlaylistContainer;

// export default class extends Component {
//
//   constructor() {
//     super();
//     this.state = store.getState();
//   }
//
//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState());
//     });
//   }
//
//   componentWillUnmount() {
//     this.unsubscribe();
//   }
//
//   toggle(song, list) {
//     store.dispatch(toggleSong(song, list));
//   }
//
//   render() {
//     return (
//       <Playlist
//         {...this.state.player}
//         selectedPlaylist={this.state.playlists.selected}
//         toggleOne={this.toggle}
//       />
//     );
//   }
//
// }
