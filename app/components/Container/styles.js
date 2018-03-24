import EStyleSheet from 'react-native-extended-stylesheet';

/** Take up the whole screen (flex: 1)
 *  Center align vertical and horizontally
 *  Use the $primaryBlue global variable created in EStyleSheet.build({})
 */
export default EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$primaryBlue'
  }
});
