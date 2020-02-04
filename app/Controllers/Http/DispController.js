'use strict'

class DispController {

    async Mhsw({ request, response, view }) {
        return view.render('template')
    }

    async Nilai({ request, response, view }) {
        return view.render('nilai')
    }

    async Prodi({ request, response, view }) {
        return view.render('prodi')
    }

    async Dosen({ request, response, view }) {
        return view.render('dosen')
    }

    async Matkul({ request, response, view }) {
        return view.render('matkul')
    }

    async Biaya({ request, response, view }) {
        return view.render('biaya')
    }

    async Asun({ request, response, view }) {
        return view.render('asun')
    }
}

module.exports = DispController