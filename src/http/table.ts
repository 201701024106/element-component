import { request } from '../axios/index.ts'
const getTableList = (data: any) => {
    return request.post('/table/list', data)
}
export { getTableList }