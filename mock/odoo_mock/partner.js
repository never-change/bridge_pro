
let data_user = [
    { id: 1, name: 'adas', email: 'zzzz' }
]
export function user_read2(model, ids, fields) {
    return [data_user[0]]
}
export function user_search_read2(model, domain, fields) {
    return data_user
}

export default {
    user_read2,
    user_search_read2
};

