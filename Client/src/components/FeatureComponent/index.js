import './style.css'
import { MdHeadsetMic } from 'react-icons/md';

export function FeatureComponent(props) {
    return (
        <div className='features'>
            <div className="col-lg">
                <div className='background-icon'>
                    <MdHeadsetMic className="icon" />
                </div>
                <p className='title-feature'>{props.feature}</p>
                <p className='details-feature'>{props.details}</p>
            </div>
        </div>
    );
}