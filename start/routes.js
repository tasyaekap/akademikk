'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.get('/', () => {
//   return { greeting: 'Hello world in JSON' }
// })
Route.group(() => {
    Route.get('DispMhsw', 'DispController.Mhsw')
    Route.get('DispNilai', 'DispController.Nilai')
    Route.get('DispProdi', 'DispController.Prodi')
    Route.get('DispDosen', 'DispController.Dosen')
    Route.get('DispBiaya', 'DispController.Biaya')
    Route.get('DispAsun', 'DispController.Asun')
})

Route.group(() => {
    Route.post('/register', 'AuthController.register')
    Route.post('/login', 'AuthController.postLogin')
    Route.post('/refresh', 'AuthController.postRefreshToken')
    Route.post('/logout', 'AuthController.postLogout')
})

Route.group(() => {
    Route.get('dosen', 'DosenController.index') //.middleware('auth')
    Route.get('dosen/:id', 'DosenController.show')
    Route.post('dosen', 'DosenController.store')
    Route.put('dosen/:id', 'DosenController.update')
    Route.delete('dosen/:id', 'DosenController.destroy')
})

Route.group(() => {
    Route.get('prodi', 'ProdiController.index') //.middleware('auth')
    Route.get('prodi/:id', 'ProdiController.show')
    Route.post('prodi', 'ProdiController.store')
    Route.put('prodi/:id', 'ProdiController.update')
    Route.delete('prodi/:id', 'ProdiController.destroy')
})

Route.group(() => {
    Route.get('biaya', 'BiayaController.index') //.middleware('auth')
    Route.post('biaya', 'BiayaController.store')
    Route.put('biaya/:id', 'BiayaController.update')
    Route.delete('biaya/:id', 'BiayaController.destroy')
})

Route.group(() => {
    Route.get('matkul', 'MatkulController.index') //.middleware('auth')
    Route.get('matkul/:id', 'MatkulController.show')
    Route.post('matkul', 'MatkulController.store')
    Route.put('matkul/:id', 'MatkulController.update')
    Route.delete('matkul/:id', 'BiayaController.destroy')
})

Route.group(() => {
    Route.get('asun', 'AsunController.index') //.middleware('auth')
    Route.get('asun/:id', 'AsunController.show')
    Route.post('asun', 'AsunController.store')
    Route.put('asun/:id', 'AsunController.update')
    Route.delete('asun/:id', 'AsunController.destroy')
})

Route.group(() => {
    Route.get('mhs', 'MhswController.index') //.middleware('auth')
    Route.get('mhs/:id', 'MhswController.show')
    Route.post('mhs', 'MhswController.store')
    Route.put('mhs/:id', 'MhswController.update')
    Route.delete('mhs/:id', 'MhswController.destroy')
})


Route.group(() => {
    Route.get('nilai', 'NilaiController.index') //.middleware('auth')
    Route.get('nilai/:id', 'NilaiController.show')
    Route.post('nilai', 'NilaiController.store')
    Route.put('nilai/:id', 'NilaiController.update')
    Route.delete('nilai/:id', 'NilaiController.destroy')
})