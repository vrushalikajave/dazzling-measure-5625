import axios from "axios";
import * as action from "./task.types";

export const addTaskAPI = (data) => async (dispatch) => {
  dispatch({ type: action.TASK_LOADING });
  return axios
    .post(`${process.env.REACT_APP_TMETRIC_APP_API}/tmetricTask`, data)
    .then((res) => dispatch({ type: action.TASK_ADD, payload: data }))
    .catch((err) => dispatch({ type: action.TASK_ERROR }));
};

export const updateTaskAPI = (id, data) => async (dispatch) => {
  dispatch({ type: action.TASK_LOADING });
  return axios
    .patch(`${process.env.REACT_APP_TMETRIC_APP_API}/tmetricTask/${id}`, data)
    .then((res) => {
      dispatch({ type: action.TASK_UPDATE, payload: { id, data } });
    })
    .catch((err) => {
      dispatch({ type: action.TASK_ERROR });
    });
};

export const deleteTaskAPI = (id) => async (dispatch) => {
  dispatch({ type: action.TASK_LOADING });
  return axios
    .delete(`${process.env.REACT_APP_TMETRIC_APP_API}/tmetricTask/${id}`)
    .then((res) => dispatch({ type: action.TASK_DELETE, payload: id }))
    .catch((err) => dispatch({ type: action.TASK_ERROR }));
};

export const getTasksAPI = () => async (dispatch) => {
  dispatch({ type: action.TASK_LOADING });
  return axios
    .get(`${process.env.REACT_APP_TMETRIC_APP_API}/tmetricTask`)
    .then((res) => dispatch({ type: action.TASK_GET_TASK, payload: res.data }))
    .catch((err) => dispatch({ type: action.TASK_ERROR }));
};
