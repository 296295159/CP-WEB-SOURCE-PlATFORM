/**
 *创建时间:  2017/11/4
 *  作  者：Jimck_Zhang
 *  邮  箱：XIAOZHANG10086XIAOZHANG@live.com
 *  功  能:
 */

import { stringify } from 'qs';
import request from '../utils/request';

export async function queryCurrent(params) {
  return request(`/user/getUser?${stringify(params)}`);
}
