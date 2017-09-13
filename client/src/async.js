// // How stacks work with in our code
//
// // The forth will not run until the first stack is finished
// // const first = () => second()
// //
// // const second = () => third()
// //
// // const third = () => {
// //   setTimeout(forth, 4000)
// //   console.trace()
// // }
// //
// // const forth = () => console.trace()
// //
// // first()
//
// // Callback code
//
// const createUser = (user) => {
//   checkAccess('create.user', (err, result) => {
//     if (err) {
//       sendMessage('user has no acess')
//       return
//     }
//     findUserByEmail(user.email, (err, foundUser) => {
//       if (err) {
//         sendMessage('unknown database error')
//         return
//       }
//       if (foundUser) {
//         ...
//       }
//       saveUser(user, (err, savedUser) => {
//         ...
//       })
//     })
//   })
// }
//
// // Promise code structure
//
// const createUserAsync = (user) => {
//   return checkAccess('create.user')
//   .then(() => findUserByEmail(user.email))
//   .then(foundUser => {
//     if (foundUser) {
//       throw new Error('duplicate user')
//     }
//     return saveUser(user)
//   })
//   .catch(err => {
//     // handle errors here
//   })
// }
//
// try {
//   // do stuff that might throw an exception
// } catch (err) {
//   // handle errors
// }
const saveToDb = (value) => {
  const callback = (resolve, reject) => {

    const runAfterTimeout = () => {
      const isEven = Date.now % 2 === 0
      if (isEven) {
        reject('Database save failed')
      } else {
        resolve('Save successful:' + value)
      }
    }
    setTimeout(runAfterTimeout, 1000)
  }

  return new Promise(callback)
}

saveToDb('foo@bar.com')
  .then(msg => {
    console.log(msg)
    return saveToDb('bad@email.com')
  })
  .then(msg => {
    console.log(msg)
  })
  .catch(err => console.log(err))
