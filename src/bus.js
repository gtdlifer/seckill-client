import Vue from 'vue'

let bus = new Vue()

let eventMap = {}

bus.$addon = {
  startTime: Date.now()
}

bus.$subscribe = (evt, callback) => {
  !eventMap[evt] && (eventMap[evt] = [])
  eventMap[evt] = eventMap[evt].map(c => {
    if (c.name === callback.name) {
      return null
    }
    return c
  }).filter(c => c)
  let cb = (...args) => {
    return callback.apply(null, [args])
  }
  eventMap[evt].push(cb)
}

bus.$trigger = (evt, params, callback) => {
  let callbacks = eventMap[evt]
  if (!callbacks || !callbacks.length) {
    return callback(new Error(`no listeners`), null)
  }

  let res = []
  callbacks.forEach(cb => {
    res.push(cb.apply(null, params))
  })

  

  let asyncRes = []
  let indexs = []

  res.map((r, i) => {
    if (typeof r.then === 'function') {
      asyncRes.push(r)
      indexs.push(i)
    }
  })

  if (!asyncRes.length) {
    return callback(null, res)
  }

  Promise.all(asyncRes).then(vals => {
    let index = 0
    vals.forEach(v => {
      res[indexs[index++]] = v
    })
    return callback(null, res)
  })
}

export default bus