import './styles.css';

import Button from '../../atoms/Button';
import Menu from '../Menu';
import {
  MdPlayArrow as Play,
  MdPause as Pause,
  MdSkipNext as Forward,
  MdSkipPrevious as Backward,
  MdRepeat as Repeat
} from 'react-icons/md';

const isDisabled = (action, disabled = false) => {
  return action === undefined || disabled;
}

const VisualizerControls = ({
    // Actions
    onPlay,
    onPause,
    onBackward,
    onForward,
    onRepeat,
    onAdjustSpeed,

    // States
    playing,
    playDisabled,
    pauseDisabled,
    backwardDisabled,
    forwardDisabled,
    repeatDisabled,
    playbackSpeed
}) => {
    return (
        <div className='VisualizerControls'>
            {/* Repeat button */}
            <Button 
                className='VisualizerControls__Button'
                onClick={onRepeat}
                icon={Repeat}
                disabled={isDisabled(onRepeat, repeatDisabled)}
            />

            {/* Step Backward button */}
            <Button 
                className='VisualizerControls__Button'
                onClick={onBackward}
                icon={Backward}
                disabled={isDisabled(onBackward, backwardDisabled)}
                iconClass='VisualizerControls__Icon'
            />

            {/* Play/Pause Button */}
            <Button 
                className='VisualizerControls__CenterButton'
                onClick={playing ? onPause : onPlay}
                icon={playing ? Pause : Play}
                disabled={playing ? isDisabled(onPause, pauseDisabled) : isDisabled(onPlay, playDisabled)}
                iconClass='VisualizerControls__Icon'
                raised
            />

            {/* Step Forward button */}
            <Button 
                className='VisualizerControls__Button'
                onClick={onForward}
                icon={Forward}
                disabled={isDisabled(onForward, forwardDisabled)}
                iconClass='VisualizerControls__Icon'
            />

            <Menu 
                items={['0.25x', '0.5x', '1x', '2x', '4x']}
                placeholder='Speed'
                selected={`${playbackSpeed}x`}
                onSelect={onAdjustSpeed}
                noDropIcon
                className='VisualizerControls__SpeedButton'
            />

        </div>
    );
}

export default VisualizerControls;