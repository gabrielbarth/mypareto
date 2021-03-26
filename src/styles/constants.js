import { PixelRatio, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const BORDER_RADIUS = 65;

const numberOfIcons = 3;
const horizontalPadding = 90;

export const DURATION = 450;
export const PADDING = 16;
export const SEGMENT = PixelRatio.roundToNearestPixel(width/numberOfIcons);
export const ICON_SIZE = SEGMENT - horizontalPadding;
