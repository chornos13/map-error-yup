const index = require('./index')
const yupErrorObj = {
	"name": "ValidationError",
	"value": {
		"MasterSpecialRequirementId": "cb7a2161-fc0c-4ed6-95a7-4c2a3a3a2a9e",
		"MasterTipeKasurId": "209d1c1c-c69e-4377-b749-5edfeefd0c32",
		"MasterTipeKamarId": "9221c678-4982-43c8-b43e-caa133e10670",
		"tanggalCheckIn": "2020-04-17T05:29:05.000Z",
		"tanggalCheckOut": "2020-04-17T05:29:07.000Z"
	},
	"errors": [
		"Spesifikasi kamar belum dipilih",
		"Tanggal Check-out harus sesudah tanggal Check-in",
		"Reservasi ID tidak di isi"
	],
	"inner": [
		{
			"name": "ValidationError",
			"path": "SpesifikasiKamarId",
			"type": "required",
			"errors": [
				"Spesifikasi kamar belum dipilih"
			],
			"inner": [],
			"message": "Spesifikasi kamar belum dipilih",
			"params": {
				"path": "SpesifikasiKamarId"
			}
		},
		{
			"name": "ValidationError",
			"value": "2020-04-17T05:29:07.000Z",
			"path": "tanggalCheckOut",
			"type": "shouldAfter",
			"errors": [
				"Tanggal Check-out harus sesudah tanggal Check-in"
			],
			"inner": [],
			"message": "Tanggal Check-out harus sesudah tanggal Check-in",
			"params": {
				"path": "tanggalCheckOut",
				"value": "2020-04-17T05:29:07.000Z",
			}
		},
		{
			"name": "ValidationError",
			"path": "ReservasiId",
			"type": "required",
			"errors": [
				"Reservasi ID tidak di isi"
			],
			"inner": [],
			"message": "Reservasi ID tidak di isi",
			"params": {
				"path": "ReservasiId"
			}
		}
	],
	"message": "3 errors occurred"
}


console.log(index(yupErrorObj))
