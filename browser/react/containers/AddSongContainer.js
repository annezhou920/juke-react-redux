import React from 'react';
import AddSong from '../components/AddSong';
import store from '../store';
import {loadAllSongs, addSongToPlaylist} from '../action-creators/playlists';
import {connect} from 'react-redux';

const mapStateToProps = function(state, ownProps){
  console.log('state', state)
  return {
    songs: state.songs,
    playlistId: state.playlists.selected.id
  };
}

const mapDispatchToProps = function(dispatch, ownProps){
  return {
    handleSubmit: function(event, playlistId, songId){
      event.preventDefault();
      dispatch(addSongToPlaylist(playlistId, songId))
    }
  };
}

const AddSongContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class AddSongContainer extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        songId: 1,
        error: false
      };
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
      this.setState({
        songId: evt.target.value,
        error: false
      });
    }

    render() {
      const songs = this.props.songs;
      const error = this.state.error;
      const playlistId = this.props.playlistId;
      const songId = this.state.songId;

      return (
        <AddSong

          songs={songs}
          error={error}
          handleChange={this.handleChange}
          handleSubmit={this.props.handleSubmit}
          playlistId={playlistId}
          songId={songId}
          />
      );
    }
  }
)

export default AddSongContainer;

// class AddSongContainer extends React.Component {
//
//   constructor(props) {
//     super(props);
//     this.state = {
//       songId: 1,
//       error: false
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

  // componentDidMount() {
  //
  //   this.unsubscribe = store.subscribe(() => {
  //     this.setState(store.getState());
  //   });
  //
  //   store.dispatch(loadAllSongs());
  //
  // }

  // componentWillUnmount() {
  //   this.unsubscribe();
  // }

//   handleChange(evt) {
//     this.setState({
//       songId: evt.target.value,
//       error: false
//     });
//   }
//
//   handleSubmit(evt) {
//
//     evt.preventDefault();
//
//     const playlistId = this.state.playlists.selected.id;
//     const songId = this.state.songId;
//
//     store.dispatch(addSongToPlaylist(playlistId, songId))
//       .catch(() => this.setState({ error: true }));
//
//   }
//
//   render() {
//
//     const songs = this.state.songs;
//     const error = this.state.error;
//
//     return (
//       <AddSong
//         {...this.props}
//         songs={songs}
//         error={error}
//         handleChange={this.handleChange}
//         handleSubmit={this.handleSubmit}/>
//     );
//   }
// }
//
// export default AddSongContainer;
