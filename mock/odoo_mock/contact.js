/*
  2018-9-5 by win

  This is a template for mock data.
  The file name is dva model name.
  Method 'call' is exported, called by /mock/common

  Other method point to dva model method.
*/

const records = {
    1: { id: 1, name: 'c1', email: '' },
    2: { id: 2, name: 'c2', email: '' },
    3: { id: 3, name: 'c3', email: '' },
    4: { id: 4, name: 'c4', email: '' },
};

function call(method2, model, method, args, kwargs) {
    const fn = eval(method2);
    return fn(model, method, args, kwargs);
}

function search(model, method, args, kwargs) {
    const res = Object.keys(records)
    return res
}

function searchRead(model, method, args, kwargs) {
    const [id] = args;
    let res = []
    for (var ii of id) {
        res.push(records[ii])
    }
    return res
}

function read(model, method, args, kwargs) {
    const [id] = args;
    return [records[id]]
}

function create(model, method, args, kwargs) {
    const [vals] = args;
    const { name = 'meiyou' } = vals;

    const ids = Object.keys(records)
    const id = Math.max(...ids) + 1;

    records[id] = { id, name }
    return id
}


function rename(model, method, args, kwargs) {
    const [id, vals] = args;
    const { name = '' } = vals;
    if (id) {
        records[id].name = name
        return write(model, method, args, kwargs);
    }
    else {
        return 0;
    }
}

function write(model, method, args, kwargs) {
    return 1
}

function del(model, method, args, kwargs) {
    const [id] = args;
    if (id) {
        delete records[id]
        return 1
    }
    else {
        return 0
    }
}

module.exports = call;