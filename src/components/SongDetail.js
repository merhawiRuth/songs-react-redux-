import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select A son</div>;
  }
  return <div>{song.title}</div>;
};

const mapStateToProps = state => {
  console.log(state.selectedSong);
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
