import { Dimensions, PixelRatio } from 'react-native';

const ratio = PixelRatio.get();
const baseSize = 7;
const basePaddingHeader = 10;
const baseHeaderHeight = 75;
const basePadding = 15;

export const Layouts = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  half: (Dimensions.get('window').width / 2) - (basePadding * 2),
  fontSize: baseSize * ratio,
  baseHeaderHeight,
  basePadding,
  paddingHeader: basePaddingHeader * ratio,
  HeaderHeight: Dimensions.get('window').height * 0.12,
  headerIcon: Dimensions.get('window').height * 0.045,
  forms: {
    inputWidth: Dimensions.get('window').width - (basePadding * 2),
  },
  color: {
    primary: '#2061eb',
    info: '#478aff',
    success: '#03c9a9',
    danger: '#f62459',
    default: '#f6f6f6',
    desc: '#808080',
    icon: '#d8d8d8',
  },
};

export const Test = {
  test: 'test',
};