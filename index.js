/*
example output:
{ message:
   'Spesifikasi kamar belum dipilih<br/>Tanggal Check-out harus sesudah tanggal Check-in<br/>Reservasi ID tidak di isi',
  group: undefined,
  errors:
   { SpesifikasiKamarId: 'Spesifikasi kamar belum dipilih',
     tanggalCheckOut: 'Tanggal Check-out harus sesudah tanggal Check-in',
     ReservasiId: 'Reservasi ID tidak di isi'
	 }
}
 */

module.exports = function generateErrorYup(e, req) {
	const _req = req || {}
	const prefix =  _req.prefixErrorYup ? `${_req.prefixErrorYup}.` : ''
	const error = {
		message: e.errors.join('<br/>') || 'Yup Validation Error !',
		group: _req.prefixErrorYup || undefined,
		errors:
			e.inner.length > 0
				? e.inner.reduce((acc, curVal) => {
					acc[`${prefix}${curVal.path}`] = curVal.message || curVal.type
					return acc
				}, {})
				: { [`${prefix}${e.path}`]: e.message || e.type },
	}
	return error
}
