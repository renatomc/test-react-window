import { Items } from '../dtos/items';
import { api } from './api';

export const getList = async (): Promise<Items[]> => {
  let data: Items[] = [];
  const response = await api.get<Items[]>('/items');
  if (response.status === 200) {
    data = response.data;
  }
  return data;
};
