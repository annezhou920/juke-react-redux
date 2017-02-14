import React, {Component} from 'react';
import {connect} from 'react-redux';
import Station from '../components/Station';
import {convertSong} from '../utils';
import {toggleSong} from '../action-creators/player';

const mapStateToProps = function (state, ownProps) {
  return {
    genreName: ownProps.params.genreName,
    songs: state.songs
      .filter(song => song.genre === ownProps.params.genreName)
      .map(convertSong),
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying,
    all: state
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    toggleOne: function(song, list){
      dispatch(toggleSong(song, list));
    }
  };
}

const StationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Station);



export default StationContainer;
