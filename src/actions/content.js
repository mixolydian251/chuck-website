import uuid from 'uuid';
import database from '../firebase/firebase';
import moment from 'moment';

export const createContent = content => ({
  type: 'CREATE_CONTENT',
  content
});

export const startCreateContent = (contentData) => {

  console.log(contentData);

  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    const content = {
      category: '',
      title: '',
      description: '',
      date: Number(moment().format('x')),
      image: '',
      ...contentData
    };

    if (uid === 'V7kpYQ7RBWVx3HQS6iIUMW6Xjpy2'){
      database
        .ref(`content`)
        .push(content)
        .then(ref => {
          dispatch(
            createContent({
              id: ref.key,
              ...content
            })
          );
        });
    }
  };
};

export const setContent = content => ({
  type: 'SET_CONTENT',
  content
});

export const startSetContent = () => {
  console.log('setting Content');
  return (dispatch, getState) => {
    const ref = database.ref("content");
    return ref
      .orderByChild("category")
      .equalTo('one-act-play')
      .once('value')
      .then(snapshot => {
        const content = [];
        snapshot.forEach(childSnapshot => {
          console.log(childSnapshot.val());
          content.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setContent(content));
      });
  };
};
