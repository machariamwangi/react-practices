import React,{Component} from 'react';
import image1 from '../src/assets/pic.jpeg';

class Profile extends Component{
    render(){
        return(
            <div>
                    <img src={image1}
                    alt="pic" />
                    <h1>{this.props.name}</h1>
                    <p>{this.props.position}</p>
            </div>
        );
    }
}

export default Profile;