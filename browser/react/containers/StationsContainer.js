import React, {Component} from 'react';
import {connect} from 'react-redux';
import Stations from '../components/Stations';

const convertSongsToStations = function(songsArray){
  const stations = {}

  songsArray.forEach(song => {
    var genre = song.genre;
    stations[genre] = stations[genre] || [];
    stations[genre].push(song)
  })

  return stations;
}

const mapStateToProps = function (state, ownProps) {
  return {
    stations: convertSongsToStations(state.songs)
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {};
}

const StationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Stations);

export default StationsContainer;
