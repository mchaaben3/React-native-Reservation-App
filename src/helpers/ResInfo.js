import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { colors } from '../constants';
import { Modalize } from 'react-native-modalize';
import {
  deleteReservation,
  getReservations,
} from '../redux/actions/reservationsActions';
import { useDispatch } from 'react-redux';

export const ResInfo = (props) => {
  const [showDelete, setShowDelete] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    let filteredArray = props.masterData.filter((item) => item._id !== id);
    dispatch(deleteReservation(id));
    props.setMasterData(filteredArray);
  };
  return (
    <Modalize ref={props.modal} modalHeight={450}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          padding: 20,
        }}
      >
        <View>
          <Text
            style={{
              padding: 20,
              fontSize: 12,
              fontWeight: '100',
              opacity: 0.8,
            }}
          >
            Number of persons : {props?.selectedReservation.numOfPersons}
          </Text>

          <Text
            style={{
              padding: 20,
              fontSize: 12,
              fontWeight: '100',
              opacity: 0.8,
            }}
          >
            Phone Number : {props.selectedReservation.client.profile.phone}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 40,
          }}
        >
          <Pressable
            onPress={() => {
              setShowDelete(false);
            }}
            style={{
              paddingHorizontal: 40,
              paddingVertical: 10,
              borderRadius: 6,
              backgroundColor: colors.lightGray,
              marginHorizontal: 20,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                opacity: 0.8,
                color: colors.black,
              }}
            >
              Close
            </Text>
          </Pressable>

          {showDelete ? (
            <Pressable
              style={{
                paddingHorizontal: 40,
                paddingVertical: 10,
                borderRadius: 6,
                backgroundColor: colors.red,
              }}
              onPress={() => {
                handleDelete(props.selectedReservation._id);
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  opacity: 0.8,
                  color: colors.white,
                }}
              >
                delete
              </Text>
            </Pressable>
          ) : (
            <Pressable
              style={{
                paddingHorizontal: 40,
                paddingVertical: 10,
                borderRadius: 6,
                backgroundColor: colors.red,
              }}
              onPress={() => setShowDelete(true)}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  opacity: 0.8,
                  color: colors.white,
                }}
              >
                Want to delete ???
              </Text>
            </Pressable>
          )}
        </View>
      </View>
    </Modalize>
  );
};
// };
// export const ModalScreen = ({ modalVisible, setModalVisible, data }) => {
//   const [showDelete, setShowDelete] = useState(false);
//   return (
//     <View style={styles.centeredView}>
//       <Modal
//         animationType="fade"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           setModalVisible(!modalVisible);
//         }}
//       >
//         <View style={styles.centeredView}>
//           <Text
//             style={{
//               fontSize: 20,
//               fontWeight: 'bold',
//             }}
//           >
//             Invitation information
//           </Text>
//           <View style={styles.modalView}>
//             <View
//               style={{
//                 flexDirection: 'row',
//               }}
//             >
//               <Text
//                 style={{
//                   fontSize: 12,
//                   fontWeight: '100',
//                   opacity: 0.8,
//                 }}
//               >
//                 Number of persons : {data.numOfPersons}
//               </Text>

//               <Text
//                 style={{
//                   marginLeft: 20,
//                   fontSize: 12,
//                   fontWeight: '100',
//                   opacity: 0.8,
//                 }}
//               >
//                 Phone Number : {data.client.profile.phone}
//               </Text>
//             </View>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 marginTop: 40,
//               }}
//             >
//               <Pressable
//                 onPress={() => {
//                   setShowDelete(false);
//                   setModalVisible(false);
//                 }}
//                 style={{
//                   paddingHorizontal: 40,
//                   paddingVertical: 10,
//                   borderRadius: 6,
//                   backgroundColor: colors.lightGray,
//                   marginHorizontal: 20,
//                 }}
//               >
//                 <Text
//                   style={{
//                     fontSize: 12,
//                     fontWeight: 'bold',
//                     opacity: 0.8,
//                     color: colors.black,
//                   }}
//                 >
//                   Close
//                 </Text>
//               </Pressable>

//               {showDelete ? (
//                 <Pressable
//                   onPress={() => setModalVisible(false)}
//                   style={{
//                     paddingHorizontal: 40,
//                     paddingVertical: 10,
//                     borderRadius: 6,
//                     backgroundColor: colors.red,
//                   }}
//                 >
//                   <Text
//                     style={{
//                       fontSize: 12,
//                       fontWeight: 'bold',
//                       opacity: 0.8,
//                       color: colors.white,
//                     }}
//                   >
//                     delete
//                   </Text>
//                 </Pressable>
//               ) : (
//                 <Pressable
//                   style={{
//                     paddingHorizontal: 40,
//                     paddingVertical: 10,
//                     borderRadius: 6,
//                     backgroundColor: colors.red,
//                   }}
//                   onPress={() => setShowDelete(true)}
//                 >
//                   <Text
//                     style={{
//                       fontSize: 12,
//                       fontWeight: 'bold',
//                       opacity: 0.8,
//                       color: colors.white,
//                     }}
//                   >
//                     Want to delete ???
//                   </Text>
//                 </Pressable>
//               )}
//             </View>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    borderRadius: 16,
    borderColor: colors.primary,
    borderWidth: 1,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.white,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 8,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
  },
  button: {
    borderRadius: 999,
    padding: 10,
    elevation: 5,
    margin: 10,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: colors.red,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
