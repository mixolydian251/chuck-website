import uuid from 'uuid';
import database from '../firebase/firebase';


export const createContent = (
  category = '',
  title = '',
  text = '',
  date = new Date(),
  image = ''
  ) => (
  {
    type: 'CREATE_CONTENT',
    category,
    title,
    text,
    date,
    image
  });


