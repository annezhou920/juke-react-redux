import React from 'react';
import Songs from './Songs';
import AddSongContainer from '../containers/AddSongContainer';

export default function (props) {

  const playlist = props.selectedPlaylist;
  // debugger;
  console.log('props', props)
  return (
    <div>
      <h3>{ playlist.name }</h3>
      <Songs {...props} songs={playlist.songs}/>
      { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
      <AddSongContainer />
      <hr />
    </div>
  );

}
