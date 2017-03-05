import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as songListActions from './SongList.actions';
import { Song, PlayingSong } from './components';


class SongList extends React.Component {
    componentWillMount() {
        this.props.actions.getSongs();
    }

    printSongList(songs) {
        function pad(num) {
            return ("0"+num).slice(-2);
        }
        function hhmmss(secs) {
            var minutes = Math.floor(secs / 60);
            secs = secs%60;
            var hours = Math.floor(minutes/60)
            minutes = minutes%60;
            return pad(hours)+":"+pad(minutes)+":"+pad(secs);
        }

        if (!songs) {
            return (
                <div>
                    Cannot load song list
                </div>
            );
        }
        return songs.map((song, index) => {
            return (
                <li key={song.url}>
                    <span>
                        {song.name}
                    </span>
                    <span>
                        {hhmmss(song.lenght)}
                    </span>
                    <button onClick={() => {
                        this.props.actions.upVote({url: song.url})    
                    }}>
                        UP
                    </button>
                    <button onClick={() => {
                        this.props.actions.downVote({url: song.url})    
                    }}>
                        DOWN
                    </button>
                </li>
            ); 
        });
    }

    songsWrapper() {
        if (!this.props.upcomingSongList && !this.props.playingSong) {
            return (
                <div>
                    Cannot load contet.
                </div>
            );
        }
        return (
            <div>
                {PlayingSong({song: this.props.playingSong})}
                <div>
                    {this.printSongList(this.props.upcomingSongList)}
                </div>
            </div>
        );
    }

    render () {
        return (
            <div>
                {this.songsWrapper()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const ifUndef = (path, propName, propValIfUndef) => {
        if (path) {
            return path[propName];
        }
        return propValIfUndef;
    }
    console.log('state', state.mainPage.songList.songList);
    return {
        playingSong: ifUndef(state.mainPage.songList.songList, 'playingSong', undefined),
        upcomingSongList: ifUndef(state.mainPage.songList.songList, 'upcomingSongList', undefined)
    }
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(songListActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SongList);
