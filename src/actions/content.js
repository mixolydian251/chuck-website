import uuid from 'uuid';
import database from '../firebase/firebase';


export const createContent = content => ({
  type: 'CREATE_CONTENT',
  content
});

export const startAddContent = (contentData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    const {
      category = '',
      title = '',
      text = '',
      date = new Date(),
      image = ''
    } = contentData;


    const content = {
      category,
      title,
      text,
      date,
      image
    };

    database
      .ref(`users/${uid}/content`)
      .push(content)
      .then(ref => {
        dispatch(
          createContent({
            id: ref.key,
            ...content
          })
        );
      });
  };
};


