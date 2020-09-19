import React from 'react';
import http from 'axios';
import Highlights from './sub-components/Highlights';
import Overview from './sub-components/Overview';
import Description from './sub-components/Description';
import Amenities from './sub-components/Amenities';
import SleepingArrangements from './sub-components/SleepingArrangements';

var serverUrl = 'http://ec2-13-56-20-100.us-west-1.compute.amazonaws.com:3000';
// var serverUrl = 'http://localhost:3002';

class HomeDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeDesc: {},
      amenities: [],
      superHostText: 'Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.',
      hostInfo: {
        hostId: 1,
        isSuperHost: false,
        hostName: '',
        hasProfilePic: false
      },
      hostPic: '',
    }
    this.getHomeDescById = this.getHomeDescById.bind(this);
    this.getHostInfoById = this.getHostInfoById.bind(this);
    this.toggleReadMore = this.toggleReadMore.bind(this);
  }

  componentDidMount() {
    /* this.getHostInfoById(this.props.match.params.id); */
    let queryString = window.location.search;
    if (!queryString.length) {
      let pathname = window.location.pathname.split('/').pop();
      this.getHostInfoById(pathname);
      this.getHomeDescById(pathname);
      this.getProfilePicture(pathname);
    } else {
      this.getHostInfoById(queryString.split('?').pop());
      this.getHomeDescById(queryString.split('?').pop());
      this.getProfilePicture(queryString.split('?').pop());
    }
  }

  getHostInfoById(id) {
    console.log('host id: ', id);
    http.get(`${hostServerUrl}/hostInfo/${id}`)
      .then(response => {
        console.log('GET response from the server by hostInfo Id: ', response.data);
        let hostInfoObj = {
          hostId: response.data.id,
          isSuperHost: response.data.host_is_superHost,
          hostName: response.data.host_name,
          hasProfilePic: response.data.host_has_profile_pic
        }
        this.setState({
          hostInfo: hostInfoObj
        });
        return hostInfoObj;
      })
      .catch(err => {
        console.log('Error receiving response from the server by hostInfo Id: ', err);
      });
  }

  getHomeDescById(id) {
    http.get(`${serverUrl}/rooms/${id}`)
      .then(response => {
        console.log('GET response from the server by homeDesc Id: ', response.data);
        this.setState({
          homeDesc: response.data,
        });
      })
      .catch(err => {
        console.log('Error receiving response from the server by homeDesc Id: ', err);
      });
  }

  getProfilePicture(id) {
    http.get('https://fec-gai-hostprofile.s3-us-west-1.amazonaws.com/json/images.json')
      .then(response => {
          let pictures = response.data.filter((ele, i, self) => {
            return ele.room_id === Number(id)
          });
          this.setState({
            hostPic: pictures[0].host_image,
            coHostPic: pictures[0].reviewers[0],
          });
      })
      .catch(err => {
        console.log('Error receiving profile pictures from AWS s3: ');
      });
  }

  toggleReadMore() {
    let { toggleDisplay } = this.state;
    this.setState({
      toggleDisplay: !toggleDisplay
    });
  }

  render() {
    let { homeDesc, toggleDisplay, hostInfo, superHostText, hostPic } = this.state;
    return (
      <div>
        <Overview homeDesc={homeDesc} hostInfo={hostInfo} hostPic={hostPic} />
        <Highlights homeDesc={homeDesc} hostInfo={hostInfo} superHostText={superHostText} />
        <Description homeDesc={homeDesc} toggleReadMore={this.toggleReadMore} toggleDisplay={toggleDisplay} />
        <SleepingArrangements homeDesc={homeDesc} />
        <Amenities homeDesc={homeDesc} />
      </div>
    )
  }

}

export default HomeDescription;

