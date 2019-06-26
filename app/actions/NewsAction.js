import axios from 'axios';
import { Alert } from 'react-native';
import {
  GET_NEWS,
  GET_NEWS_SUCCESS,
  GET_NEWS_FAILED,
} from './types';

export const getNews = () => (dispatch) => {
  dispatch({ type: GET_NEWS });
  axios.get("https://connect.ecg-research.com/it/test/news").then((response) => {
    // console.log(response);
    const res = response.data;
    if (res.result) {
      // console.log(res);
      // console.log(res.newsfeed);
      dispatch({
        type: GET_NEWS_SUCCESS,
        payload: res.newsfeed,
      });
    }
  })
  .catch((err) => {
    dispatch({ type: GET_NEWS_FAILED });
    Alert.alert(
      'เกิดข้อผิดพลาด',
      err.message,
      [
        { text: 'ยกเลิก' },
      ],
    );
  });
};