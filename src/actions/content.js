import uuid from 'uuid';
import database from '../firebase/firebase';
import moment from 'moment';

export const createContent = content => ({
  type: 'CREATE_CONTENT',
  content
});

export const startCreateContent = (contentData) => {

  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    const content = {
      category: '',
      subcategory: '',
      title: '',
      description: '',
      date: Number(moment().format('x')),
      image: '',
      editorState: '{"entityMap":{},"blocks":[{"key":"dg53k","text":"This is some text from firebase!","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}',
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


export const editContent = (id, updates) => ({
  type: 'EDIT_CONTENT',
  id,
  updates
});

export const startEditContent = (id, state) => {
  return (dispatch, getState) => {
    dispatch(editContent(id, state));
    database
      .ref(`content/${id}`)
      .update(state)
      .then(() => {});
  };
};


export const removeContent = ({ id } = {}) => ({
  type: 'REMOVE_CONTENT',
  id
});

export const startRemoveContent = ({ id } = {}) => {
  return (dispatch, getState) => {
    database
      .ref(`content/${id}`)
      .remove()
      .then(() => {
        dispatch(removeContent({ id }));
      });
  };
};

export const setContent = content => ({
  type: 'SET_CONTENT',
  content
});

export const startSetContent = () => {
  return (dispatch, getState) => {
    const ref = database.ref("content");
    return ref
      .orderByChild("category")
      .equalTo('play')
      .once('value')
      .then(snapshot => {
        const content = [];
        snapshot.forEach(childSnapshot => {
          content.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setContent(content));
      });
  };
};

export const startSetContentById = (id) => {
  return (dispatch, getState) => {
    const ref = database.ref(`content/${id}`);
    return ref
      .once('value')
      .then(snapshot => {
        console.log(snapshot.val());
        const content = [{id, ...snapshot.val()}];
        dispatch(setContent(content));
      });
  };
};
